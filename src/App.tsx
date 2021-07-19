import { Grid, ThemeProvider, Typography } from "@material-ui/core";
import React, { FC, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { theme } from "../src/styles/config";
import AppBar from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from "./components/Preload/Content";
import About from "./components/About";
import Contact from "./components/Contact";
import Contributors from "./components/Contributors";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppBar />
        <Switch>
          <Route exact path="/" component={Content} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/contributors" component={Contributors} />
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
