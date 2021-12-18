import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../redux/reducers/userReducer';
import LeftPanel from './leftPanel';
import RightPanel from './rightPanel';

interface IProps {}

const useStyles = makeStyles((theme) => ({
   root: {
      minHeight: 'calc(100vh - 60px)',
      padding: 20,
   },
}));

const MyProfile = (props: IProps) => {
   const user = useSelector(getUser);
   const classes = useStyles(props);
   console.log('user is ', user);

   return (
      <Grid container spacing={1} xs={12} className={classes.root}>
         <Grid container xs={5}>
            <LeftPanel />
         </Grid>
         <Grid container xs={7}>
            <RightPanel />
         </Grid>
      </Grid>
   );
};

export default MyProfile;
