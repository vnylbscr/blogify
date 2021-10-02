import React from 'react';
import { Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import PostItem from '../BaseComponents/PostItem';
import { GetAllPosts_getAllPosts as Post } from '../../queries/__generated__/GetAllPosts';

interface Props {
   posts?: Array<Post>;
}

const useStyles = makeStyles((theme) => ({
   root: {
      padding: 15,
      background: 'lightgrey',
   },
   title: {
      color: '#462a2a',
      fontWeight: 'bold',
   },
}));

const RightPanel = (props: Props) => {
   const classes = useStyles(props);
   const { posts } = props;

   return (
      <Grid container xs={12} className={classes.root}>
         <Grid item justifyContent='center' alignItems='center' xs={12}>
            <Typography variant='h3' align='center' className={classes.title}>
               your posts
            </Typography>
         </Grid>
         <Divider style={{ width: '100%', color: '#eee' }} />
         {posts?.map((post) => (
            <PostItem post={post} />
         ))}
      </Grid>
   );
};

export default RightPanel;
