import React from 'react';
import { Button, Grid, Link, makeStyles, Typography } from '@material-ui/core';
import { MyTheme } from '../../styles/config';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: MyTheme) => ({
   root: {
      // padding: theme.spacing(2),
      width: 'auto',
      height: 'calc(100vh - 60px)',
   },
   image: {
      backgroundImage: `url("https://source.unsplash.com/user/erondu/1600x900")`,
      backgroundSize: 'cover',
      width: '100%',
   },
   rightSpace: {
      height: '100%',
      width: '100%',
      backgroundColor: theme.colorPalette.primary.light,
   },
   getStartedButton: {
      height: 80,
      borderRadius: 36,
      fontSize: '2.4rem',
      textTransform: 'none',
      backgroundColor: theme.colorPalette.primary.main,
      color: '#fff',
      transition: 'all .6s',
      '&:hover': {
         backgroundColor: theme.colorPalette.secondary,
      },
   },

   iconTitle: {
      width: '100%',
      fontSize: '4rem',
      textAlign: 'center',
      color: 'rebeccapurple',
   },
   section: {
      fontSize: '1.5rem',
   },
   caraousel: {
      maxWidth: 1100,
      maxHeight: 1100,
      [theme.breakpoints.down('sm')]: {
         width: 300,
         height: 500,
      },
   },
}));

const Preload = () => {
   const classes = useStyles();
   const history = useHistory();
   const handleClick = () => {
      history.push('/contact');
   };
   return (
      <main className={classes.root}>
         <Grid container style={{ height: '100%' }}>
            <Grid item container xs={false} sm={7} className={classes.image} />
            <Grid
               item
               container
               xs={12}
               sm={5}
               alignItems='center'
               justifyContent='center'
               className={classes.rightSpace}
            >
               <Grid container item direction='column' justifyContent='center' xs={7}>
                  <Typography align='center' className={`home-title`} variant='h4'>
                     Blogify
                  </Typography>
                  <Typography
                     color='textSecondary'
                     variant='subtitle1'
                     style={{ marginTop: 28 }}
                     className='home-subtitle'
                  >
                     sharing blog is easy with blogify now!
                  </Typography>
               </Grid>
               <Grid item xs={9} spacing={3}>
                  <Button fullWidth variant='contained' onClick={handleClick} className={classes.getStartedButton}>
                     get started
                  </Button>
               </Grid>

               <Grid item xs={12}>
                  <Link href='https://github.com/vnylbscr'>
                     <Typography align='center' color='textSecondary'>
                        blogify(c) 2021
                     </Typography>
                  </Link>
               </Grid>
            </Grid>
         </Grid>
      </main>
   );
};

export default Preload;
