use("aggregation-tuts");

// ✅ 2. What is the average age of all users?
db.getCollection("users").aggregate([
  {
    $group: {
      _id: null,
      age: {
        $avg: "$age",
      },
    },
  },
]);
