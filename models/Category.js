const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create category model
class Category extends Model {}

// create columns
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Category'
  }
);

//export
module.exports = Category;
