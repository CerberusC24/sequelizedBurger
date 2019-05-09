// import our burgers model
const database = require("../models");

module.exports = function (app) {

  // GET all burgers
  app.get("/api/burgers", function(req, res) {
    database.burgers.findAll({})
      .then(dbBurgerData => res.json(dbBurgerData))
      console.log(dbBurgerData)
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // create/POST a new burger
  app.post("/api/burgers", function(req, res) {
    // pass req.body into create method 
    // req.body => {name: "burgerty burger"}
    database.burgers.create(req.body)
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });


  // get a burger by its id
  app.get("/api/burgers/:id", function(req, res) {
    database.burgers.findAll(
      {
        where: 
        {
          id: req.params.id
        }
      })
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // PUT/update a burger's devoured to true/false by id
  app.put("/api/burgers/:id", function(req, res) {
    // req.body => {devoured: true} || {devoured : false}
    database.burgers.update(
      req.body, 
      {
        where: 
        {
          id: req.params.id
        }
      })
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // DELETE a burger by its id
  app.delete("/api/burgers/:id", function(req, res) {
    database.burgers.destroy(
      {
      where:
        {
          id: req.params.id
        }
      })
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}
