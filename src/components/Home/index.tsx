import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { MyTheme } from '../../styles/config';
import MyButton from '../BaseComponents/Button';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { GetAllPosts, GetAllPosts_getAllPosts } from '../../queries/__generated__/GetAllPosts';
import { GET_ALL_POSTS_QUERY } from '../../queries/post';
import { GET_ME_WITH_TOKEN } from '../../queries/getUser';
import { SET_USER } from '../../actions/user';
import { GetMe, GetMeVariables, GetMe_getMeWithToken } from '../../queries/__generated__/GetMe';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Post from '../Post';
import { useWindowSize } from '../../hooks/useWindowSize';

interface IProps {
   children?: React.ReactNode;
}
const useStyles = makeStyles((theme: MyTheme) => ({
   root: {
      width: '100%',
      height: 'calc(100vh - 60px)',
   },
}));
const Home = (props: IProps) => {
   const dispatch = useDispatch();
   const { loading } = useQuery<GetMe, GetMeVariables>(GET_ME_WITH_TOKEN, {
      variables: { getMeWithTokenToken: localStorage.getItem('token') || '' },
      onCompleted: ({ getMeWithToken }) => {
         dispatch({ type: SET_USER, payload: getMeWithToken });
      },
   });
   const { loading: allPostsLoading, data } = useQuery<GetAllPosts>(GET_ALL_POSTS_QUERY);
   const user = useSelector((state: any) => state.userReducer.user);
   const { width, height } = useWindowSize();
   const classes = useStyles();
   return (
      <main className={classes.root}>
         <Grid xs={12} alignItems='center' justifyContent='center' container style={{ height: '100%' }}>
            {data?.getAllPosts?.length === 0 && <h1>Henüz bir post yok</h1>}
            {data?.getAllPosts?.map((post: GetAllPosts_getAllPosts) => {
               return <Post item={post} />;
            })}
         </Grid>
      </main>
   );
};

export default Home;
