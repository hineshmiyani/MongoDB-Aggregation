use("aggregation-tuts");

// ✅ 4. Find a total number of males and females
db.getCollection("users").aggregate([
  {
    $group: {
      _id: "$gender",
      count: {
        $sum: 1,
      },
    },
  },
]);
