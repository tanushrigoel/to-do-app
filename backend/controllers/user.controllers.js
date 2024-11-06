import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;
  if ([fullName, email, password].some((val) => val.trim() === "")) {
    throw new ApiError(400, "All fields are required"); // need to rerender the page
  }
  const existedUser = await User.findOne({
    email,
  });
  if (existedUser) {
    throw new ApiError(400, "User with same email already exists"); // render the page
  }

  const user = await User.create({
    fullName,
    email,
    password,
  });

  const check = await User.findById(user._id).select("-password");

  if (!check) {
    throw new ApiError(400, "Can't create the user"); // page render
  }

  return res
    .status(200)
    .json(new ApiResponse(200, check, "User created successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if ([email, password].some((val) => val.trim() === "")) {
    throw new ApiError("Both email and password are required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "User does not exist");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const token = await user.generateAndSaveToken();

  const loggedInUser = await User.findById(user._id).select("-password -token");

  const options = {
    secure: true,
    httpOnly: true,
  };

  return res
    .status(200)
    .json(new ApiResponse(200, "User logged in successfully"))
    .cookie("token", token);
});

export { registerUser, loginUser };
