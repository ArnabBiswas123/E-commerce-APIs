const Product=require('../model/productModel')
const getallProduct=async(req,res)=>{
    try {
        const products = await Product.find();
        res.json({success:true,products:products});
    } catch (error) {
        res.status(500).json({success:false, error: 'Internal Server Error' });
    }
}
module.exports=getallProduct