//importation mongoose
const mongoose = require("mongoose");
//connect mongoose to server
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("data baaaaaase connecteeed successfullyyy");
  } catch (error) {
    console.log(error);
    console.log("faaaaaaaaaaiiil to connect");
  }
};
module.exports = connectDb;
