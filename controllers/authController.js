const authModel = require("../models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class authController {
  async login(req, res) {
    const { email, password } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    try {
      const user = await authModel.findOne({ email }).select("+password");
      if (!user) {
        return res.status(400).json({ message: "Email not found" });
      } else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ message: "Password is incorrect" });
        } else {
          const userObj = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            category: user.category,
          };
          const token = jwt.sign(userObj, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });

          return res
            .status(200)
            .json({ message: "Login success", status: "ok", token });
        }
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = new authController();
