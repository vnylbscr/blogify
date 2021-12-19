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
   Link,
   makeStyles,
   Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import clsx from 'clsx';
import moment from 'moment';
import React from 'react';
import { useHistory } from 'react-router';
import { MyTheme } from '../../styles/config';
interface IProps {
   // item: GetAllPosts_getAllPosts;
   item: any;
   onClickMoreButton?: () => void;
   onClickLikeButton?: () => void;
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
      paddingTop: '36.25%', // 16:9
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

const Index: React.FC<IProps> = ({ item, onClickLikeButton, onClickMoreButton }) => {
   const history = useHistory();
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
                  <IconButton data-testid='more-vert-button' onClick={onClickMoreButton} aria-label='settings'>
                     <MoreVertIcon />
                  </IconButton>
               }
               title={item?.user?.username}
               subheader={moment(item.createdAt).fromNow()}
            />
            <CardMedia className={classes.media} image={item?.image || undefined} />
            <CardContent className={classes.subtitleContainer}>
               <Typography variant='body2' style={{ width: '100%' }} color='textSecondary' component='p'>
                  {item.subtitle}
               </Typography>
            </CardContent>
            <CardActions disableSpacing>
               <IconButton data-testid='favorites-button' onClick={onClickLikeButton} aria-label='add to favorites'>
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
                  <Typography paragraph>{item?.content?.substring(0, 50)}</Typography>
                  <Link color='secondary' onClick={() => history.push(`/post/${item?._id}`)}>
                     see more
                  </Link>
               </CardContent>
            </Collapse>
         </Card>
      </Grid>
   );
};

export default Index;
