import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import axios from "axios";

const Update = () => {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    address: "",
    price: "",
    description: "",
    propertyType: "House",
    bedrooms: "",
    bathrooms: "",
    squareFootage: "",
    lotSize: "",
    yearBuilt: "",
    images: [],
    status: "Active",
    tags: [],
    openHouseDates: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listingResp = await axios.get(`/api/listings/${id}`);
        setFormData(listingResp.data);
      } catch (error) {
        console.error("Error fetching listing:", error);
      }
    };
    fetchData();
  }, [id]);

  const formatPrice = (price) => {
    price = price.replace(/,/g, "");
    if (price.length > 3) {
      price = price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return price;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImagesChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      images: Array.from(e.target.files),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/listings/${id}`, formData);
      navigate("/listings");
    } catch (error) {
      console.error("Error updating listing:", error);
    }
  };
  return (
    <div className="max-w-[800px] px-4  mx-auto mt-5">
      <PageTitle title="Update Listing" />

      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Update Listing</h1>
      </div>

      <hr className="mb-4" />

      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="address" className="block mb-1">
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block mb-1">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="propertyType" className="block mb-1">
              Property Type:
            </label>
            <select
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Condominium">Condominium</option>
              <option value="Land">Land</option>
              <option value="Commercial">Commercial</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="bedrooms" className="block mb-1">
              Bedrooms:
            </label>
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="bathrooms" className="block mb-1">
              Bathrooms:
            </label>
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="squareFootage" className="block mb-1">
              Square Footage:
            </label>
            <input
              type="number"
              id="squareFootage"
              name="squareFootage"
              value={formData.squareFootage}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="lotSize" className="block mb-1">
              Lot Size:
            </label>
            <input
              type="number"
              id="lotSize"
              name="lotSize"
              value={formData.lotSize}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="yearBuilt" className="block mb-1">
              Year Built:
            </label>
            <input
              type="number"
              id="yearBuilt"
              name="yearBuilt"
              value={formData.yearBuilt}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="images" className="block mb-1">
              Images:
            </label>

            {formData.images && formData.images.length > 0 && (
              <div className="mt-2">
                {Array.from(formData.images).map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:1111/${image}`}
                    alt={`Image ${index}`}
                    className="w-32 h-32 object-cover mr-2 mb-2 rounded-md"
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <label htmlFor="status" className="block mb-1">
              Status:
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Sold">Sold</option>
              <option value="Expired">Expired</option>
            </select>
          </div>

          <div>
            <label htmlFor="tags" className="block mb-1">
              Tags:
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags.join(", ")}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  tags: e.target.value.split(", "),
                }))
              }
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="openHouseDates" className="block mb-1">
              Open House Dates:
            </label>
            <input
              type="text"
              id="openHouseDates"
              name="openHouseDates"
              value={formData.openHouseDates
                .map((date) =>
                  date ? new Date(date).toLocaleDateString() : ""
                )
                .join(", ")}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  openHouseDates: e.target.value.split(", "),
                }))
              }
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
