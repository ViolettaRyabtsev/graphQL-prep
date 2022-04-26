const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (parent, args, { categories }) => {
    const { name } = args.input;
    const newCategory = {
      id: uuid(),
      name,
    };
    categories.push(newCategory);
    return newCategory;
  },

  addProduct: (parent, args, { products }) => {
    const product = {
      id: uuid(),
      name: args.input.name,
      description: args.input.description,
      quantity: args.input.quantity,
      price: args.input.price,
      onSale: args.input.onSale,
      categoryId: args.input.categoryId,
    };

    products.push(product);
    return product;
  },

  deleteCategory: (parent, args, { categories, products }) => {
    //args.id => delete this id
    categories = categories.filter((item) => {
      return item.id !== args.id;
    });

    products = products.map((product) => {
      if (product.categoryId === args.id) {
        return {
          ...product,
          categoryId: null,
        };
      } else {
        return product;
      }
    });
    return true;
  },

  updateCategory: (parent, args, { categories }) => {
    console.log(args.id);
    const index = categories.findIndex((category) => {
      return category.id === args.id;
    });

    categories[index] = { ...categories[index], name: args.input.name };

    console.log(index);

    return categories[index];
  },
};
