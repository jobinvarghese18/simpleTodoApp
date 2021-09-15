import React, { FC } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client';
import Home from './pages/Home';
import './App.css';
import 'antd/dist/antd.css';

const App:FC = ()=>{

  const link = new HttpLink({
    uri: 'https://morning-chamber-46471.herokuapp.com/graphql'
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
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
