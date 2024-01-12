import Express  from "express";
import ATcontroller from "../controllers/ATcontrollers.js";
import pagec from "../Middleware/Pages.js";

const ATroutes = Express.Router();

ATroutes.get("/autors",ATcontroller.ATlist,pagec);
ATroutes.get("/autors/:id",ATcontroller.ATid);
ATroutes.post("/autors",ATcontroller.ATcreator);
ATroutes.put("/autors/:id",ATcontroller.attAT);
ATroutes.delete("/autors/:id",ATcontroller.ATdeleter);

export default ATroutes;