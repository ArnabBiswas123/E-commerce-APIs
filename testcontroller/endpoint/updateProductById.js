const expect = require("chai").expect;
const Product = require("../../model/productModel");
const supertest = require("supertest");
const app=require('../../app')
const request = supertest(app);
const updateProductById= async () => {
    // Create a product to be updated
    const originalProduct = new Product({
      name: 'OriginalProduct',
      description: 'OriginalDescription',
      price: 19.99,
    });
    await originalProduct.save();

    const updatedProductData = {
      name: 'UpdatedProduct',
      description: 'UpdatedDescription',
      price: 29.99,
    };

    const response = await request
      .put(`/api/v1/products/updatebyproductid/${originalProduct._id}`) // Use the correct path
      .send(updatedProductData);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('success', true);
    expect(response.body).to.have.property('product');
    expect(response.body.product).to.have.property('name', 'UpdatedProduct');
    expect(response.body.product).to.have.property('description', 'UpdatedDescription');
    // Add more assertions based on your expected response structure
  }
module.exports=updateProductById