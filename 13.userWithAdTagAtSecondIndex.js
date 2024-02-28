use("aggregation-tuts");

// ✅ 13. How many users have 'ad' as the second tag in their list of tags?
db.getCollection("users").aggregate([
  {
    $match: {
      "tags.1": "ad",
    },
  },
  {
    $count: "userWithAdTagAtSecondIndex",
  },
]);
