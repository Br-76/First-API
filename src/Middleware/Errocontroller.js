import mongoose from "mongoose";
import BaseError from "../Erros/BaseError.js";
import ReqError from "../Erros/ReqError.js";
import ValidError from "../Erros/ValidError.js";


// eslint-disable-next-line no-unused-vars
function  erromanipuler (erro, req, res, next) {
  console.log(erro);
  if (erro instanceof mongoose.Error.CastError) {
    new ReqError().SendRes(res);     
  } else if (erro instanceof mongoose.Error.ValidationError){
    new ValidError(erro).SendRes(res);
  } else if(erro instanceof BaseError){
    erro.SendRes(res);
  }else {
    new BaseError().SendRes(res);
  }
}

export default erromanipuler;