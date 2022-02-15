import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import petRoutes from "./routes/petRoutes.js";
import roleRoutes from "./routes/roleRoutes.js";
import db from "./db/db.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/pet", petRoutes);
app.use("/api/role", roleRoutes);

app.listen(process.env.PORT, () => {
  console.log("NODE SERVER RUNNING IN PORT: ", process.env.PORT);
});

db.dbConnection();
