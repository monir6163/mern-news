const authController = require("../controllers/authController");
const middleware = require("../middleware/middleware");

const router = require("express").Router();

router.post("/api/login", authController.login);
router.post(
  "/api/news/writer/add",
  middleware.auth,
  middleware.role,
  authController.add_writer
);
router.get(
  "/api/news/get/writers",
  middleware.auth,
  middleware.role,
  authController.get_writers
);
module.exports = router;
