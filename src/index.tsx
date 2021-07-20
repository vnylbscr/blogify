import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { API_URL } from "./config";
import reducers from "./reducers";

const store = createStore(reducers);

// Error Handling for GRAPH QL
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

// HTTP Link GRAPH QL
const httpLink = new HttpLink({
  uri: API_URL,
});
const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
