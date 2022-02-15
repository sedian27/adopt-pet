import express from "express";
import adoptRecord from "../controllers/adoptRecordController.js";

const router = express.Router();

router.post("/registerAdoptRecord", adoptRecord.registerAdoptRecord);

export default router;
