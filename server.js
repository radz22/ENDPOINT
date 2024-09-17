import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./routes/user-route.js";
import bookRoutes from "./routes/book-route.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/userRoutes", userRoutes);
app.use("/bookRoutes", bookRoutes);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to database");
    app.listen(process.env.PORT, () => {
      console.log(`running port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
