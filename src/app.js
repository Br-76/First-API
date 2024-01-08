import express from "express";
import DBconec from "./config/conection.js";
import routes from "./routes/index.js";

const conec = await DBconec();

conec.on("error",(erro) => {
    console.error("Connection error",erro);
});

conec.once("open", () =>{
    console.log("DB connected")
});

const app = express();
routes(app);

export default app;