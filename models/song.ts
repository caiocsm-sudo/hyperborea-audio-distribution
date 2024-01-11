import mongoose from "mongoose"

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A tune must have a title"],
      minLength: 1,
    },
    artist: {
      type: String,
      required: [true, "A tune must be from an artist"],
    },
    duration: {
      type: String,
      required: [true, "A tune must have a duration"],
    },
    album: {
      type: String,
      default: "Single",
    },
  },
  { collection: "songs" }
)

const Song = mongoose.model("Song", songSchema)

export default Song
