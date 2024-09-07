import express from 'express';

import { graphqlHTTP } from 'express-graphql';
import graphqlSchema from './graphql/graphqlSchema.js';
import graphqlResolver from './graphql/graphqlResolver.js';

const app = express();
app.listen(8080);

// Create and use the GraphQL handler.
// Hỗ trợ truy cập vào UI để thao tác với GraphQL
app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,        // Khai bào đối tượng, tên hàm của GraphQL
  rootValue: graphqlResolver,   // Định nghĩa chức năng của các hàm ở schema
  graphiql: true,               // Cho phép truy cập vào UI
}))
