import adoptRecord from "../models/adoptRecord.js";

import user from "../models/user.js";
import pet from "../models/pet.js";

const registerAdoptRecord = async (req, res) => {
  let { email, petNumber } = req.body;

  if (!email || !petNumber)
    return res.status(400).send({ message: "Incomplete data" });

  const userId = await user.findOne({ email });
  const petId = await pet.findOne({ petNumber });

  if (!userId || !petNumber)
    return res.status(400).send({ message: "Error Data" });

  const schema = new adoptRecord({
    userId: userId._id,
    petId: petId._id,
  });

  let result = await schema.save();

  if (!result)
    return res.status(500).send({ message: "Failed to register adoptRecord" });

  res.status(200).send({ result });
};

export default { registerAdoptRecord };
