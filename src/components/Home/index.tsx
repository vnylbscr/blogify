import React, { useState } from 'react';
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
import { GET_ALL_POSTS_WITH_PAGINATE_QUERY } from '../../queries/getPostWithPaginate';
import InfiniteScroll from 'react-infinite-scroll-component';

interface IProps {
   children?: React.ReactNode;
}

interface PageState {
   limit: number;
   page: number;
}
const useStyles = makeStyles((theme: MyTheme) => ({
   root: {
      width: '100%',
      minHeight: 'calc(100vh - 60px)',
      background: theme.colorPalette.primary.light,
   },
}));

const Home = (props: IProps) => {
   const [pageState, setPageState] = useState<PageState>({
      limit: 2,
      page: 1,
   });
   // const [postsData, setPostsData] = useState([]);

   const { loading: allPostsLoading, data, fetchMore } = useQuery(GET_ALL_POSTS_WITH_PAGINATE_QUERY, {
      variables: {
         ...pageState,
      },
   });
   const classes = useStyles();

   const fetchMoreData = async () => {
      console.log('cagrildi');

      await fetchMore({
         variables: {
            page: data?.getAllPostsByPage.page + 1,
            limit: 2,
         },
         updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
            const newDocs = [...prevResult.getAllPostsByPage.docs, ...fetchMoreResult.getAllPostsByPage.docs];
            return {
               getAllPostsByPage: {
                  ...fetchMoreResult.getAllPostsByPage,
                  docs: newDocs,
               },
            };
         },
      });
   };

   if (allPostsLoading) {
      return <Loader />;
   }

   console.log('data here', data);
   console.log('has next page?', data?.getAllPostsByPage?.page);

   return (
      <Grid xs={12} className={classes.root} container style={{ height: '100%' }}>
         <Hidden smDown>
            <Grid container xs={3}>
               <StickyLeftPanel />
            </Grid>
         </Hidden>
         <Grid container sm={6} xs={12} justifyContent='center' alignItems='center'>
            <InfiniteScroll dataLength={200} next={fetchMoreData} hasMore={true} loader={<h4>Loading...</h4>}>
               {data.getAllPostsByPage.docs.map((post: any) => {
                  return <Post key={post._id} item={post} />;
               })}
            </InfiniteScroll>
         </Grid>

         <Grid xs={3}>its amazing.</Grid>
      </Grid>
   );
};

export default Home;
