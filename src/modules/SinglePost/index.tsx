import React from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_POST } from '../../queries/getSinglePost';
import { useSnackbar } from 'notistack';
import MyTypography from '../../components/Typography';
import Loader from '../../components/Loader';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import LeftSide from './leftSide';
import RightSide from './rightSide';

interface Props {}

const useStyles = makeStyles((theme) => ({
   root: {
      minHeight: 'calc(100vh - 60px)',
   },
   imageSection: {
      height: '500px',
      width: '100%',
      transition: 'all linear 1s',
      filter: 'brightness(0.8)',
      backgroundSize: 'auto',
      backgroundRepeat: 'no-repeat',
      background: (props: any) => `url(${props.image})`,
      '&:hover': {
         filter: 'brightness(1)',
         transform: 'scale(1)',
      },
   },
   image: {
      width: '100%',
      height: 'auto',
   },
   markDownContainer: {
      background: '#5C7AEA',
   },
   markDown: {
      whiteSpace: 'pre-wrap',
      backgroundColor: '#A2D2FF',
      padding: theme.spacing(3),
      width: '100%',
   },
}));

const PostContent = (props: Props) => {
   const { _id }: any = useParams();
   const { enqueueSnackbar } = useSnackbar();

   const { data, loading, error } = useQuery(GET_SINGLE_POST, {
      variables: {
         _id,
      },
      onError: (error) => {
         enqueueSnackbar(error.message, {
            variant: 'error',
            autoHideDuration: 2000,
         });
      },
   });

   const classes = useStyles(data?.getPost);

   if (loading) {
      return <Loader />;
   }

   if (error) {
      return <div>{error.message}</div>;
   }

   return (
      <Grid container xs={12} justifyContent='flex-start' alignItems='flex-start' className={classes.root}>
         <Grid xs={12} container justifyContent='center' alignItems='center' className={classes.imageSection}>
            <MyTypography variant='h1' color='textPrimary'>
               {data?.getPost?.title}
            </MyTypography>
         </Grid>
         <Grid container className={classes.markDownContainer} justifyContent='center' xs={12}>
            <Grid sm={3} container item>
               <LeftSide post={data.getPost} />
            </Grid>
            <Grid justifyContent='center' alignItems='center' container xs={false} sm={6}>
               <ReactMarkDown
                  className={classes.markDown}
                  children={data?.getPost?.content}
                  remarkPlugins={remarkGfm as any}
                  components={{
                     img: (props) => <img {...props} alt={props['aria-label']} className={classes.image} />,
                  }}
               />
            </Grid>
            <Grid sm={3} xs={false}>
               <RightSide post={data.getPost} />
            </Grid>
         </Grid>
      </Grid>
   );
};

export default PostContent;
