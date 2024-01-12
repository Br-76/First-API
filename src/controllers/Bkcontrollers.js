import {Bok, autor} from "../models/index.js";

class Bkcontroller {
  
  static async BKlist (req,res,next) {
    try{   
      const searchBoK = Bok.find({});
      req.result = searchBoK;
      next(); 
    } catch (erro) {
      next(erro);
    }
  }

  static async BKid (req,res,next) {
    try{
      const id = req.params.id;   
      const bklist = await Bok.findById(id);
      res.status(200).json(bklist);
    } catch (erro) {
      next(erro);
    }
  }

  static async attBK (req,res,next) {
    try{
      const id = req.params.id;   
      await Bok.findByIdAndUpdate(id, req.body);
      res.status(200).json({message: "Book atualization complete"});
    } catch (erro) {
      next(erro);
    }
  }

  static async BKcreator (req,res,next) {
    const newbk = req.body;
    try {
      const ATfound = await autor.findById(newbk.Autor);
      const Completebk = { ...newbk, autor: ATfound};
      const Createdbk = await Bok.create(Completebk);
      res.status(201).json({message: "Book created", Book: Createdbk}); 
    } catch (erro) {
      next(erro);
    }
  }

  static async BKdeleter (req,res,next) {
    try{
      const id = req.params.id;   
      await Bok.findByIdAndDelete(id);
      res.status(200).json({message: "Book removed"});
    } catch (erro) {
      next(erro);
    }
  }

  static async BKsearch (req,res,next) {  
    try {
      const search = await searchb(req.query);
      if(search !== null){
        const BookPubli = Bok
          .find(search)
          .populate("autor");

        req.result = BookPubli;
      } else {
        res.status(200).send([]);
      }

    } catch (erro) {
      next(erro);
    }
  }
}

async function searchb(parames){
  const {Publisher,Title,minpages,maxpages,ATname} = parames;

  let search = {};

  if(Publisher) search.Publish = {$regex: Publisher,$options:"i"};
  if(Title) search.title = {$regex: Title,$options:"i"};

  if(minpages || maxpages) search.Pages = {};

  if(minpages) search.Pages.$gte = minpages;
  if(maxpages) search.Pages.$lte = maxpages;

  if(ATname) search = { ...search,"autor.Name":ATname};

  return search;
}

export default Bkcontroller;