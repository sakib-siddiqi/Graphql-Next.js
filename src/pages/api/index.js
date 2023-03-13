import { buildSchema, graphql } from "graphql";

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  hello: () => {
    return "Hello world!";
  },
};

// Run the GraphQL query '{ hello }' and print out the response
export default async function (req, res) {
  return res.send(
    graphql({
      schema,
      source: "{ hello }",
      rootValue,
    })
  );
}
