'use strict'

const Joi = require('joi');

module.exports = {
    payload: Joi.object({
        name: Joi.string(),
        password: Joi.string()
    })
}