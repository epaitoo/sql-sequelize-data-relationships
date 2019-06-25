'use strict';

module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Person.associate = (models) => {
    // TODO Add associations.
    Person.hasMany(models.Movie, { //one to many
      as: 'director', 
      foreignKey: {
        fieldName: 'directorPersonId',
        allowNull: false,
      },
    });
    Person.belongsToMany(models.Movie, {
      as: 'actors',
      through: 'Person',
      foreignKey: {
        fieldName: 'actorsId',
        allowNull: false,
      },
      constraints: false
    });
  };

  return Person;
};
