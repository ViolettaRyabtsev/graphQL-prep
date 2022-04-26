const { products, categories } = require("../db");
exports.Product = {
  category: (parent, args, { categories }) => {
    console.log(parent);
    let s = categories.find((item) => {
      console.log(item.id, "item id");
      return item.id === parent.categoryId;
    });
    return s;
  },
  reviews: (parent, args, { reviews }) => {
    console.log(parent, "parent");
    let newArr = reviews.filter((item) => {
      return item.productId === parent.id;
    });
    return newArr;
  },
};
