import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { MyTheme } from '../../styles/config';
import AddNewPostForm from './form';
import blogBgImage from '../../assets/images/post-background.jpeg';
import { useMutation } from '@apollo/client';
import { useWindowSize } from '../../hooks/useWindowSize';
import AddPostEditor from './editor';
interface Props {}

const useStyles = makeStyles((theme: MyTheme) => ({
   root: {
      backgroundColor: theme.colorPalette.primary.light,
      height: '100%',
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
}));
const AddNewPost: FC<Props> = (props) => {
   const classes = useStyles(props);
   // const [addPostMutation, {loading}] = useMutation()
   const onAccept = (data: any) => console.log(data);
   const { width, height } = useWindowSize();
   return (
      <main className={classes.root}>
         <Grid container xs={12} direction='row' style={{ height: '100%' }}>
            <Grid container xs={12} sm={6} className={classes.leftSection}>
               <img src={blogBgImage} className={classes.image} />
            </Grid>
            <Grid container xs={12} sm={6} className={classes.rightSection} justifyContent='center' alignItems='center'>
               <Grid container justifyContent='center' direction='column'>
                  <Typography variant='h2' align='center' color='textPrimary'>
                     Yeni Post Oluştur
                  </Typography>
                  <Typography variant='h6' align='center' color='textSecondary'>
                     Yeni bir post paylaşmak için formu doldur
                  </Typography>
               </Grid>
               <Grid container>
                  <AddPostEditor />
               </Grid>
            </Grid>
         </Grid>
      </main>
   );
};

export default AddNewPost;
