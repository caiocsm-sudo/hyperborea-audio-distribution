import mongoose from "mongoose"

const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "An album must have a title"],
      trim: true,
    },
    artist: {
      type: String,
      required: [true, "An album must be from an artist"],
      trim: true,
    },
    coverImage: {
      type: String,
      required: [true, "An album must have an cover image"],
    },
    genre: {
      type: String,
      required: [true, "An album must have a genre"],
      trim: true,
    },
    releaseYear: {
      type: Number,
      default: new Date().getFullYear(),
      immutable: true,
    },
    trackList: {
      // maybe later change to [String] instead of ObjectId;
      type: [mongoose.SchemaTypes.ObjectId],
      min: 2,
    },
  },
  { collection: "albums" }
)

const Album = mongoose.model("Album", albumSchema)

export default Album
