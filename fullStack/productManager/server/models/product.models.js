const mongoose = require('mongoose');

// const isString = v => v === ""
// const isWholeNumber = v => v === Math.floor(v)

const ProductSchema = new mongoose.Schema({
    productTitle: {
        type: String,
        maxlength: [255, "The max number of charectors allowed is 255."],
        requires: [true, "You must Put a title."],
        // validate: {
        //     validator: isString,
        //     message: props =>  `This must be less than 255 charectors. You entered ${props.value}.`
        // }
    },
    productPrice: {
        type: Number,
        requires: [true, "You must enter in a price."],
        // validate: {
        //     validator: isWholeNumber,
        //     message: prop => "This must be a number"
        // }
    },
    productDescription: {
        type: String,
        requires: [true, "you must enter something."]
    }
}, {timestamp: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;