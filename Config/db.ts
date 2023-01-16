import mongoose from "mongoose";
const url = "mongodb://localhost/student";

mongoose.connect(url);
mongoose.connection
  .on("open", () => {
    console.log("connected");
  })
  .once("error", (error) => {
    console.log("An error occured", error);
  });
