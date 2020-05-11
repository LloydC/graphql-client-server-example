import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import Books from './Books'

const client = new ApolloClient({
  uri: "http://localhost:4000/"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">Book App</div>
      <Books/>
    </ApolloProvider>
  );
}

export default App;
