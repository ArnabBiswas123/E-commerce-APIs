const { expect } = require('chai');

const Product = require('../../model/productModel');

const retriveTest=async () => {
    await Product.deleteMany();

    
    const testData = [
        { name: 'Product 1', description: 'Description 1', price: 19.99 },
        { name: 'Product 2', description: 'Description 2', price: 24.99 },
    ];

    // Insert the test data into the database
    await Product.insertMany(testData);

    // Retrieve all products from the database
    const allProducts = await Product.find();

    // Verify that the number of retrieved products matches the number of inserted products
    expect(allProducts).to.have.lengthOf(testData.length);

    // Additional expectations based on your model structure
    for (let i = 0; i < testData.length; i++) {
        expect(allProducts[i].name).to.equal(testData[i].name);
 
    }
  }
  module.exports=retriveTest