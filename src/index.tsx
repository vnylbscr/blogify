import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { ApolloClient, InMemoryCache, ApolloProvider, from, HttpLink, ApolloLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { API_URL } from './config';
import reducers from './reducers';
import { setContext } from '@apollo/client/link/context';

import { SnackbarProvider } from 'notistack';
// Extension for Redux
declare global {
   interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
   }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers());
// HTTP Link GRAPH QL
const httpLink = new HttpLink({
   uri: API_URL,
});
// Error Handling for GRAPH QL
const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
         console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      );

   if (networkError) console.log(`[Network error]: ${networkError} sdsdsdsd`);
});

const authLink = setContext((_, { headers }) => {
   // get the authentication token from local storage if it exists
   const token = localStorage.getItem('token');
   console.log('MERTULLAH', token);
   if (!token) {
      return null;
   }
   return {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : '',
      },
   };
});

// const links = [httpLink, authLink, errorLink];
const client = new ApolloClient({
   link: httpLink.concat(errorLink),
   cache: new InMemoryCache(),
   headers: {
      authorization: localStorage.getItem('token') || '',
   },
});
ReactDOM.render(
   <ApolloProvider client={client}>
      <Provider store={store}>
         <App />
      </Provider>
   </ApolloProvider>,
   document.getElementById('root')
);
