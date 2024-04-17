import ListingService from "../services/ListingService.js";

export const index = async (req, res, __) => {
  try {
    const listingService = await ListingService;
    const listings = await listingService.index(req.headers.cookie);

    res.json(listings);
  } catch (error) {
    console.error(error);

    res.json([]);
  }
};

export const show = async (req, res, _) => {
  try {
    const listingService = await ListingService;
    const listing = await listingService.show(
      req.params.id,
      req.headers.cookie
    );

    res.json(listing);
  } catch (error) {
    console.error(error);

    res.json({});
  }
};

export const create = async (req, res, _) => {
  try {
    const listingService = await ListingService;
    const listing = await listingService.create(req.body, req.headers.cookie);

    res.json(listing);
  } catch (error) {
    console.error(error);

    res.json({});
  }
};

export const update = async (req, res, _) => {
  try {
    const listingService = await ListingService;
    const listing = await listingService.update(
      req.params.id,
      req.body,
      req.headers.cookie
    );

    res.json(listing);
  } catch (error) {
    console.error(error);

    res.json({});
  }
};

export const destroy = async (req, res, _) => {
  try {
    const listingService = await ListingService;
    await listingService.destroy(req.params.id, req.headers.cookie);

    res.json({});
  } catch (error) {
    console.error(error);

    res.json({});
  }
};
