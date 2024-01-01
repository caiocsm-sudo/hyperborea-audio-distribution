import { Schema } from "mongoose";
import songSchema from "./Song.ts";

const albumSchema = new Schema({
  name: {
    type: String,
    required: [true, "An album must have a name"],
    trim: true,
  },
  artist: {
    type: String,
    required: [true, "An album must be from an artist"],
    trim: true,
  },
  songs: {
    type: songSchema,
    required: [true, "An album must have songs"]
  },
  releaseDate: {
    type: Date,
    default: new Date().getFullYear(),
  },
  label: {
    type: String,
    default: "Hypeborea Audio",
  },
  releaseNumber: {
    type: String,
    default: "HPB001",
  },
});

export default albumSchema;
