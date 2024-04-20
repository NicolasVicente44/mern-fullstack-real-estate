import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import axios from "axios";

const Show = () => {
  axios.defaults.withCredentials = true;
  const { id } = useParams();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listingResp = await axios.get(`/api/listings/${id}`);
        const listing = listingResp.data;

        let agent = null;
        if (listing.agent) {
          const agentResp = await axios.get(`/api/users/${listing.agent}`);
          agent = agentResp.data;
        }

        setListing({ ...listing, agent });
      } catch (error) {
        console.error("Error fetching listing or agent:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!listing) {
    return (
      <div className="text-center mx-auto my-0 pt-12">
        <PageTitle title="Listing" />
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[800px] my-0 mt-5">
      <PageTitle title="Listing" />
      <div className="text-center">
        <h1>Listing Details</h1>
      </div>
      <hr className="my-5" />
      <div className="flex">
        <div className="flex-1">
          <h5>Address: {listing.address}</h5>
          <p>Price: {listing.price}</p>
          <p>Description: {listing.description}</p>
          <p>Property Type: {listing.propertyType}</p>
          <p>Bedrooms: {listing.bedrooms}</p>
          <p>Bathrooms: {listing.bathrooms}</p>
          <p>Square Footage: {listing.squareFootage}</p>
          <p>Lot Size: {listing.lotSize}</p>
          <p>Year Built: {listing.yearBuilt}</p>
          <p>Status: {listing.status}</p>
          <p>Tags: {listing.tags.join(", ")}</p>
          <div>
            <p>
              Listed By:{" "}
              {listing.agent && listing.agent.name ? (
                <div className="flex items-center">
                  {listing.agent.avatar && (
                    <img
                      src={`http://localhost:1111/${listing.agent.avatar}`}
                      alt={listing.agent.name}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                  )}
                  <p className="text-gray-700">{listing.agent.name}</p>
                </div>
              ) : (
                <strong className="text-gray-700">
                  Agent information not available
                </strong>
              )}
            </p>
            <div className="text-center">
              <Link
                to={`/listings/${listing._id}/update`}
                className="no-underline hover:bg-gray-500 text-white px-2 py-1 rounded-lg relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[2.938rem] whitespace-nowrap bg-black "
              >
                Edit Listing
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-1 gap-4">
        {listing.images.map((image, index) => (
          <img
            key={index}
            className=" mx-auto my-0 max-h-[550px] max-w-[900px] rounded-md"
            src={`http://localhost:1111/${image}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Show;
