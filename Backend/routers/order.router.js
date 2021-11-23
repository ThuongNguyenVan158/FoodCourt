import express from 'express';
import { ordering } from '../controllers/order.controller';
const orderRouter = express.Router();
orderRouter.post('/order', ordering);
export { orderRouter };
