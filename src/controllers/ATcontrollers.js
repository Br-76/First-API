import { autor } from "../models/ATmodels.js";

class ATcontroller {

    static async ATlist (req,res) {
        try{   
            const ATlist = await autor.find({});
            res.status(200).json(ATlist);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - Requisition Error`})
        };
        };

        static async ATid (req,res) {
            try{
                const id = req.params.id;   
                const ATlist = await autor.findById(id);
                res.status(200).json(ATlist);
            } catch (erro) {
                res.status(500).json({message: `${erro.message} - Autor requisition Error`})
            };
            };

            static async attAT (req,res) {
                try{
                    const id = req.params.id;   
                    await autor.findByIdAndUpdate(id, req.body);
                    res.status(200).json({message: "Autor atualization complete"});
                } catch (erro) {
                    res.status(500).json({message: `${erro.message} - Autor atualization Error`})
                };
                };

                static async ATcreator (req,res) {
                    try {
                        const newAT = await autor.create(req.body);
                        res.status(201).json({message: "Autor registered", autor: newAT}); 
                    } catch (erro) {
                        res.status(500).json({ message: `${erro.message} - Failed to register`});
                    };
                };

                static async ATdeleter (req,res) {
                    try{
                        const id = req.params.id;   
                        await autor.findByIdAndDelete(id);
                        res.status(200).json({message: "Autor removed"});
                    } catch (erro) {
                        res.status(500).json({message: `${erro.message} - Error Trying to remove Autor`})
                    };
                    };
            
};

export default ATcontroller;