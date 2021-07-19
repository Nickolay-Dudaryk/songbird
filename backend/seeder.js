import mongoose from "mongoose";
import dotenv from 'dotenv';
import birdsData from "./data/birds-data.js";
import Bird from "./models/birdModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Bird.deleteMany();
    await Bird.insertMany(birdsData);

    console.log('Data imported');
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {
    await Bird.deleteMany();

    console.log('Data destroyed')
    process.exit()
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}


if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}