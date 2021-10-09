import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { Fragment } from 'react';

const useStyles = makeStyles((theme: any) => ({
   root: {
      width: '100%',
      height: `calc(100vh - ${theme.workspace.appBarHeight}px)`,
      overflow: 'auto',
   },
   image: {
      background: `url("https://jestman.com/wp-content/uploads/2016/07/blog.jpg")`,
      opacity: 0.6,
      width: '100%',
      height: `calc(100vh - ${theme.workspace.appBarHeight}px)`,
      backgroundSize: 'cover',
      position: 'fixed',
      filter: 'blur(2px)',
      transition: 'all .5s',
      '&:hover': {
         filter: 'blur(0px)',
         opacity: 1,
         transform: 'scale(1.01)',
      },
   },
   section: {
      width: '80%',
      height: 400,
      border: '4px solid #fff',
      borderRadius: 15,
      color: theme.colorPalette.secondary,
      position: 'fixed',
      transition: 'all .4s',
      '&:hover': {
         backgroundColor: theme.colorPalette.primary.main,
      },
      '&:not(:hover)': {
         backgroundColor: theme.colorPalette.primary.main,
         color: '#fff',
         opacity: 0.2,
      },
   },
   accordion: {
      backgroundColor: theme.colorPalette.primary.main,
      color: theme.colorPalette.secondary,
   },
   title: {
      '&:first-letter': {
         fontSize: 100,
         color: theme.colorPalette.primary.light,
      },
   },
}));
const About = () => {
   const classes = useStyles();
   return (
      <Fragment>
         <div className={classes.image}></div>
         <Grid container alignItems='center' justifyContent='center' className={classes.root}>
            <Grid container className={classes.section} alignItems='center' justifyContent='center'>
               <Typography variant='h5' align='center' className={classes.title}>
                  Blogify bir blog paylaşma platformudur. Hemen hesap oluşturarak yeni bir hesap oluşturabilir,
                  arkadaşlarınla blog'larını paylaşaabilirsin.
               </Typography>
            </Grid>
         </Grid>
      </Fragment>
   );
};

export default About;
