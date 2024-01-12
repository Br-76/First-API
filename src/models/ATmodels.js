import mongoose from "mongoose";

const ATschema = new mongoose.Schema({
  id: {type: mongoose.Schema.Types.ObjectId},
  Name: {type: String, required: [true, "Autor name is required"]},
  age: {type: Number},
  nation: {type: String}
},{versionKey: false});

const autor = mongoose.model("Autor", ATschema);

export {autor, ATschema};
