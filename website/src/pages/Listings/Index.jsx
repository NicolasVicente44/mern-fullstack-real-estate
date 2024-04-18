import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Listings = () => {
  axios.defaults.withCredentials = true;

  const [listings, setListings] = useState([]);

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
    } catch (error) {
      console.error("Error deleting listing:", error);
    }
  };

  return (
    <div className="container mt-5">
      <PageTitle title="Listings" />

      <div className="text-center">
        <h1>Listings</h1>
      </div>

      <hr className="my-5" />

      <div className="text-center mb-4">
        <Link to="/listings/create" className="standard-link">
          <h3>Create a new listing</h3>
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
              <h2 className="text-lg font-bold mb-2">
                {listing.price ? `$` + listing.price : "No Price"}
              </h2>
              <p className="mb-2">Address: {listing.address}</p>
              <p className="mb-2">Images: {listing.images ? "Yes" : "No"}</p>
              <p className="mb-2">Description: {listing.description}</p>
              <p className="mb-2">Property Type: {listing.propertyType}</p>
              <p className="mb-2">Bedrooms: {listing.bedrooms}</p>
              <p className="mb-2">Bathrooms: {listing.bathrooms}</p>
              <p className="mb-2">Square Footage: {listing.squareFootage}</p>
              <p className="mb-2">Lot Size: {listing.lotSize}</p>
              <p className="mb-2">Year Built: {listing.yearBuilt}</p>
              <p className="mb-2">Status: {listing.status}</p>
              <p className="mb-2">Tags: {listing.tags.join(", ")}</p>
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
