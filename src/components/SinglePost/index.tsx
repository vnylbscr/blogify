import React from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_POST } from '../../queries/getSinglePost';
import { useSnackbar } from 'notistack';
import MyTypography from '../BaseComponents/Typography';
import Loader from '../Loader';

interface Props {}

const useStyles = makeStyles((theme: any) => ({
   root: {
      minHeight: 'calc(100vh - 60px)',
   },
   imageSection: {
      height: '500px',
      width: '100%',
      transition: 'all linear 1s',
      filter: 'brightness(0.8)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      background: (props: any) => `url(${props.image})`,
      '&:hover': {
         filter: 'brightness(1)',
         transform: 'scale(1)',
      },
   },
}));

const PostContent = (props: Props) => {
   const { _id, slug }: any = useParams();
   const { enqueueSnackbar } = useSnackbar();

   const {
      data: { getPost: data },
      loading,
      error,
   } = useQuery(GET_SINGLE_POST, {
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

   const classes = useStyles(data);

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
               {data?.title}
            </MyTypography>
         </Grid>
      </Grid>
   );
};

export default PostContent;
