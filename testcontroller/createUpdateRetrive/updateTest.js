const { expect } = require('chai');

const Product = require('../../model/productModel');
const updateTest=async () => {
    await Product.deleteMany()
     const productData = {
       name: 'Test Product',
       description: 'A test product',
       price: 29.99,
       variants: [
         { name: 'Color', sku: 'TEST-RED', additionalCost: 5.00, stockCount: 20 },
       ],
     };
 
     const product = new Product(productData);
     await product.save();
 
     const retrievedProduct = await Product.findById(product._id);
 
     expect(retrievedProduct).to.not.be.null;
     expect(retrievedProduct.name).to.equal(productData.name);
 
   }
module.exports=updateTest