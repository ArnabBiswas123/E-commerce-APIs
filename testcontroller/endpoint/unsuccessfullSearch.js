const expect = require("chai").expect;
const supertest = require("supertest");
const app=require('../../app')
const request = supertest(app);

const unsuccessfullSearch=async () => {
    // Perform a search for products with the term 'Nonexistent'
    const response = await request.get('/api/v1/products/search?q=Nonexistent');

    // Assertions
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('success', false);
    expect(response.body).to.have.property('message', 'No products found for the given search term');
  }
module.exports=unsuccessfullSearch