import mongoose from "mongoose";

const birdSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    species: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    audio: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  }
)

const Bird = mongoose.model('bird', birdSchema);

export default Bird;
