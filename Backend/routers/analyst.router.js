import { getCounTotalbyDay,getCounTotalbyMonth} from "../controllers/analyst.controller";

const analystRoute = require("express").Router();
analystRoute.get("/totalByDate", getCounTotalbyDay);
analystRoute.get("/totalByMonth", getCounTotalbyMonth);
export default analystRoute;
