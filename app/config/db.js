import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Trying to connect to the database...");
    // await mongoose.connect(
    //   "mongodb://rizan1998:LI107beWi36ZANtf@ac-cvott5h-shard-00-00.ff816x3.mongodb.net:27017,ac-cvott5h-shard-00-01.ff816x3.mongodb.net:27017,ac-cvott5h-shard-00-02.ff816x3.mongodb.net:27017/?ssl=true&replicaSet=atlas-gz9kw5-shard-0&authSource=admin&retryWrites=true&w=majority"
    // );
    await mongoose.connect(process.env.DB_URI);
    console.log("Database Connected");

    // const db = mongoose.connection;
    // db.on("error", (error) => {
    //   console.error(`Connection error: ${error.message}`);
    // });
    // db.once("open", () => {
    //   console.log("Database connected successfully!");
    // });
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Menutup aplikasi karena koneksi gagal
  }
};

export default connectDB;
