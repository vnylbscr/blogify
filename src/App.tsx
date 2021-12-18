import React from 'react';
import { Collapse, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import { theme } from '../src/styles/config';
import AppBar from './modules/Header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import About from './modules/About';
import Contact from './modules/Contact';
import Contributors from './modules/Contributors';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import Home from './modules/Home';
import { SnackbarProvider } from 'notistack';
import Preload from './modules/Preload/Content';
import MyProfile from './modules/MyProfile';
import AddNewPost from './modules/AddNewPost';
import LoginPage from './modules/Auth/Login';
import RegisterPage from './modules/Auth/Register';
import PostContent from './modules/SinglePost';

const App = () => {
   const user = useSelector((state: any) => state.userReducer.user);
   const myTheme = responsiveFontSizes(theme);

   return (
      <SnackbarProvider
         maxSnack={4}
         anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         TransitionComponent={Collapse}
      >
         <ThemeProvider theme={myTheme}>
            {user ? (
               <Router>
                  <AppBar />
                  <Switch>
                     <Route exact path='/' component={Home} />
                     <Route path='/profile' component={MyProfile} />
                     <Route path='/about' component={About} />
                     <Route path='/contact' component={Contact} />
                     <Route path='/contributors' component={Contributors} />
                     <Route path='/add-new-post' component={AddNewPost} />
                     <Route path='/post/:_id/:slug' component={PostContent} />
                     <Redirect to='/' />
                  </Switch>
               </Router>
            ) : (
               <Router>
                  <AppBar />
                  <Switch>
                     <Route exact path='/' component={Preload} />
                     <Route path='/about' component={About} />
                     <Route path='/contact' component={Contact} />
                     <Route path='/contributors' component={Contributors} />
                     <Route path='/sign-in' component={LoginPage} />
                     <Route path='/sign-up' component={RegisterPage} />
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
