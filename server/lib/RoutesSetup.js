import PageRoutes from "../routes/PageRoutes.js";
import ListingRoutes from "../routes/ListingRoutes.js";
import UserRoutes from "../routes/UserRoutes.js";
import AuthenticationRoutes from "../routes/AuthenticationRoutes.js";
import ApplicationRoutes from "../routes/ApplicationRoutes.js";
import APIRoutes from "../routes/APIRoutes.js";

export default (app) => {
    // Registering our PageRoutes as middleware
    app.use("/", PageRoutes);

    // Authentication routes
    app.use("/", AuthenticationRoutes);
    
    // Our Resource routes
    app.use("/listings", ListingRoutes);

    // Our User routes
    app.use("/users", UserRoutes);

    // Our Application routes
    app.use("/applications", ApplicationRoutes);

    // API available endpoints
    app.use("/api", APIRoutes);
};