const { expect } = require('chai');

const Product = require('../../model/productModel');
const searchByName=async () => {
    await Product.deleteMany();
  
    const testData = [
      { name: 'Product 1', description: 'Description 1', price: 19.99 },
      { name: 'Product 2', description: 'Description 2', price: 24.99 },
      { name: 'Test Product', description: 'A test product', price: 29.99 },
    ];
  
    await Product.insertMany(testData);
  
    const searchTerm = 'Test';
    const response = await Product.find({ name: { $regex: searchTerm, $options: 'i' } });
  
    expect(response).to.have.lengthOf(1);
    expect(response[0].name).to.equal('Test Product');
  }

  module.exports=searchByName;