use("aggregation-tuts");

// ✅ 1. How many users are active?
db.getCollection("users").aggregate([
  {
    $match: {
      isActive: true,
    },
  },
  {
    $count: "activeUsers",
  },
]);
