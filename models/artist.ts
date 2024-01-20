import mongoose from "mongoose"
import Album from "./album"

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "An artist must have a name"],
      trim: true,
      minLength: 2,
      maxLength: 40,
    },
    artistImage: {
      type: [String],
    },
    bio: {
      type: String,
      default: "This artist has no bio yet.",
      minLength: 10,
      maxLength: 150,
    },
    links: {
      type: [String],
    },
    releases: {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "Album",
    },
  },
  {
    collection: "artists",
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

const Artist = mongoose.model("Artist", artistSchema)

export default Artist
