import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

interface Props {
   post: any;
}
const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2),
   },
}));

const RightSide = (props: Props) => {
   const classes = useStyles();
   return <Grid className={classes.root} container xs={12}></Grid>;
};

export default RightSide;
