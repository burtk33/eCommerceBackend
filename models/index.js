const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category);

Category.hasMany(Product);

Product.belongsToMany(Tag,{
    through:{
      model: ProductTag,
      unique: false
    },
    as: 'tags'
});

Tag.belongsToMany(Product,{
  through:{
    model: ProductTag,
    unique: false
  },
  as: 'products'
});

Tag.hasMany(Product,{
  through:{
    model: ProductTag,
    unique: false
  },
  as: 'products'
});

Product.hasMany(Tag,{
  through:{
    model: ProductTag,
    unique: false
  },
  as: 'tags'
});



module.exports = { Product, Category, ProductTag, Tag };
