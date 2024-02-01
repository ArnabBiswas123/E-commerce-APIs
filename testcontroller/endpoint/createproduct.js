const expect = require("chai").expect;
const Product = require("../../model/productModel");
const supertest = require("supertest");
const app=require('../../app')
const request = supertest(app);

const createproduct=async () => {
    const response = await request.post("/api/v1/products/createproduct").send({
      name: "TestProduct",
      description: "TestDescription",
      price: 19.99,
    });

    expect(response.status).to.equal(200); // Change to 200 if your success response is without a 201 status
    expect(response.body).to.have.property("success", true);
    expect(response.body).to.have.property("product");
    expect(response.body.product).to.have.property("name", "TestProduct");
    // Add more assertions based on your expected response structure

    // Check if the product is stored in the test database
    const createdProduct = await Product.findOne({ name: "TestProduct" });
    expect(createdProduct).to.exist;
    expect(createdProduct.name).to.equal("TestProduct");
  }
module.exports=createproduct