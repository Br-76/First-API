import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import {ATschema} from "./ATmodels.js";

const bkschema = new mongoose.Schema({
    id: {type: ObjectId},
    title: {type: String, required: true},
    Publish: {type: String, required: true},
    Pages: {type: Number},
    autor: ATschema
},{versionKey: false});

const Bok = mongoose.model("Book",bkschema);

export default Bok;