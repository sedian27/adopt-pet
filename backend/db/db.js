import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("CONNECTION WITH MONGO: OK!");
  } catch (e) {
    console.log("ERROR TO CONNECT WITH DB: \n" + e);
  }
};

export default { dbConnection };
