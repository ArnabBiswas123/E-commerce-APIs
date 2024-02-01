const mongoose = require("mongoose");

const createTest = require("../testcontroller/createUpdateRetrive/createTest");
const updateTest = require("../testcontroller/createUpdateRetrive/updateTest");
const retriveTest = require("../testcontroller/createUpdateRetrive/retriveTest");

describe("Product Model Tests", () => {
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

  it("should create and save a product", createTest);

  it("should retrieve a product by ID", updateTest);

  it("should retrieve all products", retriveTest);
});
