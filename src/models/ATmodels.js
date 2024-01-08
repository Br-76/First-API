import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const ATschema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    Name: {type: String, required: true},
    age: {type: Number}
},{versionKey: false});

const autor = mongoose.model("Autor", ATschema);

export {autor, ATschema};
