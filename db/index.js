import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async function () {
  try {
    const connectionInstance = mongoose.connect(`${process.env.mongodb_uri}/${DB_NAME}`);
    console.log(`MongoDb connected`);
  } catch (err) {
    console.log(`Error in connecting to mongodb ${err}`);
    process.exit(1);
  }
};
export default connectDB;
