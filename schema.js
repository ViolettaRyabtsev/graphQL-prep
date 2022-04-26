const { gql, ApolloServer } = require("apollo-server-express");

exports.typeDefs = gql`
  type Note {
    name: String
    body: String
  }

  type Review {
    id: ID!
    date: String
    title: String
    comment: String
    rating: Int
    productId: ID!
  }

  type Product {
    id: ID!
    name: String!
    image: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category
    reviews: [Review]
  }

  type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product]
  }

  type Query {
    hello: [Note!]!
    products(filter: ProductsFilterInput): [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: AddCategoryInput): Category
    addProduct(input: AddProductInput): Product
    deleteCategory(id: ID!): Boolean
    updateCategory(id: ID, input: UpdateCategoryInput): Category
  }

  input ProductsFilterInput {
    onSale: Boolean
  }

  input UpdateCategoryInput {
    name: String
  }

  input AddCategoryInput {
    name: String
  }

  input AddProductInput {
    name: String!
    image: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    categoryId: String
  }
`;
