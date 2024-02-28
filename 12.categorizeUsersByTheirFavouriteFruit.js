use("aggregation-tuts");

// ✅ 12. Categorize users by their favourite fruit
db.getCollection("users").aggregate([
  {
    $group: {
      _id: "$favoriteFruit",
      userCount: {
        $push: "$name",
      },
    },
  },
]);
