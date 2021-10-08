import React from 'react';
import { Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { MyTheme } from '../../styles/config';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS_QUERY } from '../../queries/getAllPosts';
import Post from '../Post';
import { GetAllPosts } from '../../queries/__generated__/GetAllPosts';
import StickyLeftPanel from './stickyLeftPanel';
import Loader from '../Loader';

interface IProps {
   children?: React.ReactNode;
}
const useStyles = makeStyles((theme: MyTheme) => ({
   root: {
      width: '100%',
      minHeight: 'calc(100vh - 60px)',
      background: theme.colorPalette.primary.light,
   },
}));

const Home = (props: IProps) => {
   const user = useSelector((state: any) => state.userReducer.user);
   const dispatch = useDispatch();

   const { loading: allPostsLoading, data } = useQuery<GetAllPosts>(GET_ALL_POSTS_QUERY);
   const classes = useStyles();

   if (allPostsLoading) {
      return <Loader />;
   }

   return (
      <Grid xs={12} className={classes.root} container style={{ height: '100%' }}>
         <Hidden smDown>
            <Grid container xs={3}>
               <StickyLeftPanel />
            </Grid>
         </Hidden>
         <Grid container sm={6} xs={12} justifyContent='center' alignItems='center'>
            {data?.getAllPosts?.length === 0 ? (
               <Typography variant='h1' align='center' color='textSecondary'>
                  that's all for now 🙏
               </Typography>
            ) : (
               data?.getAllPosts?.map((post: any) => {
                  return <Post item={post} />;
               })
            )}
         </Grid>

         <Grid xs={3}>its amazing.</Grid>
      </Grid>
   );
};

export default Home;
