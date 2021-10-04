import React, { FC } from 'react';
import {
   Avatar,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   Collapse,
   Grid,
   IconButton,
   Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import clsx from 'clsx';
import { GetAllPosts_getAllPosts as Post } from '../../queries/__generated__/GetAllPosts';
import { MyTheme } from '../../styles/config';
import moment from 'moment';
interface IProps {
   // item: GetAllPosts_getAllPosts;
   item: any;
}

const useStyles = makeStyles((theme: MyTheme) => ({
   main: {
      margin: '15px 0px',
   },
   root: {
      width: 760,
      backgroundColor: theme.colorPalette.secondary,
   },
   media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
   },
   expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
         duration: theme.transitions.duration.shortest,
      }),
   },
   subtitleContainer: {
      width: 'inherit',
   },
   expandOpen: {
      transform: 'rotate(180deg)',
   },
   avatar: {
      backgroundColor: theme.colorPalette.primary.main,
   },
}));

const Index = (props: IProps) => {
   const { item } = props;

   const classes = useStyles();

   const [expanded, setExpanded] = React.useState(false);

   const handleExpandClick = () => {
      setExpanded(!expanded);
   };

   return (
      <Grid xs={12} container className={classes.main} justifyContent='center'>
         <Card className={classes.root}>
            <CardHeader
               avatar={
                  <Avatar aria-label='recipe' className={classes.avatar}>
                     {item?.user?.username[0]?.toUpperCase()}
                  </Avatar>
               }
               action={
                  <IconButton aria-label='settings'>
                     <MoreVertIcon />
                  </IconButton>
               }
               title={item?.user?.username}
               subheader={moment(parseInt(item.createdAt)).fromNow()}
            />
            <CardMedia className={classes.media} image={item?.image || undefined} />
            <CardContent className={classes.subtitleContainer}>
               <Typography variant='body2' style={{ width: '100%' }} color='textSecondary' component='p'>
                  {item.subtitle}
               </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton aria-label='add to favorites'>
                  <FavoriteIcon />
               </IconButton>
               <IconButton aria-label='share'>
                  <ShareIcon />
               </IconButton>
               <IconButton
                  className={clsx(classes.expand, {
                     [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label='show more'
               >
                  <ExpandMoreIcon />
               </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout='auto' unmountOnExit>
               <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                     Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                     Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add
                     chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes.
                     Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add
                     pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until
                     thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth;
                     bring to a boil.
                  </Typography>
                  <Typography paragraph>
                     Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without
                     stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                     reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring,
                     until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that
                     don’t open.)
                  </Typography>
                  <Typography>Set aside off of the heat to let rest for 10 minutes, and then serve.</Typography>
               </CardContent>
            </Collapse>
         </Card>
      </Grid>
   );
};

export default Index;
