const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://attadapravalika:attadapravalika@cluster0.rn5ugas.mongodb.net/postapp?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("database connected!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDb;
