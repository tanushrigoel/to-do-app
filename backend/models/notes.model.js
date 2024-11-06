import mongoose, {Schema} from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    creationDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
export const Notes = new mongoose.model("Notes", noteSchema)
