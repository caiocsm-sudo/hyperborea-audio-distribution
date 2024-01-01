import { Schema } from "mongoose";

const songSchema = new Schema({
  title: {
    type: String,
    required: [true, "A song must have a title"],
    trim: true,
  },
  artist: {
    type: String,
    required: [true, "A song must be from an artist"],
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, "A song must have a duration"],
  },
  single: {
    type: Boolean,
    default: false
  },
  genre: {
    type: [String],
    default: "Electronic"
  },
  defefef: {
    type: String
  }
});

export default songSchema;
