import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';

interface Props {}

const FooterText = (props: Props) => {
   return (
      <Grid container justifyContent='center' direction='column' spacing={8} alignItems='center'>
         <Typography color='primary' variant='caption'>
            2021 (c) Blogify
         </Typography>
         <Typography color='primary' variant='caption'>
            Made by{' '}
            <Link href='https://twitter.com/accurcy' target='_blank' rel='noopener noreferrer'>
               Mert
            </Link>
         </Typography>
      </Grid>
   );
};

export default FooterText;
