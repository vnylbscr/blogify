import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { API_URL } from './config';
//@ts-ignore
import { createUploadLink } from 'apollo-upload-client';
import { setContext } from '@apollo/client/link/context';
import store from './redux/store';

// Error Handling for GRAPH QL
const errorLink = onError(({ graphQLErrors, networkError }) => {
   if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
         console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
      );

   if (networkError) console.log(`[Network error]: ${networkError} `);
});

const authLink = setContext((_, { headers }) => {
   // get the authentication token from local storage if it exists
   const token = localStorage.getItem('token');
   return {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : '',
      },
   };
});

const uploadLink = createUploadLink({
   uri: API_URL,
});

const client = new ApolloClient({
   link: from([authLink, errorLink, uploadLink]),
   cache: new InMemoryCache(),
});
ReactDOM.render(
   <ApolloProvider client={client}>
      <Provider store={store}>
         <App />
      </Provider>
   </ApolloProvider>,
   document.getElementById('root')
);
