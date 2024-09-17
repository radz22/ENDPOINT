import { Router } from "express";
import {
  CreateBook,
  DeleteById,
  GetAllBook,
  UpdateById,
} from "../controllers/book-controller.js";
const bookRoutes = Router();

bookRoutes.post("/CREATE", CreateBook);
bookRoutes.get("/GET", GetAllBook);
bookRoutes.put("/:id", UpdateById);
bookRoutes.delete("/:id", DeleteById);
export default bookRoutes;
