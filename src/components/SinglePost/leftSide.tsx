import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

interface Props {
   post: any;
}
const useStyles = makeStyles((theme) => ({
   root: {
      padding: theme.spacing(2),
   },
}));

const LeftSide = (props: Props) => {
   const classes = useStyles();
   const { post } = props;

   return (
      <Grid container className={classes.root}>
         {post.user.username}
      </Grid>
   );
};

export default LeftSide;
