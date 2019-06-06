import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { ApolloProvider} from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error'
import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';
import {AUTH_TOKEN} from './constants'
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';


const httpLink = createHttpLink({
  uri: 'http://118.31.21.228:4000/',
});

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => alert(message))
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(AUTH_TOKEN);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink,  httpLink]),
  cache: new InMemoryCache()
});

ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
