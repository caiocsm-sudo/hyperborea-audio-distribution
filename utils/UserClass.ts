import bcrypt from "bcrypt"
import User from "@/models/user"
import connectDb from "./db"

(async () => {
  await connectDb();
  console.log("connected");

})()

interface UserProtocol {
  name: string
  email: string
  password: string
  downloadsLibrary: string[]
}

export class EncryptPassword {
  password: string
  hashedPassword: string
  constructor(password: string) {
    this.password = password
    this.hashedPassword = ""
  }

  static async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    console.log(hashedPassword)

    return hashedPassword
  }

  static async comparePasswords() {
    console.log("comparing...")
  }
}

class UserAuth implements UserProtocol {
  name: string
  email: string
  password: string
  downloadsLibrary: string[]
  constructor(name: string, email: string, password: string) {
    this.name = name
    this.email = email
    this.password = password
    this.downloadsLibrary = []
  }

  async login() {
    const dbUser = await User.find({ email: this.email })
    if (!dbUser) throw new Error("email not found")

    console.log(dbUser);
  }

  async register() {
    const hashedPassword = await EncryptPassword.hashPassword(this.password)

    console.log(hashedPassword)

    this.password = hashedPassword

    const endUser = await User.create({
      username: this.name,
      email: this.email,
      password: this.password,
    })

    return endUser
  }
}

export default UserAuth
