import { Router } from "express";
import { 
    index as listingIndex, 
    show as listingShow,
    create as listingCreate,
    update as listingUpdate,
    remove as listingDelete,
} from "../controllers/ListingsController.js";
import { show as userShow, create as userCreate, update as userUpdate } from "../controllers/UsersController.js";
import { isAuthenticated, authenticate as userAuthenticate, logout as userLogout } from "../controllers/AuthenticationController.js";
import { requestToken, authenticate as applicationAuthenticate } from "../controllers/ApplicationController.js";
import { upload } from "./UserRoutes.js";

const router = Router();

router.use((req, res, next) => {
    if (req.headers["accept"] !== "application/json") {
        req.headers["accept"] = "application/json";
        res.status(406);
        const error = new Error("NOT ACCEPTABLE");
        error.status = 406;
        next(error);
    }

    next();
});
router.post("/authenticate", requestToken);

router.get("/listings", applicationAuthenticate, isAuthenticated, listingIndex);
router.get("/listings/:id", applicationAuthenticate, isAuthenticated, listingShow);
router.post("/listings", applicationAuthenticate, isAuthenticated, listingCreate);
router.put("/listings/:id", applicationAuthenticate, isAuthenticated, listingUpdate);
router.delete("/listings/:id", applicationAuthenticate, isAuthenticated, listingDelete);

router.get("/users/:id", applicationAuthenticate, isAuthenticated, userShow);
router.post("/users", applicationAuthenticate, upload.single("avatar"), userCreate);
router.put("/users/:id", applicationAuthenticate, upload.single("avatar"), userUpdate);
router.post("/users/authenticate", applicationAuthenticate, userAuthenticate);
router.post("/users/logout", applicationAuthenticate, isAuthenticated, userLogout);


export default router;