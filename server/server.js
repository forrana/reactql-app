import express from 'express';
import cors from 'cors';
import { apolloServer } from 'graphql-tools';
import Schema from './data/schema';
import Mocks from './data/mocks';

const GRAPHQL_PORT = 8080;

const graphQLServer = express().use('*', cors());
graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  mocks: Mocks,
}));
graphQLServer.listen(GRAPHQL_PORT, () => console.log(
  `GraphQL Server is now running on http://localhost:${GRAPHQL_PORT}/graphql`
));
