# newsoftProject

## List Of Software

This program is built with Node.js, Postman and MySQL

## Requirements

VsCode, Wampserver64 "phpmyadmin"
Make sure port 3001, 3000 is not uses

## Storage
30 mb

## Instruction "Database"
1. Make sure you have download the file/clone.
2. Open up Wampserver and launch phpmyadmin.
3. Create a database call "newsoft".
4. Under the menu bar click on import and click on browser.
5. Open up newsoft folder,select newsoft.sql.
6. Scroll down and click on "Go"


## Instruction "node"
1. Open up Vscode
2. On the top left corner select File > Open folder
3. Select newsoftProject-main folder
4. On the top menu bar select view > terminal
5. Terminal insert npm start "to start". 

## How to use the code
1. Open up Postman
2. enter "http://localhost:3001/info" and select get to get all information in the database
## Below are the list of command you can use to replace info and the request function.
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
  


Enjoy Coding 
