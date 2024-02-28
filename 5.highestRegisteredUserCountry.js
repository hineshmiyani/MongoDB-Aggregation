use("aggregation-tuts");

// ✅ 5. Which country has the highest number of registered users?

db.getCollection("users").aggregate([
  {
    $group: {
      _id: "$company.location.country",
      userCount: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      userCount: -1,
    },
  },
  {
    $limit: 1,
  },
]);
