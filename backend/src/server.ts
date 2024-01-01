import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router/router.ts";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use("/", router);

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("connected successfully");
});

app.listen(port, () => console.log("Access -> http://localhost:" + port));
