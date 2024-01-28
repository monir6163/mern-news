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
  async add_writer(req, res) {
    let emailValidatorRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const { email, password, name, category } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    if (!emailValidatorRegex.test(email)) {
      return res.status(400).json({ message: "Email is invalid" });
    }
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }
    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }
    try {
      const existingUser = await authModel.findOne({ email: email.trim() });
      if (existingUser) {
        return res.status(400).json({ message: "Writer already exists" });
      } else {
        const hashedPassword = await bcrypt.hash(password.trim(), 10);
        const user = await authModel.create({
          email: email.trim(),
          password: hashedPassword,
          name: name.trim(),
          category: category.trim(),
          role: "writer",
        });
        return res.status(200).json({ message: "Writer added successfully" });
      }
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async get_writers(req, res) {
    try {
      const writers = await authModel
        .find({ role: "writer" })
        .sort({ createdAt: -1 });
      return res.status(200).json({ writers });
    } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}
module.exports = new authController();
