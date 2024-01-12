import NotFound from "../Erros/NotFound.js";
import { autor } from "../models/index.js";

class ATcontroller {

  static async ATlist (req,res,next) {
    try{   
      const ATlist = autor.find({});
      req.result = ATlist;
      next();
    } catch (erro) {
      next(erro);
    }
  }

  static async ATid (req,res,next) {
    try{
      const id = req.params.id;   
      const ATlist = await autor.findById(id);

      if (ATlist !== null){
        res.status(200).json(ATlist);
      } else {
        next(new NotFound("Autor ID not found"));
      }
    } catch (erro) {
      next(erro);
    }
  }
  

  static async attAT (req,res,next) {
    try{
      const id = req.params.id;   
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Autor atualization complete"});
    } catch (erro) {
      next(erro);
    }
  }

  static async ATcreator (req,res,next) {
    try {
      const newAT = await autor.create(req.body);
      res.status(201).json({message: "Autor registered", autor: newAT}); 
    } catch (erro) {
      next(erro);
    }
  }

  static async ATdeleter (req,res,next) {
    try{
      const id = req.params.id;   
      await autor.findByIdAndDelete(id);
      res.status(200).json({message: "Autor removed"});
    } catch (erro) {
      next(erro);
    }
  }
            
}

export default ATcontroller;