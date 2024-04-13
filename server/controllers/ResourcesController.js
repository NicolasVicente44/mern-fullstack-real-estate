import Resource from "../models/Resource.js";

const resourceTypes = Resource.schema.path("propertyType").enumValues;

export const index = async (req, res, next) => {
  try {
    const resources = await Resource.find().populate("author");

    res.format({
      "text/html": () => {
        res.render("resources/index", { resources, title: "Resources List" });
      },
      "application/json": () => {
        res.json({ resources });
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
    const resource = await Resource.findById(req.params.id).populate("author");

    res.format({
      "text/html": () => {
        res.render("resources/show", { resource, title: "Resource View" });
      },
      "application/json": () => {
        res.json({ resource });
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
    res.render("resources/add", {
      resourceTypes,
      formType: "create",
      title: "New Resource",
    });
  } catch (error) {
    next(error);
  }
};

export const edit = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) throw new Error("Missing required ID");

    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      req.status = 404;
      throw new Error("Resource does not exist");
    }

    res.render("resources/edit", {
      resource,
      resourceTypes,
      formType: "update",
      title: "Edit Resource",
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
  
      const newResource = new Resource({
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
  
      await newResource.save();
  
      console.log(req.body);
  
      res.format({
        "text/html": () => {
          req.session.notifications = [
            {
              alertType: "alert-success",
              message: "Resource was created successfully",
            },
          ];
          res.redirect("/resources");
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
        { alertType: "alert-danger", message: "Resource failed to create" },
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

    const resource = await Resource.findById(req.params.id);
    // If the resource doesn't exist, return a 404 response
    if (!resource) {
      return res.status(404).json({ message: "resource not found" });
    }

    // Update all fields of the resource with the new values from the request body
    resource.address = address;
    resource.price =price;
    resource.description = description;
    resource.propertyType = propertyType;
    resource.bedrooms = bedrooms;
    resource.bathrooms = bathrooms;
    resource.squareFootage = squareFootage;
    resource.lotSize = lotSize;
    resource.yearBuilt = yearBuilt;
    resource.images = images;
    resource.status = status;
    resource.agent = agent;
    resource.tags = tags;
    resource.priceHistory = priceHistory;
    resource.openHouseDate = openHouseDates;

    await resource.save();

    res.format({
      "text/html": () => {
        req.session.notifications = [
          {
            alertType: "alert-success",
            message: "Resource was updated successfully",
          },
        ];
        res.redirect("/resources");
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
      { alertType: "alert-danger", message: "Resource failed to update" },
    ];
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const resource = await Resource.findById(req.params.id);

    if (!resource) {
      req.status = 404;
      throw new Error("Resource does not exist");
    }

    await Resource.findByIdAndDelete(req.params.id);

    res.format({
      "text/html": () => {
        req.session.notifications = [
          {
            alertType: "alert-success",
            message: "Resource was deleted successfully",
          },
        ];
        res.redirect("/resources");
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
      { alertType: "alert-danger", message: "Resource failed to delete" },
    ];
    next(error);
  }
};
