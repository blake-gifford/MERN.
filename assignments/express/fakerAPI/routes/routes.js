const { getName, getCompany, updateName, updateCompany, createName, createCompany } = require('../controllers/controller');

module.exports = app => {
    //create
    // app.post('/api/createname',createName);
    // app.post('/api/createcompany', createCompany);
    //read
    app.get('/api/getname', getName);
    //example for if you want to use a variable in the url... also an example in controller.js file
    //EX: app.get('/api/getdata/:someParameter', callbackfunction from controller)
    app.get('/api/getcompanyname', getCompany);
    app.get('/api/getboth', getName, getCompany);
    //update

    //delete
}

