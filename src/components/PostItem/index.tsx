import React from 'react';
import { Grid, makeStyles, Avatar, Typography } from '@material-ui/core';
import { GetAllPosts_getAllPosts as Post } from '../../queries/__generated__/GetAllPosts';

interface Props {
   post: Post;
}

const useStyles = makeStyles((theme) => ({
   root: {
      padding: 4,
   },
   avatar: {
      width: 140,
      height: 140,
   },
}));

const PostItem = (props: Props) => {
   const { post } = props;
   const classes = useStyles();
   return (
      <Grid xs={12} container className={classes.root}>
         <Grid item xs={5}>
            <Avatar src={post?.image || ''} variant='rounded' className={classes.avatar} />
         </Grid>
         <Grid item xs={7} alignItems='center' justifyContent='center'>
            <Typography variant='h5'>{post.title}</Typography>
            <Typography variant='body1' color='textSecondary'>
               {post.subtitle}
            </Typography>
         </Grid>
      </Grid>
   );
};

export default PostItem;
