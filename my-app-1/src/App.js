import React from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag'
import {ApolloProvider, ApolloConsumer} from 'react-apollo'


const client = new ApolloClient({
  uri: "http://localhost:4000/"
})

const bookQuery = (client) => {
  client
  .query({
    query: gql `
    {
      books {
        title
        author
      }
    }
    `
  }).then(result => console.log(result.data))
  .catch(e => console.error(e))
}



function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">Hello World</div>
    <ApolloConsumer>
      {bookQuery}
    </ApolloConsumer>
    </ApolloProvider>
  );
}

export default App;
