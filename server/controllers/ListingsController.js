import Listing from "../models/Listing.js";

const listingTypes = Listing.schema.path("propertyType").enumValues;

export const index = async (req, res, next) => {
  try {
    const listings = await Listing.find().populate("author");

    res.format({
      "text/html": () => {
        res.render("listings/index", { listings, title: "Listings" });
      },
      "application/json": () => {
        res.json({ listings });
      },
      default: () => {
        res.status(406).send("NOT ACCEPTABLE");
      },
    });
  } catch (error) {
    next(error);
  }
};

export const show = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id).populate("author");

    res.format({
      "text/html": () => {
        res.render("listings/show", { listing, title: "Listing Details" });
      },
      "application/json": () => {
        res.json({ listing });
      },
      default: () => {
        res.status(406).send("NOT ACCEPTABLE");
      },
    });
  } catch (error) {
    next(error);
  }
};

export const add = async (req, res, next) => {
  try {
    res.render("listings/add", {
      listingTypes,
      formType: "create",
      title: "New Listing",
    });
  } catch (error) {
    next(error);
  }
};

export const edit = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error("Missing required ID");

    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      req.status = 404;
      throw new Error("Listing does not exist");
    }

    res.render("listings/edit", {
      listing,
      listingTypes,
      formType: "update",
      title: "Edit Listing",
    });
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const {
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
      agent,
      tags,
      priceHistory,
      openHouseDates, // Change from openHouseDate to openHouseDates
    } = req.body;

    const newListing = new Listing({
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
      agent,
      tags,
      priceHistory,
      openHouseDates, // Change from openHouseDate to openHouseDates
      // Set createdBy to the user's ID from the request, if available
      author: req?.user?.id,
    });

    await newListing.save();

    console.log(req.body);

    res.format({
      "text/html": () => {
        req.session.notifications = [
          {
            alertType: "alert-success",
            message: "Listing was created successfully",
          },
        ];
        res.redirect("/listings");
      },
      "application/json": () => {
        res.status(201).json({ status: 201, message: "SUCCESS" });
      },
      default: () => {
        res.status(406).send("NOT ACCEPTABLE");
      },
    });
  } catch (error) {
    req.session.notifications = [
      { alertType: "alert-danger", message: "Listing failed to create" },
    ];
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const {
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
      agent,
      tags,
      priceHistory,
      openHouseDates,
    } = req.body;

    const listing = await Listing.findById(req.params.id);
    // If the listing doesn't exist, return a 404 response
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    // Update all fields of the listing with the new values from the request body
    listing.address = address;
    listing.price = price;
    listing.description = description;
    listing.propertyType = propertyType;
    listing.bedrooms = bedrooms;
    listing.bathrooms = bathrooms;
    listing.squareFootage = squareFootage;
    listing.lotSize = lotSize;
    listing.yearBuilt = yearBuilt;
    listing.images = images;
    listing.status = status;
    listing.agent = agent;
    listing.tags = tags;
    listing.priceHistory = priceHistory;
    listing.openHouseDate = openHouseDates;

    await listing.save();

    res.format({
      "text/html": () => {
        req.session.notifications = [
          {
            alertType: "alert-success",
            message: "Listing was updated successfully",
          },
        ];
        res.redirect("/listings");
      },
      "application/json": () => {
        res.status(200).json({ status: 200, message: "SUCCESS" });
      },
      default: () => {
        res.status(406).send("NOT ACCEPTABLE");
      },
    });
  } catch (error) {
    req.session.notifications = [
      { alertType: "alert-danger", message: "Listing failed to update" },
    ];
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      req.status = 404;
      throw new Error("Listing does not exist");
    }

    await Listing.findByIdAndDelete(req.params.id);

    res.format({
      "text/html": () => {
        req.session.notifications = [
          {
            alertType: "alert-success",
            message: "Listing was deleted successfully",
          },
        ];
        res.redirect("/listings");
      },
      "application/json": () => {
        res.status(200).json({ status: 200, message: "SUCCESS" });
      },
      default: () => {
        res.status(406).send("NOT ACCEPTABLE");
      },
    });
  } catch (error) {
    req.session.notifications = [
      { alertType: "alert-danger", message: "Listing failed to delete" },
    ];
    next(error);
  }
};
