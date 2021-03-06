import express from "express";
import {
  addCate,
  getallCategoryAsync,
  updateCate,
  removeCate,
  getDetailCate,
} from "../controllers/category.controller";
import { authenticate } from "../middlewares/Auth/authenticate";
import { authorizeUser } from "../middlewares/Auth/authorize";
const categoryRouter = express.Router();
categoryRouter.post(
  "/addCategory",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  addCate
);

categoryRouter.get("/getListCategory", getallCategoryAsync);
categoryRouter.put(
  "/updateCategory/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  updateCate
);
// categoryRouter.post(
//   "/uploadImg/:id",
//   authenticate,
//   authorizeUser(["admin", "superAdmin"]),
//   uploadImage("food-img"),
//   uploadImgFood
// );
categoryRouter.delete(
  "/deleteCategory/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  removeCate
);
categoryRouter.get("/detail/:id", getDetailCate);
export { categoryRouter };
