const Product=require('../model/productModel')

const getProduct=async(req,res)=>{
    try {
        const productId = req.params.id;
        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({success:false, error: 'Product not found' });
        }

        res.json({success:true, product});
    } catch (error) {
        // console.log(error)
        res.status(500).json({success:false, error: 'Internal Server Error' });
    }
}
module.exports=getProduct