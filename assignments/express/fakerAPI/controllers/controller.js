const faker = require('faker');

class User {
    constructor() {
        this.name = faker.name.firstName();
    }
}
class Company {
    constructor() {
        this.company = faker.company.name();
    }
}

module.exports = {
    //create
    createName: (req, res) => {
        res.json({ message: 'you created a name', createdName: req.body})
    }
    createCompany: (req, res) => {
        res.json({ message: 'you created a company', createdCompany: req.body})
    }
    //read
    getName: (req, res) => {
        res.json({name: faker.name.firstName})
        //if you want to use a variable in your url EX below
        // res.json({ message: ' just the on edata for: ${req.params.someParameter}})
    }
    getCompany: (req, res) => {
        res.json({company: faker.company.name})
    }
    //update
    updateName: (req, res) => {
        res.json({ message: 'just the name update.'})
    }
    updateCompany: (req, res) => {
        res.json({ message: 'just the name update.'})
    }
    //delete
}

