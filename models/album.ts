import mongoose from "mongoose";

const Album = new mongoose.Schema({
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
  genre: {
    type: String,
    required: [true, "An album must have a genre"],
    trim: true,
  },
  year: {

  },
  trackList: {
    type: [String],
    required: [true, "An album must have a track list"],
    min: 2
  }
});

export default Album;

