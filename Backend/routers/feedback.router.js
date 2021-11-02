import express from "express";
<<<<<<< HEAD
const feedbackRouter = express.Router();
=======
import {
  addFeedback,
  deleteFeedback,
  getAllFeedback,
} from "../controllers/feedback.controller";
import { authenticate } from "../middlewares/Auth/authenticate";
const feedbackRouter = express.Router();
feedbackRouter.post("/add", authenticate, addFeedback);
feedbackRouter.get("/:food_id", getAllFeedback);
feedbackRouter.delete("/delete/:id", deleteFeedback);
>>>>>>> nhat
export { feedbackRouter };
