import React from 'react';
import { Backdrop, Grid, CircularProgress } from '@material-ui/core';
import './index.scss';
interface Props {}

const Loader = (props: Props) => {
   return (
      <Grid container alignItems='center' className='root_loading' justifyContent='center'>
         <Backdrop open>
            <div className='box'>
               <div className='container'>
                  <span className='circle' />
                  <span className='circle' />
                  <span className='circle' />
                  <span className='circle' />
               </div>
            </div>
         </Backdrop>
      </Grid>
   );
};

export default Loader;
