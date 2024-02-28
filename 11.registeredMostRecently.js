use("aggregation-tuts");

// ✅ 11. Who has registered most recently?
db.getCollection("users").aggregate([
  {
    $sort: {
      registered: -1,
    },
  },
  {
    $limit: 4,
  },
  {
    $project: {
      _id: 0,
      name: 1,
      registered: 1,
    },
  },
]);
