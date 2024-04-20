import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import { useNavigate } from "react-router-dom";
import bedroomSVG from "../../assets/svgs/bedroom.png";
import bathroomSVG from "../../assets/svgs/bathtub.png";

const Listings = () => {
  axios.defaults.withCredentials = true;
  const [listings, setListings] = useState([]);
  const navigate = useNavigate();

  // Define fetchData outside useEffect
  const fetchData = async () => {
    try {
      const listingResp = await axios.get("/api/listings");
      setListings(listingResp.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Call fetchData inside useEffect
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/listings/${id}`);
      // Use the callback function form of setListings to ensure you're working with the latest state
      setListings((prevListings) =>
        prevListings.filter((listing) => listing._id !== id)
      );
      navigate("/listings");
    } catch (error) {
      console.error("Error deleting listing:", error);
    }
  };

  return (
    <div className="container mt-5">
      <PageTitle title="Listings" />
      <div className="text-center">
        <h1 className="text-black no-underline relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[2.938rem] whitespace-nowrap">
          Listings
        </h1>
      </div>
      <hr className="my-5" />
      <div className="text-center  mb-4">
        <Link className="no-underline text-black" to="/listings/create">
          <h3 className=" hover:bg-gray-500 text-white px-3 py-3 rounded-lg relative tracking-[0.01em] leading-[2.5rem] font-medium inline-block min-w-[2.938rem] whitespace-nowrap bg-black ">
            Create a new listing
          </h3>
        </Link>
      </div>
      <div className="grid grid-cols-4 mq1050:grid-cols-2 mq450:grid-cols-1 gap-4 hover:">
        {listings.map((listing) => (
          <Link
            to={`/listings/${listing._id}`}
            key={listing._id}
            className="standard-link no-underline text-black"
          >
            <div className="border border-gray-300 rounded-md p-4 transition duration-300 ease-in-out transform hover:shadow-lg">
              {listing.images && listing.images.length > 0 && (
                <div>
                  <img
                    src={`http://localhost:1111/${listing.images[0]}`}
                    alt="Listing"
                    className="w-[250px] h-[300px] items-center my-2 mx-auto "
                  />
                </div>
              )}
              <h2 className="text-lg font-bold mb-2">
                {listing.price ? `$${listing.price}` : "Not Specified"}
              </h2>
              <p className="mb-2">
                <strong>Address: {listing.address || "Not Specified"}</strong>{" "}
              </p>
              <p className="mb-2">
                <img
                  className="max-w-[30px] mr-8 max-h-[30px]"
                  src={bedroomSVG}
                  alt=""
                />
                {""}
                {listing.bedrooms || "Not Specified"}
              </p>
              <p className="mb-2">
                {" "}
                <img
                  className="max-w-[30px] mr-8 max-h-[30px]"
                  src={bathroomSVG}
                  alt=""
                />
                {""} {listing.bathrooms || "Not Specified"}
              </p>
              <p className="mb-2">
                Property Type: {listing.propertyType || "Not Specified"}
              </p>
              <p className="mb-2">
                Square Footage: {listing.squareFootage || "Not Specified"}
              </p>
              <p className="mb-2">Status: {listing.status || "Not Specified"}</p>
              <p className="mb-2">
                Tags: {listing.tags ? listing.tags.join(", ") : "Not Specified"}
              </p>
              {/* Add more details here if needed */}
              <div className="flex justify-between">
                <Link to={`/listings/${listing._id}`} className="standard-link">
                  View
                </Link>
                <div>
                  <Link
                    to={`/listings/${listing._id}/update`}
                    className="standard-link mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(listing._id)}
                    className="standard-link"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Listings;