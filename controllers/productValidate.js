const Joi = require('joi');

const variantValidate= Joi.object({
    name: Joi.string().required(),
    sku: Joi.string().required(),
    additionalCost: Joi.number().required(),
    stockCount: Joi.number().required(),
});

const productValidate = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    variants: Joi.array().items(variantValidate),
});
module.exports={variantValidate,productValidate};