import express from "express";
import DBconec from "./config/conection.js";
import routes from "./routes/index.js";
import erromanipuler from "./Middleware/Errocontroller.js";
import Notfound404 from "./Middleware/Notfoundcontroller.js";

const conec = await DBconec();

conec.on("error",(erro) => {
  console.error("Connection error",erro);
});

conec.once("open", () =>{
  console.log("DB connected");
});

const app = express();
routes(app);
app.use(Notfound404);

app.use(erromanipuler);

export default app;