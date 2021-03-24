const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the ProductTag model
class ProductTag extends Model {}

// create columns
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key:'id',
        unique: false
      }  
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag',
        key:'id',
        unique: false
      } 
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product_Tag'
  }
);

module.exports = ProductTag;
