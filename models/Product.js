const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create product model
class Product extends Model {}

// create columns
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: Datetypes.INTEGER,
      defaultValue: 10,
      validate:{
        isNumeric: true
      }
    },
    category_id:{
      id: Datatypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product'
  }
);

//export
module.exports = Product;
