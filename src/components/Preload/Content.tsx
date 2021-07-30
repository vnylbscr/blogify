import { Grid, makeStyles, TextField, Theme } from '@material-ui/core';
import React from 'react';
import backgroundImage from '../../assets/images/bg.jpg';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from './carouselItem';
import { useQuery } from '@apollo/client';
import Footer from '../Footer';

const useStyles = makeStyles((theme: Theme) => ({
   root: {
      padding: theme.spacing(2),
      width: 'auto',
      backgroundImage: `url("https://images5.alphacoders.com/394/thumb-1920-394862.jpg")`,
      backgroundSize: 'cover',
      height: 'calc(100vh - 60px)',
   },
   leftSpace: {
      // height: 600,
   },
   rightSpace: {
      // height: 600,
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

const CARAOUSEL_ITEMS = [
   {
      title: 'Blogify ile post paylaşmak çok kolay!',
      description:
         'Blogify ile post paylaşmak çok kolaydır. Hemen üye ol ve paylaşmaya başla! Ya da yeni bir hesap oluştur!',
      imageUrl: 'https://www.rgsyazilim.com/wp-content/uploads/2020/06/blog.png',
   },
   {
      title: 'Blogify ile post paylaşmak çok hızlıdır!',
      description:
         'Blogify ile post paylaşmak çok hızlıdır. Hemen üye ol ve paylaşmaya başla! Ya da yeni bir hesap oluştur!',
      imageUrl: 'https://cdn.pixabay.com/photo/2017/05/30/03/58/blog-2355684_960_720.jpg',
   },
   {
      title: 'Blogify ile post paylaşmak çok ulaşılabilirdir!',
      description:
         'Blogify ile post paylaşmak çok kolaydır. Hemen üye ol ve paylaşmaya başla! Ya da yeni bir hesap oluştur!',
      imageUrl: 'https://sinanhan.com/wp-content/uploads/2019/01/blog-gorsel.jpg',
   },
];
const Content = () => {
   const classes = useStyles();

   return (
      <main className={classes.root}>
         <Grid container direction='column' alignItems='center' justifyContent='center'>
            <Carousel
               animation='slide'
               timeout={500}
               autoPlay
               className={classes.caraousel}
               navButtonsWrapperProps={{
                  style: {
                     display: 'none',
                  },
               }}
            >
               {CARAOUSEL_ITEMS.map((item) => (
                  <CarouselItem
                     title={item.title}
                     description={item.description}
                     imageUrl={item.imageUrl}
                     key={item.title}
                  />
               ))}
            </Carousel>
         </Grid>
      </main>
   );
};

export default Content;
