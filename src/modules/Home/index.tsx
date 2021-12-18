import { useQuery } from '@apollo/client';
import { CircularProgress, Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../../components/Loader';
import MyTypography from '../../components/Typography';
import { GET_ALL_POSTS_WITH_PAGINATE_QUERY } from '../../queries/getPostWithPaginate';
import { MyTheme } from '../../styles/config';
import Post from '../../components/Post';
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
   const { loading: allPostsLoading, data, fetchMore } = useQuery(GET_ALL_POSTS_WITH_PAGINATE_QUERY, {
      variables: {
         page: 1,
         limit: 10,
      },
   });
   const classes = useStyles();

   const fetchMoreData = async () => {
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

   console.log('data', data);

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
            <InfiniteScroll
               dataLength={data?.getAllPostsByPage?.page * 20}
               next={fetchMoreData}
               hasMore={data?.getAllPostsByPage?.hasNextPage}
               loader={
                  <Grid
                     style={{
                        height: 100,
                     }}
                     container
                     justifyContent='center'
                     alignItems='center'
                     xs={12}
                  >
                     <CircularProgress size={24} color='secondary' />
                  </Grid>
               }
               endMessage={
                  <MyTypography bold margin variant='h6'>
                     thats all for now.
                  </MyTypography>
               }
            >
               {data?.getAllPostsByPage?.docs.map((post: any) => {
                  return <Post key={post._id} item={post} />;
               })}
            </InfiniteScroll>
         </Grid>
         <Grid xs={3}>its amazing.</Grid>
      </Grid>
   );
};

export default Home;
