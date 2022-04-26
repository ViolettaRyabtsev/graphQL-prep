const { products, categories } = require("../db");
exports.Category = {
  products: (parent, args, { products }) => {
    // args.filter
    //parent.id===productss.item.coteforyId
    let newArr = products.filter((product) => product.categoryId === parent.id);
    let filteredProducts = newArr;
    if (args.filter) {
      if (args.filter.onSale === true) {
        filteredProducts = filteredProducts.filter((item) => {
          return item.onSale;
        });
      }
    }
    return filteredProducts;
  },
};
