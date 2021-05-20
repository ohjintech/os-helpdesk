const sessionController = require("./controllers/sessionController");
const userController = require("./controllers/userController");
const router = express.Router();

/**
 * login
 */
router.post("/", userController.verifyUser, (req, res) => {
  // what should happen here on successful log in?
  res.redirect("/secret");
});
