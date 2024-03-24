const Joi = require('joi')
module.exports = {
    payload: Joi.object({
        title: Joi.string().min(3).max(25).required().example("Capitals of the world"),
        text: Joi.string().min(5).max(777).example("London is the capital of Great Britain."),
        author: Joi.string().min(2).max(50).default('Anonymous').example("Ibodulloeva Dilnoza"),
        date: Joi.date().example("20.05.2008")
    })
}