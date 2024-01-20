const { model, Schema } = require("mongoose");

const authSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      select: false,
      required: [true, "Password is required"],
    },
    role: {
      type: String,
      required: [true, "Role is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("authors", authSchema);
