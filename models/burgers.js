module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define(
    "burgers",
    {
      name: 
      {
        type: DataTypes.STRING,
        allowNull: false,
        validate: 
        {
          len: [1]
        }
      },
      devoured: 
      {
        type: DataTypes.BOOLEAN,
        allowNull: false, 
        defaultValue: false
      },
    }
  );
  return Burgers;
};
