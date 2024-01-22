import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routers/index.ts";

dotenv.config();
const { PORT, DB_URL } = process.env;

const app = express();
app.use(cors());

app.use(express.json());

const connect = async () => {
  await mongoose
    .connect(`${DB_URL}`)
    .then(() => console.log("Connected to MongoDB Successfuly!"))
    .catch((error) => console.error(`Error: ${error.message}`));
};
connect();

app.use("/api", router);

export const viteNodeApp = app;
