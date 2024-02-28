// This script performs an aggregation on the "books" collection by joining it with the "authors" collection based on matching author IDs, and then adds the matched author information to the book documents.

use("aggregation-tuts");

// Retrieve the "books" collection from the database and perform an aggregation
db.getCollection("books").aggregate([
  {
    // The $lookup stage allows for a join with another collection
    $lookup: {
      from: "authors", // Specifies the collection to join with
      localField: "author_id", // The field from the "books" collection to match values against
      foreignField: "_id", // The field from the "authors" collection to match values against
      as: "author", // The name of the new array field to add to the input documents
    },
  },
  {
    // The $addFields stage allows for the addition of new fields to documents
    $addFields: {
      author: {
        // The $arrayElemAt operator returns the element at the specified array index
        $arrayElemAt: ["$author", 0], // Retrieves the first element of the "author" array
      },
    },
  },
]);
