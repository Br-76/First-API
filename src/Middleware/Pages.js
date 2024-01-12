import ReqError from "../Erros/ReqError.js";

async function pagec (req,res,next) {
  try {
    let {limt = 5, page = 1, ordnation = "title:1"} = req.query;
        
    let [ord, order] = ordnation.split(":");
        
    limt = parseInt(limt);
    page = parseInt(page);
    order = parseInt(order);
              
    const result = req.result;

    if (limt > 0 && page > 0 ){
      const list = await result.find()
        .sort({[ord]: order})
        .skip((page - 1) * limt)
        .limit(limt)
        .exec();
      res.status(200).json(list);
    } else {
      next(new ReqError );
    }

  }catch (erro){
    next(erro);         
  }
}

export default pagec;