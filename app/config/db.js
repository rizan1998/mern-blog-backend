import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Database Connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Menutup aplikasi karena koneksi gagal
  }
};

export default connectDB;
