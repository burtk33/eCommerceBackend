const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create the Tag model
class Tag extends Model {}

// create columns
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Tag'
  }
);

//export
module.exports = Tag;
