const expect = require("chai").expect;
const Product = require("../../model/productModel");
const supertest = require("supertest");
const app=require('../../app')
const request = supertest(app);
const getallproduct= async () => {
    // Create some test products
    const testData = [
      { name: 'Product1', description: 'Description1', price: 19.99 },
      { name: 'Product2', description: 'Description2', price: 24.99 },
    ];
    await Product.insertMany(testData);

    const response = await request
      .get('/api/v1/products/getallproduct') // Use the correct path
      .send();

    expect(response.body).to.have.property('success', true);
    expect(response.body).to.have.property('products');
    expect(response.body.products).to.have.lengthOf(testData.length);

    // Add more assertions based on your expected response structure
  }
  module.exports=getallproduct