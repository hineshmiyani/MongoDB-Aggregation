use("aggregation-tuts");

// ✅ 9. What are the names and age of users who are inactive and have 'velit' as a tag?

db.getCollection("users").aggregate([
  {
    $match: {
      isActive: false,
      tags: "velit",
    },
  },
  {
    $project: {
      _id: 0,
      name: 1,
      age: 1,
    },
  },
]);
