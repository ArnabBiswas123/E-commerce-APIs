const Product=require('../model/productModel')
const searchProduct=async(req,res)=>{
    try {
        const searchTerm = req.query.q.toLowerCase();

        const results = await Product.find({
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { description: { $regex: searchTerm, $options: 'i' } },
                { 'variants.name': { $regex: searchTerm, $options: 'i' } },
            ],
        });
        
        if (results.length === 0) {
            return res.json({ success:false,message: 'No products found for the given search term' });
        }
        
        res.json({success:true,results:results});
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports=searchProduct;