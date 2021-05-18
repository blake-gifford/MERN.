const mongoose = require('mongoose');

const isString = v => v === ""
const isWholeNumber = v => v === Math.floor(v)

const ProductSchema = new mongoose.Schema({
    productTitle: {
        type: [String, "You have Failed me by not putting in the correct data type."],
        minlength: [255, "The max number of charectors allowed is 255."],
        requires: [true, "You must Put a title."],
        validate: {
            validator: isString,
            message: props =>  `This must be less than 255 charectors. You entered ${props.value}.`
        }
    },
    productPrice: {
        type: [Number, "You must enter a number."],
        requires: [true, "You must enter in a price."],
        validate: {
            validator: isWholeNumber,
            message: prop => "This must be a number"
        }
    },
    productDescription: {
        type: [String, "You must enter a description."],
        requires: [true, "you must enter something."]
    }
}, {timestamp: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;