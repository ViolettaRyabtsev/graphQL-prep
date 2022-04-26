const { products, categories } = require("../db");

exports.Query = {
  hello: () => {
    return [
      { name: "hello", body: "love" },
      { name: "hello", body: "love" },
      { name: "hello", body: "love" },
    ];
  },
  products: (parent, args, { products }) => {
    let filteredProducts = products;
    if (args.filter) {
      if (args.filter.onSale === true) {
        filteredProducts = products.filter((item) => {
          return item.onSale; 
        });
      }
    }
    return filteredProducts;
  },
  product: (parent, args, { products }) => {
    productId = args.id;
    return products.find((item) => item.id === productId);
  },
  categories: (parent, args, context) => categories,
  category: (parent, args, { categories }) => {
    const category = categories.find((item) => item.id === args.id);
    return category;
  },
};
