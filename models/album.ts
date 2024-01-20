import mongoose from "mongoose"
import Song from "./song"

const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "An album must have a title"],
      trim: true,
    },
    artist: {
      type: mongoose.SchemaTypes.ObjectId,
      required: [true, "An album must be from an artist"],
      trim: true,
      ref: "Artist",
    },
    coverImage: {
      type: String,
      required: [true, "An album must have an cover image"],
    },
    genre: {
      type: [String],
      required: [true, "An album must have at least one genre"],
      trim: true,
      minLength: 1,
    },
    releaseYear: {
      type: Number,
      default: new Date().getFullYear(),
      immutable: true,
    },
    trackList: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "Song",
      minLength: 1,
    },
  },
  {
    collection: "albums",
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

albumSchema.pre("save", async function (next: any) {
  next()
})

const Album = mongoose.model("Album", albumSchema)

export default Album
