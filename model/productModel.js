const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const variantSchema = new mongoose.Schema({
  name: {type:String, required:true },
  sku: {type:String, required:true},
  additionalCost: {type:Number, required:true},
  stockCount: {type:Number, required:true},
});

const productSchema = new Schema({
  name: {type:String, required:true,unique: true },
  description: {type:String, required:true},
  price: {type:Number, required:true},
  variants: [variantSchema],
});
module.exports = mongoose.model("Product", productSchema);
