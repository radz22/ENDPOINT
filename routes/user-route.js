// a route is a way to define how an application responds to client requests for specific endpoints. Each route can handle HTTP methods like GET, POST, PUT, DELETE

import { Router } from "express";
import {
  POST,
  GET,
  GETID,
  UPDATE,
  DELETE,
} from "../controllers/user-controller.js";
const userRoutes = Router();
userRoutes.post("/", POST); // POST METHOD CREATE USER
userRoutes.get("/", GET); // GET METHOD GET ALL USER OR DATA FROM DB
userRoutes.get("/:id", GETID); // GET BY ID . GET USER BY ID
userRoutes.put("/:id", UPDATE); // PUT METHOD UPDATE YOUR DATA OR EDIT
userRoutes.delete("/:id", DELETE); // DELETE METHOD DELETE USER BY ID

export default userRoutes;
