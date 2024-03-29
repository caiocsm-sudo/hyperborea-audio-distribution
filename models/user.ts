// import connectDb from "@/utils/db";
import mongoose from "mongoose"
import validator from "validator"

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "You must type a username"],
    },
    email: {
      type: String,
      required: [true, "You must provide an e-mail"],
      unique: [true, "email already registered"],
      validate: validator.isEmail,
    },
    password: {
      type: String,
      required: [true, "You must type a password"],
      select: false,
    },
    downloadsLibrary: {
      type: [mongoose.SchemaTypes.ObjectId],
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "users" },
)

if (mongoose.connection.models["User"]) {
  delete mongoose.connection.models["User"]
}

/*
userSchema.pre("find", function (next: () => void) {
  this.select("-admin")
  next()
})
 * */

const User = mongoose.model("User", userSchema)

export default User
