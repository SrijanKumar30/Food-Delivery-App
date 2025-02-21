import express from "express"
import authMiddleware from "../middlewares/auth.js"

import {placeOrder} from "../controllers/orderController.js"
import { verifyOrder } from "../controllers/orderController.js";
import { userOrders } from "../controllers/orderController.js";
import { listOrders } from "../controllers/orderController.js";
import { updateStatus } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);
orderRouter.post("/verify",verifyOrder)
orderRouter.post("/userorders",authMiddleware,userOrders)
orderRouter.get('/list',listOrders)
orderRouter.post("/status",updateStatus)

export default orderRouter;