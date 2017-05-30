const typeDefinitions = `
type Channel {
  id: ID!
  name: String
}
type Query {
  channels: [Channel]
}

schema {
  query: Query
}
`;

export default [typeDefinitions];
