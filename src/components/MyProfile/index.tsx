import React, { FC } from 'react';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import LeftPanel from './leftPanel';
import { useQuery } from '@apollo/client';
import RightPanel from './rightPanel';

interface IProps {}

const useStyles = makeStyles((theme) => ({
   root: {
      minHeight: 'calc(100vh - 60px)',
      padding: 20,
   },
}));

const MyProfile = (props: IProps) => {
   const user = useSelector((state: any) => state.userReducer.user);
   const classes = useStyles(props);

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
