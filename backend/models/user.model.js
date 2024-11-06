import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { ApiError } from "../utils/ApiError";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    token: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hash(this.password, 10);
    next();
  } else return next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAndSaveToken = async function () {
  try {
    const token = jwt.sign(
      {
        _id: this._id,
        fullName: this.fullName,
        email: this.email,
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: process.env.TOKEN_EXPIRE,
      }
    );
    this.token = token;
    await this.save({ validateBeforeSave: false });
    return token;
  } catch (err) {
    throw new ApiError(400, "Can't create token");
  }
};

export const User = new mongoose.model("User", userSchema);
