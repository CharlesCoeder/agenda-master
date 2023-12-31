import mongoose from "mongoose";

export const connectMongoDB = async () => {
  if (mongoose.connection.readyState) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
    throw error;
  }
};
