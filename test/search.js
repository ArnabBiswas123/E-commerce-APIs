const mongoose = require("mongoose");
const Product = require("../model/productModel");
const searchByName = require("../testcontroller/search/searchByName");
const searchByDescription = require("../testcontroller/search/searchByDescription");
const searchByVarientName = require("../testcontroller/search/searchByVarientName");

describe("Search Tests", () => {
  before(async () => {
    // Connect to the testing database before running the tests
    await mongoose.connect(
      "mongodb+srv://iamarnabbiswas2001:arnab123@cluster0.mjr3rpf.mongodb.net/test-product?retryWrites=true&w=majority",
      {}
    );
  });

  after(async () => {
    // Disconnect from the testing database after running the tests
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    // Clear the Product collection before each test
    await Product.deleteMany();
  });

  it("should search products by name", searchByName);

  it("should search products by description", searchByDescription);

  it("should search products by variant name", searchByVarientName);
});
