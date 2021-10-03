import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import { MyTheme } from '../../styles/config';
import MarkDownEditor, { FormState } from './markDownEditor';
import { useMutation } from '@apollo/client';
import { ADD_POST_MUTATION } from '../../queries/addPost';
import { useSelector } from 'react-redux';
import Loader from '../Loader';
import { AddPostMutation } from '../../queries/__generated__/AddPostMutation';
import { useSnackbar } from 'notistack';
interface Props {}

const useStyles = makeStyles((theme: MyTheme) => ({
   root: {
      backgroundColor: theme.colorPalette.primary.light,
      minHeight: 'calc(100vh - 60px)',
   },
   leftSection: {
      padding: theme.spacing(4),
   },
   rightSection: {
      padding: theme.spacing(2),
      height: '100%',
   },
   image: {
      width: '100%',
      height: 'auto',
      borderRadius: 15,
   },
   title: {
      color: '#301934',
      '&:hover': {
         transform: 'scale(1.1)',
         color: 'rebeccapurple',
         transition: 'all 1s',
      },
      fontWeight: 'bold',
   },
   subtitle: {
      color: 'black',
   },
}));

const AddNewPost: FC<Props> = (props) => {
   const classes = useStyles(props);
   const user = useSelector((state: any) => state.userReducer.user);
   const [addPostMutation, { loading }] = useMutation<AddPostMutation>(ADD_POST_MUTATION);
   const { enqueueSnackbar } = useSnackbar();

   const onSubmitAddPost = (value: FormState) => {
      addPostMutation({
         variables: {
            ...value,
            userId: user._id,
            category: value.category.map((item) => item.value),
         },
      })
         .then((data) => {
            enqueueSnackbar(`${data.data?.addPost.title} has added successfully 🚀. you can share everyone.`, {
               variant: 'success',
               autoHideDuration: 3000,
            });
         })
         .catch((error) => {
            enqueueSnackbar(error.message, {
               variant: 'error',
               autoHideDuration: 3000,
            });
         });
   };
   return (
      <main className={classes.root}>
         {loading && <Loader />}
         <Grid container xs={12} direction='row' style={{ height: '100%' }}>
            <Grid container xs={12} className={classes.rightSection} justifyContent='center' alignItems='center'>
               <Grid container justifyContent='center' direction='column'>
                  <Typography variant='h2' align='center' color='textPrimary' className={classes.title}>
                     Create New Post
                  </Typography>
                  <Typography align='center' color='textSecondary' variant='body1'>
                     share your post with everyone 🖖
                  </Typography>
               </Grid>
               <Grid container style={{ marginBottom: 5 }}>
                  <MarkDownEditor onSubmitPost={onSubmitAddPost} />
               </Grid>
            </Grid>
         </Grid>
      </main>
   );
};

export default AddNewPost;
