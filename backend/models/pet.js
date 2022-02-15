import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: String,
  race: String,
  health: String,
  type: String,
  weight: Number,
  height: Number,
  age: Number,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const pet = mongoose.model("pets", petSchema);
export default pet;
