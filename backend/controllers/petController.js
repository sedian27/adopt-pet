import pet from "../models/pet.js";

const registerPet = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.race ||
    !req.body.health ||
    !req.body.type ||
    !req.body.weight ||
    !req.body.height ||
    !req.body.age ||
    !req.body.petNumber
  )
    return res.status(400).send({ message: "Incomplete date" });

  let verifyPetNumber = await pet.findOne({ petNumber: req.body.petNumber });

  if (verifyPetNumber)
    return res.status(400).send({ message: "pet number exists" });

  let schema = new pet({
    name: req.body.name,
    race: req.body.race,
    health: req.body.health,
    type: req.body.type,
    weight: req.body.weight,
    height: req.body.height,
    age: req.body.age,
    dbStatus: true,
    petNumber: req.body.petNumber,
  });

  let result = await schema.save();
  if (!result)
    return res.status(500).send({
      message: "Failed to register pet",
    });
  res.status(200).send({ result });
};

export default { registerPet };
