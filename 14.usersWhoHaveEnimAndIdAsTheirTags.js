use("aggregation-tuts");

// ✅ 14. Find users who have 'enim' and 'id' as their tags.

// Retrieve the "users" collection from the database
db.getCollection("users").aggregate([
  {
    // The $match stage filters the documents
    $match: {
      // Specifies the condition for the "tags" field
      tags: {
        // The $all operator selects the documents where the "tags" array contains all the specified elements
        $all: ["enim", "id"],
      },
    },
  },
]);
