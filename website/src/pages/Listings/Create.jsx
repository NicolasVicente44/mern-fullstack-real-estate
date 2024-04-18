import React, { useState } from "react";
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [propertyType, setPropertyType] = useState("House");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [squareFootage, setSquareFootage] = useState("");
  const [lotSize, setLotSize] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("Active");
  const [tags, setTags] = useState([]);
  const [openHouseDates, setOpenHouseDates] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const listing = {
      address,
      price,
      description,
      propertyType,
      bedrooms,
      bathrooms,
      squareFootage,
      lotSize,
      yearBuilt,
      images,
      status,
      tags,
      openHouseDates,
    };

    await axios.post("/api/listings", listing);
    navigate("/listings");
  };

  return (
    <div className=" max-w-[800px] px-4 mx-auto mt-5">
      <PageTitle title="Create Listing" />

      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Create Listing</h1>
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="price" className="block mb-1">
              Price:
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
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
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
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
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
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
              value={squareFootage}
              onChange={(e) => setSquareFootage(e.target.value)}
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
              value={lotSize}
              onChange={(e) => setLotSize(e.target.value)}
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
              value={yearBuilt}
              onChange={(e) => setYearBuilt(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label htmlFor="images" className="block mb-1">
              Images:
            </label>
            <input
              type="file"
              id="images"
              onChange={(e) => setImages(e.target.files)}
              multiple
              className="w-full p-2 border border-gray-300 rounded-md"
              required={!images || images.length === 0}
            />
            {images && images.length > 0 && (
              <div className="mt-2">
                {Array.from(images).map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
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
              value={status}
              onChange={(e) => setStatus(e.target.value)}
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
              value={tags.join(", ")}
              onChange={(e) => setTags(e.target.value.split(", "))}
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
              value={openHouseDates
                .map((date) =>
                  date ? new Date(date).toLocaleDateString() : ""
                )
                .join(", ")}
              onChange={(e) => setOpenHouseDates(e.target.value.split(", "))}
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

export default Create;
