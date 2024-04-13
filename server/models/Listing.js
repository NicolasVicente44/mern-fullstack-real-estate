import mongoose, { Schema } from "mongoose";

const ListingSchema = new Schema(
  {
    address: {
      type: String,
    },
    price: {
      type: Number,
    },
    description: {
      type: String,
    },
    propertyType: {
      type: String,
      enum: [
        "House",
        "Apartment",
        "Condominium",
        "Land",
        "Commercial",
        "Other",
      ],
    },
    bedrooms: {
      type: Number,
    },
    bathrooms: {
      type: Number,
    },
    squareFootage: Number,
    lotSize: Number,
    yearBuilt: Number,
    images: [String],
    status: {
      type: String,
      enum: ["Active", "Pending", "Sold", "Expired"],
      default: "Active",
    },
    agent: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    tags: [String],
    priceHistory: [{ price: Number, date: Date }],
    openHouseDates: [Date],
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Listing must have an author"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Listing", ListingSchema);
