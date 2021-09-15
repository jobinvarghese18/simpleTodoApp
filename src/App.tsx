import React, { FC } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import Home from './pages/Home';
import './App.css';
import 'antd/dist/antd.css';

const App:FC = ()=>{
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, extensions }) => {
        console.log(
          `[GraphQL error]: Message: ${message}, Location: `
        );
      });
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const link = from([
    errorLink,
    new HttpLink({
      uri: 'https://morning-chamber-46471.herokuapp.com/graphql',
    })
  ]);


    
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });
  return (
    <div className="App">
      <ApolloProvider client={ client }>
       <Home />
      </ApolloProvider>
    </div>
  );
}

export default App;
