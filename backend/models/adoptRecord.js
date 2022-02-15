import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.ObjectId, ref: "users" },
  petId: { type: mongoose.Schema.ObjectId, ref: "pets" },
  adoptDate: { type: Date, default: Date.now },
});

const adoptRecord = mongoose.model("adoptRecords", schema);

export default adoptRecord;
