import express from "express";
import { ordering } from "../controllers/order.controller";
import { authenticate } from "../middlewares/Auth/authenticate";
const orderRouter = express.Router();
orderRouter.post("/order", authenticate, ordering);
export { orderRouter };
