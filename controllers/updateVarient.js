const { variantValidate } = require('./productValidate'); 
const Product=require('../model/productModel')
const updateVarient=async(req,res)=>{
    try {
        try {
            await variantValidate.validateAsync(req.body);
          } catch (error) {
            console.log(error);
            return res.status(400).json({ success: false, message: error.message });
          }

        const { productId, variantId } = req.params;

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({success:false, error: 'Product not found' });
        }

        const variantIndex = product.variants.findIndex((variant) => variant.id === variantId);

        if (variantIndex === -1) {
            return res.status(404).json({success:false, error: 'Variant not found' });
        }

        product.variants[variantIndex] = req.body;

        await product.save();

        res.json({success:true,product:product});
    } catch (error) {
        res.status(500).json({ success:false,error: 'Internal Server Error' });
    }
}
module.exports=updateVarient