import { Grid, ThemeProvider, Typography } from '@material-ui/core';
import React, { FC, useEffect, useLayoutEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { theme } from '../src/styles/config';
import AppBar from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Contributors from './components/Contributors';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Home';
import { SnackbarProvider } from 'notistack';
import Preload from './components/Preload/Content';
import MyProfile from './components/MyProfile';
import { useQuery } from '@apollo/client';
import { GET_ME_WITH_TOKEN } from './queries/getUser';
import { SET_USER } from './actions/user';
const App = () => {
   const userToken = localStorage.getItem('token');
   const user = useSelector((state: any) => state.userReducer.user);
   const dispatch = useDispatch();
   const [loggedIn, setLoggedIn] = useState<boolean>();
   
   useLayoutEffect(() => {
      if (user) {
         setLoggedIn(true);
      }
   }, [user]);
   return (
      <SnackbarProvider maxSnack={5}>
         <ThemeProvider theme={theme}>
            {userToken || loggedIn ? (
               <Router>
                  <AppBar authorized />
                  <Switch>
                     <Route exact path='/' component={Home} />
                     <Route path='/profile' component={MyProfile} />
                     <Route exact path='/about' component={About} />
                     <Route exact path='/contact' component={Contact} />
                     <Route exact path='/contributors' component={Contributors} />
                  </Switch>
               </Router>
            ) : (
               <Router>
                  <AppBar />
                  <Switch>
                     <Route exact path='/' component={Preload} />
                     <Route exact path='/about' component={About} />
                     <Route exact path='/contact' component={Contact} />
                     <Route exact path='/contributors' component={Contributors} />
                  </Switch>
               </Router>
            )}
            <Footer />
         </ThemeProvider>
      </SnackbarProvider>
   );
};

export default App;
