'use strict';

module.exports = function (sequelize, DataTypes) {
  const Person = sequelize.define('Person', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    favoriteCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
  );
  return Person;
};
