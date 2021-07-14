import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { API_URL } from "./config";

const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
