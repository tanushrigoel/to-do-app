import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("err", (err) => {
      console.log("App not able to start ");
      throw err;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${8000}`);
    });
  })
  .catch((err) => {
    console.log(`Mongodb connection failed ${err}`);
  });
