const expect = require("chai").expect;
const Product = require("../../model/productModel");
const supertest = require("supertest");
const app=require('../../app')
const request = supertest(app);

const successfullSearch= async () => {
    // Create test products with variants
    const product1 = new Product({
      name: 'Smartphone',
      description: 'A powerful smartphone',
      price: 599.99,
      variants: [
        { name: 'Color', sku: 'SM001-RED', additionalCost: 10, stockCount: 50 },
        { name: 'Storage', sku: 'SM001-128GB', additionalCost: 50, stockCount: 30 },
      ],
    });
    await product1.save();

    const product2 = new Product({
      name: 'Laptop',
      description: 'A high-performance laptop',
      price: 1299.99,
      variants: [
        { name: 'Color', sku: 'LT001-SILVER', additionalCost: 20, stockCount: 40 },
        { name: 'Storage', sku: 'LT001-512GB', additionalCost: 100, stockCount: 20 },
      ],
    });
    await product2.save();

    // Perform a search for products with the term 'Color'
    const response = await request.get('/api/v1/products/search?q=Color');

    // Assertions
    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('success', true);
    expect(response.body).to.have.property('results').that.is.an('array').with.lengthOf(2);

    // Assert product details
    const resultProduct1 = response.body.results[0];
    expect(resultProduct1).to.have.property('name').that.is.a('string').and.equal('Smartphone');
    expect(resultProduct1).to.have.property('description').that.is.a('string').and.equal('A powerful smartphone');
    expect(resultProduct1).to.have.property('price').that.is.a('number').and.equal(599.99);

    // Assert variants details
    expect(resultProduct1).to.have.property('variants').that.is.an('array').with.lengthOf(2);
    const resultVariant1 = resultProduct1.variants[0];
    expect(resultVariant1).to.have.property('name').that.is.a('string').and.equal('Color');
  }

  module.exports=successfullSearch