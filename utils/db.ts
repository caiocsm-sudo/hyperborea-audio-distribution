import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const connectDb = async () => {
  try {
    const mongoURI = `${process.env.MONGO_URI}`;
    await mongoose.connect(mongoURI);

    console.log("connected to the database");
  } catch (error) {
    throw new Error("Failed to connect to MongoDB: " + error);
  }
}

export default connectDb;
