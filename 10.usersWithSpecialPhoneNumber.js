// This script queries a database to find and count the number of users whose phone numbers start with '+1 (940)'.
use("aggregation-tuts");

// ✅ 10. How many users have a phone number starting with '+1 (940)'?
db.getCollection("users").aggregate([
  {
    $match: {
      "company.phone": /^\+1 \(940\)/,
    },
  },
  {
    $count: "usersWithSpecialPhoneNumber",
  },
]);
