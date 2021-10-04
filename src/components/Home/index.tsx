import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { MyTheme } from '../../styles/config';
import { useQuery } from '@apollo/client';
import { GET_ALL_POSTS_QUERY } from '../../queries/post';
import Post from '../Post';
import { GetAllPosts } from '../../queries/__generated__/GetAllPosts';
import StickyLeftPanel from './stickyLeftPanel';

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
   return (
      <Grid xs={12} className={classes.root} container style={{ height: '100%' }}>
         <Grid container xs={3}>
            <StickyLeftPanel />
         </Grid>

         <Grid container xs={6} justifyContent='center' alignItems='center'>
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
