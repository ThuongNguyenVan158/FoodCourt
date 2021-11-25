import express from "express";
import { ordering, viewOrderByCustomer } from "../controllers/order.controller";
import { authenticate } from "../middlewares/Auth/authenticate";
const orderRouter = express.Router();
orderRouter.post("/order", authenticate, ordering);
orderRouter.get("/list/:id", authenticate, viewOrderByCustomer);
export { orderRouter };
