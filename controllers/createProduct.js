const Product=require('../model/productModel')
const {productValidate} = require("./productValidate");
const createProduct = async (req, res) => {
  try {
    try {
      await productValidate.validateAsync(req.body);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
    const existingProduct = await Product.findOne({name: req.body.name });

    if (existingProduct) {
        return res.status(400).json({ success: false,error: 'Product name must be unique' });
    }
    const product = await Product.create(req.body);

    res.json({success:true,product:product});
  } catch (error) {
    res.status(500).json({success: false, error: "Internal Server Error" });
  }
};
module.exports = createProduct;
