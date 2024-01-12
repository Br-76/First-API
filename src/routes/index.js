import Express  from "express";
import Booksrt from  "./BKroutes.js";
import Autorsrt from "./ATroutes.js";

const routes = (app) => {

  app.route("/").get((req,res) => res.status(200).send("Blank Page"));

  app.use(Express.json(), Booksrt, Autorsrt);
};

export default routes;