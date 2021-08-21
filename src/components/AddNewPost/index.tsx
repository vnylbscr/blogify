import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { MyTheme } from '../../styles/config';
import Input from '../BaseComponents/Input/Input/Input';
import AddNewPostForm from './form';
interface Props {}

const useStyles = makeStyles((theme: MyTheme) => ({
   root: {
      backgroundColor: theme.colorPalette.primary.light,
   },
}));
const AddNewPost: FC<Props> = (props) => {
   const classes = useStyles(props);

   return (
      <main className={classes.root}>
         <Grid container xs={12}>
            <Grid container>
               <Grid container justifyContent='center' alignItems='center' direction='column'>
                  <Typography variant='h2' align='center' color='textPrimary'>
                     Yeni Post Oluştur
                  </Typography>
                  <Typography variant='h6' align='center' color='textSecondary'>
                     Yeni bir post paylaşmak için formu doldur
                  </Typography>
               </Grid>
            </Grid>
            <Grid container alignItems='center' justify='center'>
               <AddNewPostForm />
            </Grid>
         </Grid>
      </main>
   );
};

export default AddNewPost;
