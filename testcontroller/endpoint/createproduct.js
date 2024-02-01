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

    expect(response.status).to.equal(200); 
    expect(response.body).to.have.property("success", true);
    expect(response.body).to.have.property("product");
    expect(response.body.product).to.have.property("name", "TestProduct");

    const createdProduct = await Product.findOne({ name: "TestProduct" });
    expect(createdProduct).to.exist;
    expect(createdProduct.name).to.equal("TestProduct");
  }
module.exports=createproduct