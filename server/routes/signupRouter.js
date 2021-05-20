const express = require("express");

// const sessionController = require("./controllers/sessionController");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("hello");
});

router.post(
  "/",
  userController.createUser,
  userController.verifyUser,
  (req, res) => {
    res.status(200).send(res.locals.user);
  }
);

module.exports = router;
