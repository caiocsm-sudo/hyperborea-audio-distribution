import mongoose from "mongoose";

class HDB {
  private mongoURI: string = process.env.MONOGO_URI as string
  static instance: HDB
  constructor() {}

  static getInstance() {
    if (!HDB.instance) {
      HDB.instance = new HDB()
    }

    return HDB.instance
  }

  public async connect() {
    try {
      await mongoose.connect(this.mongoURI)
      console.log("Connected to the database")
    } catch (e) {
      throw new Error(`Something went wrong: ${e}`)
    }
  }
}

const hdb = HDB.getInstance()
