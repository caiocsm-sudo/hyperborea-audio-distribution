import mongoose from "mongoose";

const Song = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A tune must have a title"],
    minLength: 1,
  },
  artist: {
    
  }
});

