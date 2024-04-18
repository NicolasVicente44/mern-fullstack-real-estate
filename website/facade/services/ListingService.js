import APIProvider from "../utilities/APIProvider.js";

const ListingService = (async () => {
  const apiProvider = await APIProvider();

  return {
    index: async (cookies) => {
      try {
        const listings = await apiProvider.get("/listings", {
          headers: {
            Cookie: cookies,
          },
        });

        return listings.data?.listings || [];
      } catch (error) {
        throw error;
      }
    },

    show: async (id, cookies) => {
      try {
        const listing = await apiProvider.get(`/listings/${id}`, {
          headers: {
            Cookie: cookies,
          },
        });

        return listing.data?.listing || {};
      } catch (error) {
        throw error;
      }
    },

    create: async (listing, cookies) => {
      try {
        await apiProvider.post("/listings", listing, {
          headers: {
            Cookie: cookies,
          },
        });
      } catch (error) {
        throw error;
      }
    },

    update: async (id, listing, cookies) => {
      try {
        await apiProvider.put(`/listings/${id}`, listing, {
          headers: {
            Cookie: cookies,
          },
        });
      } catch (error) {
        throw error;
      }
    },

    destroy: async (id, cookies) => {
      try {
        await apiProvider.delete(`/listings/${id}`, {
          headers: {
            Cookie: cookies,
          },
        });
      } catch (error) {
        throw error;
      }
    },
  };
})();

export default ListingService;
