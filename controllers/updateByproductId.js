const Product=require('../model/productModel')
const {productValidate} = require("./productValidate");
const updateByproductId=async(req,res)=>{
try {
    try {
        await productValidate.validateAsync(req.body);
      } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, message: error.message });
      }
      const productId = req.params.id;
      const { name } = req.body;

      // Check if the updated product name is already in use by another product
      const existingProductWithSameName = await Product.findOne({ name, _id: { $ne: productId } });

      if (existingProductWithSameName) {
          return res.status(400).json({success:false, error: 'Product name must be unique' });
      }

      const product = await Product.findByIdAndUpdate(productId, { $set: req.body }, { new: true });

      if (!product) {
          return res.status(404).json({sucess:false, error: 'Product not found' });
      }

      res.json({success:true,product:product});
} catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
}
}
module.exports=updateByproductId