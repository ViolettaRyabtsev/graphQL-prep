const express = require("express");
const { typeDefs } = require("./schema");
const { gql, ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { products, categories, reviews } = require("./db");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const { Mutation } = require("./resolvers/Mutation");

const PORT = 3080;


async function CreateServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query,
      Mutation,
      Category,
      Product,
    },
    context: {
      products,
      categories,
      reviews,
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground({ app })],
  });


  await server.start();

  server.applyMiddleware({ app }); 

  app.get("/graphql", (req, res) => {
    res.send("hello world"); 
  });

  app.listen(PORT, () => {
    console.log(`port listen on http://localhost:${PORT}/graphql`);
  });
}

CreateServer();
