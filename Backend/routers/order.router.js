import express from "express";
import {
  ordering,
  viewOrderByCustomer,
  viewListOrder,
  viewListOrderToday,
  viewListOrderByDate,
  viewListOrderByMonth,
  viewListOrderByYear,
} from "../controllers/order.controller";
import { authenticate } from "../middlewares/Auth/authenticate";
const orderRouter = express.Router();
orderRouter.post("/order", authenticate, ordering);
orderRouter.get("/list/:id", authenticate, viewOrderByCustomer);
orderRouter.get(
  "/listallorder",
  authenticate,
  viewListOrder
);
orderRouter.get(
  "/listallordertoday",
  authenticate,
  viewListOrderToday
);
orderRouter.get(
  "/listallorderbydate/:id",
  authenticate,
  viewListOrderByDate
);
orderRouter.get(
  "/listallorderbymonth",
  authenticate,
  viewListOrderByMonth
);
export { orderRouter };
