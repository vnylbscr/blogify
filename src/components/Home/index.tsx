import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { MyTheme } from '../../styles/config';
import MyButton from '../BaseComponents/Button';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { GetAllPosts } from '../../queries/__generated__/GetAllPosts';
import { GET_ALL_POSTS_QUERY } from '../../queries/post';
import { GET_ME_WITH_TOKEN } from '../../queries/getUser';
import { SET_USER } from '../../actions/user';

const useStyles = makeStyles((theme: MyTheme) => ({
   root: {
      width: '100%',
      height: 'calc(100vh - 60px)',
   },
}));
const Home = (props: any) => {
   const dispatch = useDispatch();
   const { loading } = useQuery(GET_ME_WITH_TOKEN, {
      variables: localStorage.getItem('token') || '',
      onCompleted: (data) => {
         dispatch({ type: SET_USER, payload: data.getMeWithToken });
      },
   });
   const { loading: allPostsLoading, data } = useQuery<GetAllPosts>(GET_ALL_POSTS_QUERY);

   const user = useSelector((state: any) => state.userReducer.user);

   const classes = useStyles();
   return (
      <main className={classes.root}>
         <Grid xs={12} alignItems='center' justifyContent='center' container style={{ height: '100%' }}>
            <h1>selam kızlar</h1>
         </Grid>
      </main>
   );
};

export default Home;
