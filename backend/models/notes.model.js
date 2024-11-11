import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    value: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    completed: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export const Notes = new mongoose.model("Notes", noteSchema);
