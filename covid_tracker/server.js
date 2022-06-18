const express = require("express");
const cors = require("cors");

const connect = require("./src/configs/db");

const userController = require("./src/controllers/userControl");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", userController);

app.listen(process.env.PORT || 5001, async () => {
  try {
    await connect();

    console.log(`port  ${process.env.PORT || 5001}`);
  } catch (error) {
    console.log("ERROR", error);
  }
});
