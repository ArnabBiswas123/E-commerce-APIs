const expect = require("chai").expect;

const supertest = require("supertest");
const app=require('../../app')
const request = supertest(app);
const nonExistingProduct=async () => {
    const nonExistingProductId = 123;

    const response = await request
      .get(`/api/v1/products/getproduct/${nonExistingProductId}`) 
      .send();

    expect(response.status).to.equal(500);
    expect(response.body).to.have.property('success', false);
    expect(response.body).to.have.property('error', 'Internal Server Error');
  }
module.exports=nonExistingProduct