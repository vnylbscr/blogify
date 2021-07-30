import { FC, Fragment, useState } from 'react';
import {
   AppBar as MaterialAppBar,
   IconButton,
   Toolbar,
   Typography,
   makeStyles,
   Grid,
   Button,
   TextField,
   List,
   ListItem,
   ListItemText,
   ListItemIcon,
   Divider,
   Hidden,
   Theme,
   useMediaQuery,
   Drawer,
   Box,
   FormControlLabel,
   Switch,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import HeaderItem from './Item';
import { useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import Modal from '../BaseComponents/Dialog';
import MenuIcon from '@material-ui/icons/Menu';
import RegisterModal from './registerModal';
import { MyTheme } from '../../styles/config';
import LoginModal from './loginModal';

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

// Types
interface AppBarProps {
   position?: string;
}
type ModalConfig = {
   mode: string;
   open: boolean;
};

// Return
const AppBar: FC<AppBarProps> = ({ position }) => {
   // useTheme
   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

   console.log('bu tema', theme);
   const classes = useStyles();
   const history = useHistory();
   const initialState = {
      mode: '',
      open: false,
   };
   const [modalConfig, setModalConfig] = useState<ModalConfig>(initialState);
   const [openDrawer, setOpenDrawer] = useState<boolean>();
   const handleClickItem = (url: string) => {
      history.push(url);
   };

   const openLoginDialog = () => {
      setModalConfig({
         mode: 'LOGIN',
         open: true,
      });
   };
   const openRegisterDialog = () => {
      setModalConfig({
         mode: 'REGISTER',
         open: true,
      });
   };

   const handleCloseDialog = () => {
      setModalConfig(initialState);
   };
   const handleChangeDrawer = () => {
      setOpenDrawer(!openDrawer);
   };

   // drawer for mobile
   const myDrawer = (
      <Grid container direction='column' justifyContent='space-between' style={{ height: '100%' }}>
         <Grid container item direction='column'>
            <Typography variant='h6' align='center' style={{ paddingTop: 10 }}>
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
                  >
                     <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
                     <ListItemText>{item.title}</ListItemText>
                  </ListItem>
               ))}
            </List>
         </Grid>
         <Grid item container alignItems='center' direction='column'>
            <FormControlLabel
               control={<Switch name='checkedA' color='secondary' />}
               label='Koyu Tema'
               color='Primary'
            />
            <Typography style={{ marginTop: 10 }} variant='caption'>
               Mert Genç 2021
            </Typography>
         </Grid>
      </Grid>
   );

   return (
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
                  <IconButton className={classes.createIcon}>
                     <CreateIcon className={classes.icon} />
                  </IconButton>
                  <IconButton className={classes.MenuButton} onClick={handleChangeDrawer}>
                     <MenuIcon />
                  </IconButton>
                  <Grid item direction='column' className={classes.titleContainer}>
                     <Typography variant='h6' className={classes.headerTitle}>
                        Blogify
                     </Typography>
                     <Typography variant='subtitle2' className={classes.subtitle}>
                        Blog yaz ve paylaş
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
                        justifyContent='center'
                        item
                        className={classes.title}
                        xs={6}
                     >
                        {APP_BAR_ITEMS.map((item) => (
                           <HeaderItem
                              title={item.title}
                              onClick={() => handleClickItem(item.url)}
                              style={{ marginRight: 15 }}
                              icon={item.icon}
                              disableRipple
                           />
                        ))}
                     </Grid>
                     <Grid
                        direction='row'
                        alignItems='center'
                        container
                        className={classes.rightPanelContainer}
                        justifyContent='flex-end'
                        xs={3}
                     >
                        <Button variant='text' onClick={openLoginDialog} className={classes.loginButton}>
                           Giriş Yap
                        </Button>
                        <LoginModal open={modalConfig.mode === 'LOGIN'} onCloseModal={handleCloseDialog} />

                        <Typography variant='subtitle2'>or</Typography>
                        <Button
                           variant='text'
                           style={{ marginLeft: 5 }}
                           className={classes.loginButton}
                           onClick={openRegisterDialog}
                        >
                           Kayıt Ol
                        </Button>
                        <RegisterModal open={modalConfig.mode === 'REGISTER'} onCloseModal={handleCloseDialog} />
                     </Grid>
                  </Fragment>
               </Hidden>
            </Grid>
         </Toolbar>
      </MaterialAppBar>
   );
};

export default AppBar;
