module.exports = app => {
    const info = require("../controller/information.controller.js");
  
    // Create a new Customer
    app.post("/info", info.create);
  
    // Retrieve all Customers
    app.get("/info", info.findAll);
  
    // Retrieve a single Customer with Id
    app.get("/info/:hp", info.findOne);
  
    // Update a Customer with Id
    app.put("/info/:id", info.update);
  
    // Delete a Customer with Id
    app.delete("/info/:id", info.delete);
  
  };