'use strict';

module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Movie.associate = (models) => {
    // TODO Add associations.
    Movie.belongsTo(models.Person, {  //one to one
      as: 'director',
      foreignKey: {
        fieldName: 'directorPersonId',
        allowNull: false,
      },
    });
    Movie.belongsToMany(models.Person, {
      as: 'actors',
      through: 'Person',
      foreignKey: {
        fieldName: 'actorsId',
        allowNull: false,
      },
      constraints: false
    });
  };

  return Movie;
};
