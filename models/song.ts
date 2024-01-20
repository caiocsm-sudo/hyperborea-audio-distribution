import { ObjectId } from "mongodb"
import mongoose from "mongoose"
import Album from "./album"

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A tune must have a title"],
      minLength: 1,
    },
    artist: {
      type: mongoose.SchemaTypes.ObjectId,
      required: [true, "A tune must be from an artist"],
    },
    duration: {
      type: String,
      required: [true, "A tune must have a duration"],
    },
    // parent referencing
    album: {
      type: [mongoose.SchemaTypes.ObjectId],
      default: "Single",
      ref: "Album",
    },
  },
  {
    collection: "songs",
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

songSchema.pre("save", async function (next) {
  const albumId = await Album.find()

  next()
})

const Song = mongoose.model("Song", songSchema)

export default Song
