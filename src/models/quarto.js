'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quarto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Quarto.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'Quarto',
  });
  return Quarto;
};