const { expect } = require('chai');

const Product = require('../../model/productModel');
const createTest=async () => {
    const productData = {
      name: 'Test Product',
      description: 'A test product',
      price: 29.99,
      variants: [
        { name: 'Color', sku: 'TEST-RED', additionalCost: 5.00, stockCount: 20 },
      ],
    };

    const product = new Product(productData);
    const savedProduct = await product.save();

    expect(savedProduct._id).to.not.be.null;
    expect(savedProduct.name).to.equal(productData.name);
  
  }
module.exports=createTest