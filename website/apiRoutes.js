import { Router } from "express";
import * as Listing from "./facade/controllers/ListingController.js";
import * as User from "./facade/controllers/UsersController.js";

const router = Router();

router.get("/listings", Listing.index);
router.get("/listings/:id", Listing.show);
router.post("/listings", Listing.create);
router.put("/listings/:id", Listing.update);
router.delete("/listings/:id", Listing.destroy);

router.get("/users/:id", User.show);
router.post("/users", User.create);
router.put("/users/:id", User.update);
router.post("/users/authenticate", User.authenticate);
router.post("/users/logout", User.logout);


export default router;