import React, { Fragment, useEffect, useState } from 'react';
import {
   AppBar as MaterialAppBar,
   IconButton,
   Toolbar,
   Typography,
   makeStyles,
   Grid,
   Button,
   List,
   ListItem,
   ListItemText,
   ListItemIcon,
   Divider,
   Hidden,
   useMediaQuery,
   Drawer,
   FormControlLabel,
   Switch,
   Menu,
   useScrollTrigger,
   CssBaseline,
   Slide,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import HeaderItem from './Item';
import { useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import MenuIcon from '@material-ui/icons/Menu';
import { MyTheme } from '../../styles/config';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../redux/actions/user';
import PersonIcon from '@material-ui/icons/Person';
import StyledMenuItem from '../BaseComponents/MenuItem';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const useStyles = makeStyles((theme: MyTheme) => ({
   root: {
      fontSize: '1.2rem',
      flexGrow: 1,
      height: 60,
      // color: "#C6B4CE",
      background: theme.colorPalette.primary.main,
   },
   paper: {
      backgroundColor: theme.colorPalette.primary.main,
      color: theme.colorPalette.secondary,
   },
   title: {
      flexGrow: 3,
      fontWeight: 'bold',
   },
   rightPanelContainer: {
      flexGrow: 1,
      fontWeight: 'bold',
   },
   icon: {
      fontSize: '1.5rem',
      color: '#C6B4CE',
   },
   createIcon: {
      fontSize: '1.3rem',
      color: '#fff',
      [theme.breakpoints.down('sm')]: {
         display: 'none',
      },
   },
   drawer: {},
   MenuButton: {
      fontSize: '1.3rem',
      color: '#fff',
      [theme.breakpoints.up('md')]: {
         display: 'none',
      },
   },
   headerTitle: {},
   subtitle: {},
   titleContainer: {
      transition: 'all .7s',
      '&:hover': {
         color: theme.colorPalette.secondary,
         transform: 'scale(1.04)',
         cursor: 'pointer',
      },
   },
   loginButton: {
      fontSize: '1rem',
      color: '#fff',
      marginRight: 10,
      backgroundColor: theme.colorPalette.primary.main,
      border: '1px solid' + theme.colorPalette.primary.light,
      textTransform: 'none',
      '&:hover': {
         backgroundColor: theme.colorPalette.secondary,
      },
   },
}));

const APP_BAR_ITEMS = [
   {
      title: 'Home',
      url: '/',
      icon: <HomeIcon />,
   },
   {
      title: 'About',
      url: '/about',
      icon: <InfoIcon />,
   },
   {
      title: 'Contact',
      url: '/contact',
      icon: <ContactSupportIcon />,
   },
   {
      title: 'Contributors',
      url: '/contributors',
      icon: <AllInclusiveIcon />,
   },
];

const AUTHORIZED_APP_BAR_ITEMS = [
   {
      title: 'add new post 🤠',
      url: '/add-new-post',
      icon: <AccountCircleIcon />,
   },
];

// Types
interface Props {
   window?: () => Window;
   children?: React.ReactElement;
   authorized?: boolean;
}

function HideOnScroll(props: Props) {
   const { children, window } = props;
   const trigger = useScrollTrigger({ target: window ? window() : undefined });

   return (
      <Slide appear={false} direction='down' in={!trigger}>
         {children}
      </Slide>
   );
}
// Return
const AppBar = (props: Props) => {
   // useTheme
   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
   const dispatch = useDispatch();
   const authorized = useSelector((state: any) => state.userReducer.token);
   console.log('bu tema', theme);
   const classes = useStyles();
   const history = useHistory();

   console.log(authorized, 'issss');

   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
   const [openDrawer, setOpenDrawer] = useState<boolean>();
   const handleClickItem = (url: string) => {
      history.push(url);
   };
   const handleProfileMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(e.currentTarget);
   };

   useEffect(() => {
      setOpenDrawer(false);
   }, [isSmallScreen]);
   const openLoginDialog = () => {
      history.push('/sign-in');
   };

   const handleChangeDrawer = () => {
      setOpenDrawer(!openDrawer);
   };

   const handleLogoutUser = () => {
      dispatch({
         type: LOGOUT,
      });
   };
   // drawer for mobile
   const myDrawer = (
      <Grid container direction='column' justifyContent='space-between' style={{ height: '100%' }}>
         <Grid container item direction='column'>
            <Typography onClick={() => history.push('/')} variant='h6' align='center' style={{ paddingTop: 10 }}>
               Blogify
            </Typography>
         </Grid>
         <Divider style={{ width: '100%', color: '#fff' }} />
         <Grid container item xs={9}>
            <List>
               {APP_BAR_ITEMS.map((item) => (
                  <ListItem
                     button
                     onClick={() => {
                        handleClickItem(item.url);
                        // * when change route, close the drawer
                        handleChangeDrawer();
                     }}
                     key={item.url}
                  >
                     <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
                     <ListItemText>{item.title.toLowerCase()}</ListItemText>
                  </ListItem>
               ))}
            </List>
         </Grid>

         <Grid item container alignItems='center' direction='column'>
            <FormControlLabel
               control={<Switch name='checkedA' color='secondary' />}
               label='dark theme'
               color='Primary'
            />
            {authorized && (
               <Grid container alignItems='center' style={{ marginBottom: 10, marginTop: 10, padding: 10 }}>
                  <Button
                     variant='text'
                     startIcon={<ExitToAppIcon fontSize='medium' />}
                     fullWidth
                     color='inherit'
                     style={{ marginRight: 20 }}
                     onClick={handleLogoutUser}
                  >
                     logout
                  </Button>
               </Grid>
            )}
         </Grid>
      </Grid>
   );

   return (
      <Fragment>
         <CssBaseline />
         <HideOnScroll {...props}>
            <MaterialAppBar position='sticky' className={classes.root}>
               <Toolbar variant='dense'>
                  <Grid container xs={12} justifyContent='space-between' alignItems='center'>
                     <Grid
                        direction='row'
                        alignItems='center'
                        container
                        item
                        className={classes.title}
                        xs={isSmallScreen ? 7 : 3}
                     >
                        <IconButton className={classes.MenuButton} onClick={handleChangeDrawer}>
                           <MenuIcon />
                        </IconButton>
                        <Grid
                           item
                           direction='column'
                           onClick={() => history.push('/')}
                           className={classes.titleContainer}
                        >
                           <Typography variant='h6' className={classes.headerTitle}>
                              blogify.
                           </Typography>
                           <Typography variant='subtitle2' className={classes.subtitle}>
                              share blog and more
                           </Typography>
                        </Grid>
                     </Grid>
                     <Drawer
                        open={openDrawer}
                        variant='temporary'
                        onClose={handleChangeDrawer}
                        ModalProps={{
                           keepMounted: true,
                        }}
                        className={classes.drawer}
                        classes={{
                           paper: classes.paper,
                        }}
                     >
                        {myDrawer}
                     </Drawer>
                     <Hidden xsDown smDown>
                        <Fragment>
                           <Grid
                              direction='row'
                              alignItems='center'
                              container
                              justifyContent={authorized ? 'flex-end' : 'center'}
                              item
                              className={classes.title}
                              xs={authorized ? 9 : 6}
                           >
                              {authorized
                                 ? AUTHORIZED_APP_BAR_ITEMS.map((item) => (
                                      <Fragment>
                                         <HeaderItem
                                            title={item.title}
                                            onClick={() => handleClickItem(item.url)}
                                            style={{ marginRight: 15 }}
                                            icon={item.icon}
                                            disableRipple
                                         />
                                         <IconButton onClick={handleProfileMenu}>
                                            <PersonIcon fontSize='large' style={{ color: '#fff' }} />
                                         </IconButton>
                                         <Menu
                                            id='simple-menu'
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={() => setAnchorEl(null)}
                                         >
                                            <StyledMenuItem
                                               onClick={() => {
                                                  handleClickItem('/profile');
                                                  setAnchorEl(null);
                                               }}
                                               icon={() => <PermIdentityIcon />}
                                               label='profile'
                                               variant='first'
                                            />
                                            <StyledMenuItem
                                               onClick={handleLogoutUser}
                                               variant='first'
                                               label='logout'
                                               icon={() => <ExitToAppIcon />}
                                            />
                                         </Menu>
                                      </Fragment>
                                   ))
                                 : APP_BAR_ITEMS.map((item) => (
                                      <Fragment>
                                         <HeaderItem
                                            title={item.title}
                                            onClick={() => handleClickItem(item.url)}
                                            style={{ marginRight: 15 }}
                                            icon={item.icon}
                                            disableRipple
                                         />
                                      </Fragment>
                                   ))}
                           </Grid>
                           {!authorized && (
                              <Grid
                                 direction='row'
                                 alignItems='center'
                                 container
                                 className={classes.rightPanelContainer}
                                 justifyContent='flex-end'
                                 xs={3}
                              >
                                 <Button variant='text' onClick={openLoginDialog} className={classes.loginButton}>
                                    sign in
                                 </Button>
                              </Grid>
                           )}
                        </Fragment>
                     </Hidden>
                  </Grid>
               </Toolbar>
            </MaterialAppBar>
         </HideOnScroll>
      </Fragment>
   );
};

export default AppBar;
