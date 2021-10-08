import React from 'react';
import { Grid, Paper, makeStyles, CircularProgress, CardMedia } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { MyTheme } from '../../styles/config';
import { useQuery } from '@apollo/client';
import { GET_USER_POSTS } from '../../queries/getUserPosts';
import { getUserPostsQuery, getUserPostsQueryVariables } from '../../queries/__generated__/getUserPostsQuery';
import MyTypography from '../BaseComponents/Typography';

interface Props {}
const useStyles = makeStyles((theme: MyTheme) => ({
   fixedPosition: {
      position: 'fixed',
      top: 100,
      left: 50,
      width: 350,
      zIndex: 50,
   },
   root: {
      position: 'sticky',
      background: theme.colorPalette.secondary,
      color: '#fff',
      padding: theme.spacing(2),
      minHeight: 500,
   },
}));

const StickyLeftPanel = (props: Props) => {
   const user = useSelector((state: any) => state.userReducer.user);
   const classes = useStyles(props);
   const { data: userPosts, loading } = useQuery<getUserPostsQuery, getUserPostsQueryVariables>(GET_USER_POSTS, {
      variables: {
         getUserPostsUser: user._id,
      },
   });

   return (
      <Paper className={classes.fixedPosition} elevation={4}>
         <Grid className={classes.root} container xs={12}>
            <Grid item xs={12}>
               <MyTypography animation='left' variant='h4' color='primary'>
                  hello again, {user.username} ✋
               </MyTypography>
               <MyTypography variant='h6' margin color='textSecondary'>
                  you can start writing a story clicking 'add new post' button.
               </MyTypography>
            </Grid>
            <Grid container justifyContent='center' alignItems='center' xs={12}>
               {loading && <CircularProgress color='primary' />}
               <MyTypography bold margin variant='h6'>
                  your recent posts.
               </MyTypography>
               {userPosts?.getUserPosts?.map((post) => (
                  <Grid container alignItems='center' spacing={2} xs={12}>
                     <Grid item xs={3}>
                        <CardMedia component='img' height='50' image={post?.image || undefined} alt='merto posts' />
                     </Grid>
                     <Grid xs={9} item>
                        <MyTypography gutterBottom variant='subtitle1' color='primary'>
                           {post?.title}
                        </MyTypography>
                        <MyTypography gutterBottom variant='caption' color='textSecondary'>
                           {post?.subtitle}
                        </MyTypography>
                     </Grid>
                  </Grid>
               ))}
            </Grid>
         </Grid>
      </Paper>
   );
};

export default StickyLeftPanel;
