import bcrypt from "bcrypt"

export class EncryptPassword {
  static async hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password, salt)

    console.log(hashedPassword)

    return hashedPassword
  }

  static async comparePasswords(passwdClient: string, passwdServer: string) {
    const isPasswordCorrect = await bcrypt.compare(passwdClient, passwdServer)

    console.log(isPasswordCorrect);

    return isPasswordCorrect;
  }
}

