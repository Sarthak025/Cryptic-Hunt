const mongoose = require("mongoose");

const connectToMongoDB = async () => {
  try {
    // Connection URL
    const url = "mongodb://localhost:27017/cryptichunt";

    // Connection options
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    // Connect to MongoDB
    await mongoose.connect(url, options);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = { connectToMongoDB };
