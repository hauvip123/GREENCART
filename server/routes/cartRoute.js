import { updateCart } from "../controllers/cardController.js";
import authUser from "../middlewares/authUser.js";
import express from "express";
const cartRoute = express.Router();
cartRoute.post("/update", authUser, updateCart);
export default cartRoute;
