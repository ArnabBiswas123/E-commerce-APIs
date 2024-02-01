const { expect } = require('chai');

const Product = require('../../model/productModel');
const searchByVarientName=async () => {
    await Product.deleteMany();
  
    const testData = [
      {
        name: 'Test Product',
        description: 'A test product',
        price: 29.99,
        variants: [
          { name: 'Color', sku: 'TEST-RED', additionalCost: 5.00, stockCount: 20 },
          { name: 'Size', sku: 'TEST-SM', additionalCost: 2.50, stockCount: 15 },
        ],
      },
    ];
  
    await Product.insertMany(testData);
  
    const searchTerm = 'Color';
    const response = await Product.find({ 'variants.name': { $regex: searchTerm, $options: 'i' } });
  
    expect(response).to.have.lengthOf(1);
    expect(response[0].name).to.equal('Test Product');
  }
  module.exports=searchByVarientName