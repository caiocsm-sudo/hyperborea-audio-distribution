import mongoose from "mongoose";

const connectDb = async (mongoURI: string) => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to database");
  } catch (error) {
    throw new Error("Failed to connect to MongoDB: " + error);
  }
}

export default connectDb;
