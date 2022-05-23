'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  product.init({
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    qty: DataTypes.STRING,
    idUser: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};