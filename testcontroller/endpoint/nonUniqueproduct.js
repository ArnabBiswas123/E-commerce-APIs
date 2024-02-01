const expect = require("chai").expect;
const Product = require("../../model/productModel");
const supertest = require("supertest");
const app=require('../../app')
const request = supertest(app);
const nonUniqueproduct=async () => {
    // Create a product with the same name as the one we want to create
    await Product.create({
      name: "ExistingProduct",
      description: "ExistingDescription",
      price: 29.99,
    });

    const response = await request.post("/api/v1/products/createproduct").send({
      name: "ExistingProduct",
      description: "TestDescription",
      price: 19.99,
    });

    expect(response.status).to.equal(400);
    expect(response.body).to.have.property("success", false);
    expect(response.body).to.have.property(
      "error",
      "Product name must be unique"
    );
  }
  module.exports=nonUniqueproduct