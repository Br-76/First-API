import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validator: (value) => value.trim() !== "",
  message: ({path}) => `the path ${path} was left blank`
});