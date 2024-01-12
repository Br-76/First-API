import NotFound from "../Erros/NotFound.js";

// eslint-disable-next-line no-unused-vars
function Notfound404 (req,res,next){
  const error404 = new NotFound();
  next(error404);
}

export default Notfound404;