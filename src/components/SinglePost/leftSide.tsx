import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

interface Props {}
const useStyles = makeStyles((theme) => ({
   root: {
      background: theme.palette.common.black,
   },
}));

const LeftSide = (props: Props) => {
   const classes = useStyles();
   return (
      <Grid container className={classes.root}>
         merdo
      </Grid>
   );
};

export default LeftSide;
