use("aggregation-tuts");

// ✅ 7. What is the average number of tags per user?

// ✅ Using a $unwind
db.getCollection("users").aggregate([
  {
    $unwind: {
      path: "$tags",
    },
  },
  {
    $group: {
      _id: "$_id",
      numberOfTags: {
        $sum: 1,
      },
    },
  },
  {
    $group: {
      _id: null,
      averageNumberOfTags: {
        $avg: "$numberOfTags",
      },
    },
  },
]);

//  ✅ Using a $addFields
db.getCollection("users").aggregate([
  {
    $addFields: {
      numberOfTags: {
        $size: {
          $ifNull: ["$tags", []],
        },
      },
    },
  },
  {
    $group: {
      _id: null,
      averageNumberOfTags: {
        $avg: "$numberOfTags",
      },
    },
  },
]);
