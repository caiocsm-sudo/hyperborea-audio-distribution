import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "You must type a username"],
  },
  email: {
    type: String,
    required: [true, "You must provide an e-mail"],
  },
  password: {
    type: String,
    required: [true, "You must type a password"],
  },
  downloadsLibrary: {
    type: [mongoose.SchemaTypes.ObjectId],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
