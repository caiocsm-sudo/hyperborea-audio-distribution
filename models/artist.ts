import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "An artist must have a name"],
    trim: true,
    minLength: 2,
    maxLength: 40
  },
  bio: {
    type: String,
    default: "This artist has no bio yet.",
    minLength: 10,
    maxLength: 150
  },
  links: {
    type: [String]
  },
  releases: {
    type: [String],
  },
});

const Artist = mongoose.model("Artist", artistSchema);

export default Artist;
