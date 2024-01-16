import jwt from "jsonwebtoken";
import type { ObjectId } from "mongodb";

const genToken = (id: ObjectId): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, { expiresIn: "30d" })
}

export default genToken
