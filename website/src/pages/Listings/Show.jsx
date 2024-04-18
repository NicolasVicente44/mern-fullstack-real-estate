import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
        setListing(listingResp.data);
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!listing) {
    return (
      <div>
        <PageTitle title="Listing" />
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <PageTitle title="Listing" />

      <div className="text-center">
        <h1>Listing Details</h1>
      </div>

      <hr className="my-5" />

      <div>
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
        <p>Images: {listing.images}</p>
      </div>
    </div>
  );
};

export default Show;
