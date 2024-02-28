use("aggregation-tuts");

// ✅ 8. How many users have 'enim' as one of their tags?

db.getCollection("users").aggregate([
  {
    $match: {
      tags: "enim",
    },
  },
  {
    $count: "userWithEnimTag",
  },
]);
