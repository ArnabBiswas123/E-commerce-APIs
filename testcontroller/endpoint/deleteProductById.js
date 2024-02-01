const expect = require("chai").expect;
const Product = require("../../model/productModel");
const supertest = require("supertest");
const app=require('../../app')
const request = supertest(app);
const deletedProductById=async () => {
    // Create a product to be deleted
    const product = new Product({
      name: "ProductToDelete",
      description: "DescriptionToDelete",
      price: 29.99,
    });
    await product.save();

    const response = await request
      .delete(`/api/v1/products/deleteproduct/${product._id}`) // Use the correct path
      .send();

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property("success", true);
    expect(response.body).to.have.property(
      "message",
      "Product deleted successfully"
    );

    // Check if the product is deleted from the test database
    const deletedProduct = await Product.findById(product._id);
    expect(deletedProduct).to.not.exist;
  }
module.exports=deletedProductById