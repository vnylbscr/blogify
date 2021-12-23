import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

interface Props {}
const useStyles = makeStyles((theme) => ({
   root: {
      padding: 10,
   },
}));
const LeftPanel = (props: Props) => {
   const classes = useStyles();
   return <Grid container className={classes.root} xs={12}></Grid>;
};

export default LeftPanel;
