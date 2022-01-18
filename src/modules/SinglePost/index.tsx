import { useQuery } from '@apollo/client';
import { Container, Grid, makeStyles, Divider } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React from 'react';
import ReactMarkDown from 'react-markdown';
import { useParams } from 'react-router';
import remarkGfm from 'remark-gfm';
import Loader from '../../components/Loader';
import { GET_SINGLE_POST } from '../../queries/getSinglePost';
import MyTypography from '../../components/Typography/index';

interface Props {}

const useStyles = makeStyles((theme) => ({
   root: {
      // height: 'calc(100vh - 60px)',
   },
   image: {
      width: '100%',
      height: 'auto',
      maxWidth: '40%',
      maxHeight: '40%',
      opacity: 0.8,
   },
   markDownContainer: {},
   markDown: {
      whiteSpace: 'pre-wrap',
      padding: theme.spacing(3),
      width: '100%',
      fontSize: 24,
   },
}));

const PostContent = (props: Props) => {
   const { _id }: any = useParams();
   const { enqueueSnackbar } = useSnackbar();

   const { data, loading, error } = useQuery(GET_SINGLE_POST, {
      variables: {
         _id,
      },
      onError: (error) => {
         enqueueSnackbar(error.message, {
            variant: 'error',
            autoHideDuration: 2000,
         });
      },
   });

   React.useEffect(() => {
      if (data?.getPost) {
         document.title = data.getPost.title;
      }
   }, [data?.getPost]);

   const classes = useStyles(data?.getPost);

   if (loading) {
      return <Loader />;
   }

   if (error) {
      return <div>{error.message}</div>;
   }

   return (
      <Grid container xs={12} justifyContent='center' alignItems='center' className={classes.root}>
         <Container maxWidth={'md'}>
            <Grid container justifyContent={'center'} alignItems='center'>
               <img src={data?.getPost?.image} className={classes.image} alt={'merto'} />
               <Divider style={{ width: '100%', marginTop: 24 }} />
            </Grid>
            <Grid container className={classes.markDownContainer} justifyContent='center' xs={12}>
               <MyTypography align={'center'} variant='h2'>
                  {data?.getPost?.title}
               </MyTypography>

               <ReactMarkDown
                  className={classes.markDown}
                  children={markdown}
                  remarkPlugins={remarkGfm as any}
                  components={{
                     img: (props) => <img {...props} alt={props['aria-label']} className={classes.image} />,
                  }}
               />
            </Grid>
         </Container>
      </Grid>
   );
};

const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| a | b |
| - | - |
`;

export default PostContent;
