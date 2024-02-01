const expect = require("chai").expect;
const Product = require("../../model/productModel");
const supertest = require("supertest");
const app=require('../../app')
const request = supertest(app);
const updatedVariant=async () => {
    // Create a product with a variant to be updated
    const originalProduct = new Product({
      name: 'Smartphone',
      description: 'A powerful and feature-rich smartphone',
      price: 499.99,
      variants: [
        { name: 'Color', sku: 'SM001-RED', additionalCost: 10, stockCount: 50 },
        { name: 'RAM', sku: 'SM001-8GB', additionalCost: 30, stockCount: 40 },
      ],
    });
    await originalProduct.save();

    const updatedVariantData = {
      name: 'Updated Variant Name',
      sku: 'UPDATED-SKU',
      additionalCost: 15,
      stockCount: 25,
    };

    const response = await request
      .put(`/api/v1/products/${originalProduct._id}/variants/${originalProduct.variants[0]._id}`)
      .send(updatedVariantData);

    expect(response.status).to.equal(200);
    expect(response.body).to.have.property('success', true);
    expect(response.body).to.have.property('product');
    const updatedProduct = response.body.product;

    // Assert the product details
    expect(updatedProduct).to.have.property('name').that.is.a('string').and.equal('Smartphone');
    expect(updatedProduct).to.have.property('description').that.is.a('string').and.equal('A powerful and feature-rich smartphone');
    expect(updatedProduct).to.have.property('price').that.is.a('number').and.equal(499.99);

    // Assert the variants array
    expect(updatedProduct).to.have.property('variants').that.is.an('array').and.have.lengthOf(2);

    // Assert the details of the updated variant
    const updatedVariant = updatedProduct.variants.find((variant) => variant.name === 'Updated Variant Name');
    expect(updatedVariant).to.have.property('_id').that.is.a('string');
    expect(updatedVariant).to.have.property('name').that.is.a('string').and.equal('Updated Variant Name');
    expect(updatedVariant).to.have.property('sku').that.is.a('string').and.equal('UPDATED-SKU');
    expect(updatedVariant).to.have.property('additionalCost').that.is.a('number').and.equal(15);
    expect(updatedVariant).to.have.property('stockCount').that.is.a('number').and.equal(25);

    // Assert the details of the other variant
    const otherVariant = updatedProduct.variants.find((variant) => variant.name === 'RAM');
    expect(otherVariant).to.have.property('_id').that.is.a('string');
    expect(otherVariant).to.have.property('name').that.is.a('string').and.equal('RAM');
    expect(otherVariant).to.have.property('sku').that.is.a('string').and.equal('SM001-8GB');
    expect(otherVariant).to.have.property('additionalCost').that.is.a('number').and.equal(30);
    expect(otherVariant).to.have.property('stockCount').that.is.a('number').and.equal(40);

    // Add more assertions based on your specific response structure
  }
module.exports=updatedVariant;