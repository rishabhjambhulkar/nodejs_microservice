const dotenv = require("dotenv");

console.log("NODE_ENV:", process.env.NODE_ENV); // Check NODE_ENV value

// Check if NODE_ENV is set and it's not production
if (process.env.NODE_ENV && process.env.NODE_ENV !== "prod") {
  // const envPath = `../config.env.${process.env.NODE_ENV}`; // Construct path based on NODE_ENV
  // console.log("Loading environment file:", envPath);
  dotenv.config({ path: "./config.env" });// Load environment file
} else {
  console.log("Loading default .env file");
  dotenv.config(); // Load default .env file
}

// Debug the loaded environment variables
console.log("Loaded PORT:", process.env.PORT);

module.exports = {
  PORT: process.env.PORT,
  DB_URL: process.env.MONGODB_URI,
  APP_SECRET: process.env.APP_SECRET,
  BASE_URL: process.env.BASE_URL,
  EXCHANGE_NAME: process.env.EXCHANGE_NAME,
  MSG_QUEUE_URL: process.env.MSG_QUEUE_URL,
  CUSTOMER_SERVICE: "customer_service",
  SHOPPING_SERVICE: "shopping_service",
};
