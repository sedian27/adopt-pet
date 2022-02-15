import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import db from "./db/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("NODE SERVER RUNNING IN PORT: ", process.env.PORT);
});

db.dbConnection();
