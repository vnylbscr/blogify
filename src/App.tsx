import React, { useEffect, useLayoutEffect, useState } from 'react';
import { responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import { theme } from '../src/styles/config';
import AppBar from './components/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Contributors from './components/Contributors';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Home from './components/Home';
import { SnackbarProvider } from 'notistack';
import Preload from './components/Preload/Content';
import MyProfile from './components/MyProfile';
import AddNewPost from './components/AddNewPost';
import LoginPage from './components/Auth/Login';
import RegisterPage from './components/Auth/Register';
import { GET_ME_WITH_TOKEN } from './queries/getUser';
import { useQuery } from '@apollo/client';
import { SET_USER } from './redux/actions/user';
import { getMeWithTokenQuery, getMeWithTokenQueryVariables } from './queries/__generated__/getMeWithTokenQuery';

const App = () => {
   const userToken = localStorage.getItem('token');
   const user = useSelector((state: any) => state.userReducer.user);
   const token = useSelector((state: any) => state.userReducer.token);
   const dispatch = useDispatch();
   const myTheme = responsiveFontSizes(theme);

   const { loading, refetch } = useQuery<getMeWithTokenQuery, getMeWithTokenQueryVariables>(GET_ME_WITH_TOKEN, {
      variables: { getMeWithTokenToken: localStorage.getItem('token') || '' },
      onCompleted: ({ getMeWithToken }) => {
         dispatch({ type: SET_USER, payload: getMeWithToken });
      },
   });

   useEffect(() => {
      if (token || userToken) {
         refetch();
      }
   }, [token, refetch, userToken]);

   return (
      <SnackbarProvider maxSnack={4} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
         <ThemeProvider theme={myTheme}>
            {user ? (
               <Router>
                  <AppBar />
                  <Switch>
                     <Route exact path='/' component={Home} />
                     <Route path='/profile' component={MyProfile} />
                     <Route exact path='/about' component={About} />
                     <Route exact path='/contact' component={Contact} />
                     <Route exact path='/contributors' component={Contributors} />
                     <Route exact path='/add-new-post' component={AddNewPost} />
                     <Redirect to='/' />
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
                     <Route exact path='/sign-in' component={LoginPage} />
                     <Route exact path='/sign-up' component={RegisterPage} />
                     <Redirect to='/' />
                  </Switch>
               </Router>
            )}
            <Footer />
         </ThemeProvider>
      </SnackbarProvider>
   );
};

export default App;
