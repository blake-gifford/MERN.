const mongoose = require('mongoose');

    const QuoteSchema = new mongoose.Schema({
        quote: {
            type: String,
            required: [true, "You must leave a name."],
            minlength: [2, "Your name must be at least 2 characters long."]
        },
        vote: {
            type: Number
        }
    }, {  timestamps: true  })


    const AuthorSchema = new mongoose.Schema({
        // go buck wild with your schema
        name: {
            type: String,
            required: [true, "You must leave a name."],
            minlength: [2, "Your name must be at least 2 characters long."]
        },
        quotes: [QuoteSchema]
    }, { timestamps: true });

    const Author = mongoose.model("Author", AuthorSchema);

    module.exports = Author;
