const Information = require("../models/information.model.js");
var bcrypt = require("bcrypt");
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Customer
    const info = new Information({
      id: req.body.id,
      email: req.body.email,
      hp: req.body.hp,
      name: req.body.name,
      password: bcrypt.hashSync(req.body.password, 5),
      gender: req.body.gender,
  
     
     
    });
  
    // Save Customer in the database
    Information.create(info, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Info."
        });
      else res.send(data);
    });
  };

  exports.findAll = (req, res) => {
    Information.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Info."
        });
      else res.send(data);
    });
  };

  exports.findOne = (req, res) => {
    Information.findByHp(req.params.hp, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Info with id ${req.params.hp}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Info with id " + req.params.hp
          });
        }
      } else res.send(data);
    });
  };

  exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Information.updateById(
      req.params.id,
      new Information(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Info with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Info with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };
  
  exports.delete = (req, res) => {
    Information.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Info with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Info with id " + req.params.id
        });
      }
    } else res.send({ message: `Info was deleted successfully!` });
  });
};