use("aggregation-tuts");

// ✅ 3. List the top 2 most common favorite fruits among users.
db.getCollection("users").aggregate([
  {
    $group: {
      _id: "$favoriteFruit",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: -1,
    },
  },
  {
    $limit: 2,
  },
]);
