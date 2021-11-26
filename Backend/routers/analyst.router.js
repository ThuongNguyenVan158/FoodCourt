import { getCounTotalbyDay } from "../controllers/analyst.controller";
const analystRoute = require("express").Router();
analystRoute.get("/totalByDate", getCounTotalbyDay);
export default analystRoute;
