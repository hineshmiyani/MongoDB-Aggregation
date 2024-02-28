use("aggregation-tuts");

// ✅ 15. List all companies located in the USA with their corresponding user count.

// Retrieve the "users" collection from the database
db.getCollection("users").aggregate([
  {
    $match: {
      "company.location.country": "USA",
    },
  },
  {
    $group: {
      _id: "$company.title",
      company: {
        $push: "$company",
      },
      userCount: {
        $sum: 1,
      },
    },
  },
]);
