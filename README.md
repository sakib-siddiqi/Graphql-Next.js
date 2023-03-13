### Graphql with next.js

#### Integrating Graphql & Apollo with next.js

1. Create Next.js App

   ```sh
   npx create-next-app
   ```

   OR

   ```sh
   yarn create next-app
   ```

2. Install packages

   ```sh
   npm i apollo-server-micro micro graphql
   ```

3. `/api/graphql.js`

   ```js
   import { ApolloServer, gql } from "apollo-server-micro";
   import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
   const typeDefs = gql`
     type User {
       id: ID
       name: String
     }

     type Query {
       getUser: User
     }
   `;

   const resolvers = {
     Query: {
       getUser: () => {
         return { id: 1, name: "sakib" };
       },
     },
   };

   const apolloServer = new ApolloServer({
     typeDefs,
     resolvers,
     playground: true,
     plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
   });

   const startServer = apolloServer.start();

   export default async function handler(req, res) {
     await startServer;
     await apolloServer.createHandler({
       path: "/api/graphql",
     })(req, res);
   }

   export const config = {
     api: {
       bodyParser: false,
     },
   };
   ```
4. Start App
    ```sh
    yarn dev
    ```
