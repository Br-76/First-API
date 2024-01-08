import Bok from "../models/BKmodels.js";
import { autor } from "../models/ATmodels.js";

class Bkcontroller {
  
 static async BKlist (req,res) {
    try{   
        const bklist = await Bok.find({});
        res.status(200).json(bklist);
    } catch (erro) {
        res.status(500).json({message: `${erro.message} - Requisition Error`})
       };
    };

    static async BKid (req,res) {
        try{
            const id = req.params.id;   
            const bklist = await Bok.findById(id);
            res.status(200).json(bklist);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Book requisition Error`})
           };
        };

        static async attBK (req,res) {
            try{
                const id = req.params.id;   
                await Bok.findByIdAndUpdate(id, req.body);
                res.status(200).json({message: "Book atualization complete"});
            } catch (erro) {
                res.status(500).json({message: `${erro.message} - Book atualization Error`})
              };
            }

    static async BKcreator (req,res) {
        const newbk = req.body;
        try {
            const ATfound = await autor.findById(newbk.Autor);
            const Completebk = { ...newbk, autor: ATfound};
            const Createdbk = await Bok.create(Completebk)
            res.status(201).json({message: "Book created", Book: Createdbk}); 
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Failed to add book`});
        };
    };

    static async BKdeleter (req,res) {
        try{
            const id = req.params.id;   
            await Bok.findByIdAndDelete(id);
            res.status(200).json({message: "Book removed"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Error Trying to remove book`})
          };
        };

        static async BKPBsearch (req,res) {
          const Publisher = req.query.query;
          try {
            const BookPubli = await Bok.find({ Publish: Publisher});
            res.status(200).json(BookPubli);
          } catch (erro) {
            res.status(500).json({message: `${erro.message} - Search error`})
          };
        };


};

export default Bkcontroller;