import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A tune must have a title"],
    minLength: 1,
  },
  artist: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true,
  },
});

const Song = mongoose.model("Song", songSchema);

export default Song;
