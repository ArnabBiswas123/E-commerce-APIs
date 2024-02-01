const expect = require("chai").expect;
const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const Product = require("../model/productModel");
const createproduct = require("../testcontroller/endpoint/createproduct");
const nonUniqueproduct = require("../testcontroller/endpoint/nonUniqueproduct");
const deletedProductById = require("../testcontroller/endpoint/deleteProductById");
const getProductById = require("../testcontroller/endpoint/getProductById");
const nonExistingProduct = require("../testcontroller/endpoint/nonExistingProduct");
const getallproduct = require("../testcontroller/endpoint/getallproduct");
const updateProductById = require("../testcontroller/endpoint/updateProductById");
const updatedVariant = require("../testcontroller/endpoint/updateVariant");
const successfullSearch=require('../testcontroller/endpoint/successfullSearch')
const unsuccessfullSearch=require('../testcontroller/endpoint/unsuccessfullSearch')
// const app = createApp();
const request = supertest(app);

describe("Product Routes Tests", () => {
  before(async () => {
    await mongoose.connect(
      "mongodb+srv://iamarnabbiswas2001:arnab123@cluster0.mjr3rpf.mongodb.net/test-product?retryWrites=true&w=majority",
      {}
    );
  });

  after(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Product.deleteMany();
  });
  it("should create a new product with valid input", createproduct);
  it("should return an error for a non-unique product name", nonUniqueproduct);

  it("should delete a product by ID", deletedProductById);
  it("should get a product by ID", getProductById);

  it(
    "should return an error for a non-existing product ID",
    nonExistingProduct
  );
  it("should get all products", getallproduct);

  it("should update a product by ID", updateProductById);

  it("should update a variant by product and variant ID", updatedVariant);

  it('should return products matching the search term',successfullSearch);

  it('should return a message for no products found', unsuccessfullSearch);
});
