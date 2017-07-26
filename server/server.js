import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { graphqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';

// import Mocks from './data/mocks';
import Schema from './data/schema';
import Resolvers from './data/resolvers';


const GRAPHQL_PORT = 8080;
const graphQLServer = express().use('*', cors());

graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({
  graphiql: true,
  pretty: true,
  schema: makeExecutableSchema({ typeDefs: Schema, resolvers: Resolvers }),
  // mocks: Mocks,
}));

graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
