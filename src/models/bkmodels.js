import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import {ATschema} from "./ATmodels.js";

const bkschema = new mongoose.Schema({
  id: {type: ObjectId},
  title: {type: String, required: [true, "Book title is required"]},
  Publish: {type: String, required: [true, "Book publisher is required"]},
  Pages: {type: Number,
    validate:  {
      validator: (value) => {return value >= 5 && value <= 6000;
      },
      message: "Number of pages have to be betwen 5 and 6000. Value inserted: {VALUE}"
    }},
  autor: ATschema
},{versionKey: false});

const Bok = mongoose.model("Book",bkschema);

export default Bok;