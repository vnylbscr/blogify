import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import { MyTheme } from '../../styles/config';
import { useWindowSize } from '../../hooks/useWindowSize';
import RichEditor from './draftEditor';
import MDEditor from '@uiw/react-md-editor';
import MarkDownEditor from './markDownEditor';
import { useMutation } from '@apollo/client';
import { ADD_POST_MUTATION } from '../../queries/addPost';
import { useSelector } from 'react-redux';
import Loader from '../Loader';
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
   },
   subtitle: {
      color: 'black',
   },
}));

const AddNewPost: FC<Props> = (props) => {
   const classes = useStyles(props);
   const user = useSelector((state: any) => state.userReducer.user);
   const [addPostMutation, { loading }] = useMutation(ADD_POST_MUTATION);

   if (loading) {
      return <Loader />;
   }

   return (
      <main className={classes.root}>
         <Grid container xs={12} direction='row' style={{ height: '100%' }}>
            <Grid container xs={12} className={classes.rightSection} justifyContent='center' alignItems='center'>
               <Grid container justifyContent='center' direction='column'>
                  <Typography variant='h2' align='center' color='textPrimary' className={classes.title}>
                     Yeni Post Oluştur
                  </Typography>
                  <Typography variant='h6' align='center' color='textSecondary' className={classes.subtitle}>
                     Yeni bir post paylaşmak için formu doldur
                  </Typography>
               </Grid>
               <Grid container style={{ marginBottom: 50 }}>
                  <MarkDownEditor
                     onSubmitPost={(value) => {
                        addPostMutation({
                           variables: {
                              title: value.postTitle,
                              content: value.editorValue,
                              userId: user._id,
                              category: ['programming'],
                           },
                        });
                     }}
                  />
               </Grid>
            </Grid>
         </Grid>
      </main>
   );
};

export default AddNewPost;
