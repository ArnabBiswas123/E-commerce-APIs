const Product=require('../model/productModel')
const deleteProduct=async (req, res) => {
        try {
            const productId = req.params.id;
    
            const product = await Product.findByIdAndDelete(productId);
    
            if (!product) {
                return res.status(404).json({success:false, error: 'Product not found' });
            }
    
            res.json({success:true, message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({success:false, error: 'Internal Server Error' });
        }
}
module.exports=deleteProduct;