// App deps
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import CreateForm from '../createForm/createForm';


// Apollo client deps
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import {
  graphql,
  ApolloProvider
} from 'react-apollo';
import gql from 'graphql-tag';

// Apollo mock server
import {
  makeExecutableSchema,
  addMockFunctionsToSchema
} from 'graphql-tools';
// import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
 import { typeDefs } from './schema';

const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });

// const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });
const networkInterface = createNetworkInterface({
  uri: 'http://localhost:8080/graphql',
});

const client = new ApolloClient({
    networkInterface: networkInterface,
});

// const channelsListQuery = gql`
//    query ChannelsListQuery {
//      channels {
//        id
//        name
//      }
//    }
//  `;
//
//  const ChannelsList = ({ data: {loading, error, channels }}) => {
//     if (loading) {
//       return <p>Loading ...</p>;
//     }
//     if (error) {
//       return <p>{error.message}</p>;
//     }
//     return <ul>
//       { channels.map( ch => <li key={ch.id}>{ch.name}</li> ) }
//     </ul>;
//   };
//
// const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);


class App extends Component {
   render() {
     return (
       <ApolloProvider client={client}>
         <div className="App">
           <div className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <h2>Welcome to Apollo from docker-compose !!!sdf!!!</h2>
           </div>
           <div className="App-body">
             <CreateForm/>
           </div>
         {/*  <ChannelsListWithData /> */}
         </div>
       </ApolloProvider>
     );
   }
 }

export default App;
