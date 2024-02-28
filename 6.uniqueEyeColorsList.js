use("aggregation-tuts");

// ✅ 6. List all unique eye colors present in the collection

db.getCollection("users").aggregate([
  {
    $group: {
      _id: "$eyeColor",
    },
  },
]);
