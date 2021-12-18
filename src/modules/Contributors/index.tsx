import React, { Fragment } from 'react';
import { Grid, Slide, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { MyTheme } from '../../styles/config';
import Avatar from '@material-ui/core/Avatar';
import useResponsiveScreenVariables from '../../hooks/useResponsiveScreenVariables';
const useStyles = makeStyles((theme: MyTheme) => ({
   root: {
      height: 'calc(100vh - 60px)',
      background: theme.colorPalette.primary.light,
      [theme.breakpoints.down('sm')]: {
         padding: 20,
      },
   },
   m15: {
      margin: '15px 0px',
   },
   avatar: {
      width: 300,
      height: 300,
   },
}));

const Contributors = () => {
   const classes = useStyles();
   const { isMediumScreen } = useResponsiveScreenVariables();
   return (
      <Fragment>
         <Grid container className={classes.root} justifyContent='center' alignItems='center'>
            <Grid container item xs={12} alignItems='center' className={classes.m15}>
               <Grid item xs={12} md={4} container justify='center' alignItems='center'>
                  <Slide in direction='right' timeout={1200}>
                     <Avatar
                        src='https://cdn.sanity.io/images/nnice2kn/production/a591dcaa683f6dd01008f07db1f7f62f7b904ded-1536x2048.jpg?rect=0,102,1536,1843&w=500&h=600'
                        alt='Mert Genç Developer'
                        component='div'
                        className={classes.avatar}
                        onClick={() => {
                           window.open('https://www.twitter.com/accurcy');
                        }}
                     />
                  </Slide>
               </Grid>
               <Grid container xs={12} md={8}>
                  <Slide in direction='left' timeout={1200}>
                     <Grid container alignItems='center'>
                        <Grid container alignItems='center' justifyContent={isMediumScreen ? 'center' : undefined}>
                           <Typography
                              variant='h2'
                              style={{ textTransform: 'uppercase', fontWeight: 'bold' }}
                              color='primary'
                           >
                              Mert Genç
                              <Typography variant='body1'>JavaScript & React Developer</Typography>
                           </Typography>
                        </Grid>

                        <Grid item xs={12}>
                           <Typography variant='h6' color='textSecondary'>
                              Hello, 👋 I'm Mert. I was born in Istanbul in 1997 and I currently live in Istanbul. I'm
                              currently working on Qpien. I finished primary and high school in Istanbul. Then, in 2016,
                              I got into Sakarya University Computer Engineering Department. In my graduation project, I
                              developed a mobile application with React Native. My main areas is React.js(7/10), Next.js
                              and CSS, SASS cool collaborative tools like git and slack. Currently I am interested in
                              Web Development, Open Source Software, Mobile Development, Fullstack Development. I am
                              currently learning everything.
                           </Typography>
                        </Grid>
                     </Grid>
                  </Slide>
               </Grid>
            </Grid>
         </Grid>
      </Fragment>
   );
};

export default Contributors;
