import ReqError from "./ReqError.js";

class ValidError extends ReqError {
  constructor(erro){
    const Errormessage = Object.values(erro.errors)
      .map(erro => erro.message)
      .join(" | ");

    super(`The folloing erros have being found: ${Errormessage}`);
  } 
}

export default ValidError;