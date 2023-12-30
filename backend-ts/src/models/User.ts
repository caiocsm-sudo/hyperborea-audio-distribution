import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please, create a user name"],
    trim: true,
    maxLength: [
      30,
      "Too long. Please, provide a name with 30 characters or less",
    ],
    minLength: [
      4,
      "Name is too short. Please, type a name with 4 or more characters",
    ],
  },
  email: {
    type: String,
    required: [true, "Please, type your email"],
    unique: true,
    validate: [validator.default.isEmail, "Incorrect e-mail format"],
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  
});
