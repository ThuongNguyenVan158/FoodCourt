import express from "express";
import {
  addFood,
<<<<<<< HEAD
=======
  getDetailFood,
>>>>>>> nhat
  getListFoodbyName,
  getListFoodByPriceASC,
  getListFoodByPriceDESC,
  getListFoodByType,
  removeFood,
  updateFood,
  uploadImgFood,
} from "../controllers/food.controller";
import { authenticate } from "../middlewares/Auth/authenticate";
import { authorizeUser } from "../middlewares/Auth/authorize";
import { uploadImage } from "../middlewares/Upload/upload-image";
const foodRouter = express.Router();
foodRouter.post(
  "/addFood",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  addFood
);
<<<<<<< HEAD
=======
foodRouter.get("/detail/:id", getDetailFood);
>>>>>>> nhat
foodRouter.get("/getListFoodbyName", getListFoodbyName);
foodRouter.get("/getListFoodByType", getListFoodByType);
foodRouter.get("/getListFoodByPriceASC", getListFoodByPriceASC);
foodRouter.get("/getListFoodByPriceDESC", getListFoodByPriceDESC);
foodRouter.put(
  "updateFood/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  updateFood
);
foodRouter.post(
  "/uploadImg/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  uploadImage("food-img"),
  uploadImgFood
);
foodRouter.delete(
  "/deleteFood/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  removeFood
);
export { foodRouter };
