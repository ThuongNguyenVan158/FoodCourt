import express from "express";
import {
  addAdmiAccount,
  loginAdmin,
  removeAdmin,
  updateAdmin,
  getallEmployeeAsync,
  getDetailsAdmin,
  resetPassword,
} from "../controllers/admin.controller";
import { authenticate } from "../middlewares/Auth/authenticate";
import { authorizeUser } from "../middlewares/Auth/authorize";
import { checkEmailDuplicateAdmin } from "../middlewares/Validation/Email-exist";
const adminRouter = express.Router();
adminRouter.post("/login", loginAdmin);
adminRouter.put(
  "/updateAdmin/:id",
  authenticate,
  authorizeUser(["admin, superAdmin"]),
  updateAdmin
);
adminRouter.put(
  "/updateAdmin/:id",
  authenticate,
  authorizeUser(["admin, superAdmin"]),
  updateAdmin
);
adminRouter.post(
  "/addAdmin",
  authenticate,
  authorizeUser(["admin,superAdmin"]),
  checkEmailDuplicateAdmin,
  addAdmiAccount
);
adminRouter.delete(
  "/deleteAdmin/:id",
  authenticate,
  authorizeUser(["admin,superAdmin"]),
  removeAdmin
);
adminRouter.get("/getAllEmployee", getallEmployeeAsync);
adminRouter.get("/detailAdmin/:id", getDetailsAdmin);
adminRouter.put(
  "/updatePass/:id",
  authenticate,
  authorizeUser(["admin", "superAdmin"]),
  resetPassword
);
export { adminRouter };
