import  Express  from "express";
import Bkcontroller from "../controllers/Bkcontrollers.js";
import pagec from "../Middleware/Pages.js";

const routes = Express.Router();

routes.get("/books",Bkcontroller.BKlist,pagec);
routes.get("/books/search", Bkcontroller.BKsearch,pagec);
routes.get("/books/:id",Bkcontroller.BKid);
routes.post("/books",Bkcontroller.BKcreator);
routes.put("/books/:id",Bkcontroller.attBK);
routes.delete("/books/:id",Bkcontroller.BKdeleter);

export default routes;
