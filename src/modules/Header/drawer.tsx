import React from 'react';
import { Button, FormControlLabel, Grid, List, ListItem, ListItemIcon, ListItemText, Switch } from '@material-ui/core';
import { useHistory } from 'react-router';
import MyTypography from '../../components/Typography';
import MyDivider from '../../components/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core';
import { Fn } from '../../types/utils';
import HomeIcon from '@material-ui/icons/Home';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
const ITEMS = [
   {
      title: 'Home',
      url: '/',
      icon: <HomeIcon />,
   },
   {
      title: 'Profile',
      url: '/profile',
      icon: <PermIdentityIcon />,
   },
   {
      title: 'Add new post',
      url: '/add-new-post',
      icon: <ContactSupportIcon />,
   },
   {
      title: 'Contributors',
      url: '/contributors',
      icon: <AllInclusiveIcon />,
   },
];

interface Props {
   handleClickItem: (item: string) => void;
   handleChangeDrawer: Fn;
   handleLogoutUser: Fn;
   authorized: boolean;
   authorizedItems: Array<any>;
}

const useStyles = makeStyles((theme) => ({
   root: {},
   icon: {
      fontSize: '1.5rem',
      color: '#C6B4CE',
   },
}));

const MyDrawer = (props: Props) => {
   const history = useHistory();
   const { authorizedItems, handleClickItem, handleChangeDrawer, authorized, handleLogoutUser } = props;
   const classes = useStyles();
   const arrayKey = authorized ? ITEMS : authorizedItems;

   return (
      <Grid container direction='column' justifyContent='space-between' style={{ height: '100%' }}>
         <Grid container item direction='column'>
            <MyTypography onClick={() => history.push('/')} variant='h6' align='center' style={{ paddingTop: 10 }}>
               Blogify
            </MyTypography>
         </Grid>
         <MyDivider dashed />
         <Grid container item xs={9}>
            <List>
               {arrayKey.map((item: any) => (
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
};

export default MyDrawer;
