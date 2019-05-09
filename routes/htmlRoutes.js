// import our burgers model
var database = require("../models");

// export our route definitions as a function
module.exports = function (app) {

  app.get("/", function(req, res) {

    // use burger.findAll
    database.burgers
      .findAll()
      // if we get to resolve()
      .then(dbBurgerData => {
        res.render("index", 
        {
          burgerData: dbBurgerData
        })
      })
      // if we get to reject()
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });
}