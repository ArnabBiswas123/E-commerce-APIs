const expect = require("chai").expect;
const Product = require("../../model/productModel");
const supertest = require("supertest");
const app=require('../../app')
const request = supertest(app);
const getProductById=async () => {
    // Create a product to be retrieved
    const product = new Product({
      name: 'ProductToGet',
      description: 'DescriptionToGet',
      price: 29.99,
    });
    await product.save();

    const response = await request
      .get(`/api/v1/products/getproduct/${product._id}`) 
      .send();

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('success', true);
    expect(response.body).to.have.property('product');
    expect(response.body.product).to.have.property('name', 'ProductToGet');

  }
module.exports=getProductById