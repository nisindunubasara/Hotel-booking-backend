import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
   name: {type: String, required: true},
   city: {type: String, required: true},
   address: {type: String, required: true},
   contact: {type: String, required: true},
   owner: {type: String, required: true, ref: "User"},
   }, {timestamps: true});

const Test = mongoose.model("Test", testSchema);

export default Test;