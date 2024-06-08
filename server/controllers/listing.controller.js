import Listing from "../models/listing.model.js";
import User from "../models/user.model.js"
import { errorHandler } from "../utils/error.js";

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

// export const deleteListing = async (req, res, next) => {
//     const listing = await Listing.findById(req.params.id);

//     if (!listing) {
//       return next(errorHandler(404, 'Listing not found!'));
//     }

//     if (req.user.id !== listing.userRef) {
//       return next(errorHandler(401, 'You can only delete your own listings!'));
//     }

//     try {
//       await Listing.findByIdAndDelete(req.params.id);
//       res.status(200).json('Listing has been deleted!');
//     } catch (error) {
//       next(error);
//     }
//   };

//   export const updateListing = async (req, res, next) => {
//     const listing = await Listing.findById(req.params.id);
//     if (!listing) {
//       return next(errorHandler(404, 'Listing not found!'));
//     }
//     if (req.user.id !== listing.userRef) {
//       return next(errorHandler(401, 'You can only update your own listings!'));
//     }

//     try {
//       const updatedListing = await Listing.findByIdAndUpdate(
//         req.params.id,
//         req.body,
//         { new: true }
//       );
//       res.status(200).json(updatedListing);
//     } catch (error) {
//       next(error);
//     }
//   };

export const getListing = async (req, res, next) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
      return next(errorHandler(404, "Listing not found!"));
    }
    res.status(200).json(listing);
  } catch (error) {
    next(error);
  }
};

export const getListings = async (req, res, next) => {
  try {
    const listings = await Listing.find({},{});
    const listingsWithUsernames = await Promise.all(
      listings.map(async listing => {
        // Fetch the user based on userRef
        const user = await User.findById(listing.userRef).select('username');

        // Append the username to the listing
        return {
          ...listing._doc,
          user: user ? user.username : null
        };
      })
    );

    // Send the modified listings to the frontend
    return res.status(200).json(listingsWithUsernames);
  } catch (error) {
    next(error);
  }
};

export const updateNewsStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { allowNews } = req.body;

    const updatedListing = await Listing.findByIdAndUpdate(
      id,
      {
        $set: {
          allowNews: allowNews
        },
      },
      { new: true }
    );

    res.json(updatedListing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
