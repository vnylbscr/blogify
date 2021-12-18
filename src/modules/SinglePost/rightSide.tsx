import React from 'react';
import { classNames } from 'react-select/dist/declarations/src/utils';

import { Grid, makeStyles } from '@material-ui/core';

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
   return <Grid className={classes.root} container xs={12}>
       
   </Grid>;
};

export default RightSide;
