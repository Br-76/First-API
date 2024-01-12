import BaseError from "./BaseError.js";

class ReqError extends BaseError {
  constructor(message = "One or more of the provided data is incorrect"){
    super(message,400);
  }
}

export default ReqError;