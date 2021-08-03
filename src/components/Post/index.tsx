import { Grid, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { GetAllPosts_getAllPosts } from '../../queries/__generated__/GetAllPosts';
import { GetMe_getMeWithToken } from '../../queries/__generated__/GetMe';

interface IProps {
   item: GetAllPosts_getAllPosts;
}

const Index = (props: IProps) => {
   const { item } = props;

   return (
      <Grid xs={12}>
         <Typography variant='h6'>{item.title}</Typography>
         <Typography variant='subtitle1'>{item.subtitle}</Typography>
      </Grid>
   );
};

export default Index;
