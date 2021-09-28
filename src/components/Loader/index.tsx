import React from 'react';
import './index.scss';
interface Props {}

const Loader = (props: Props) => {
   return (
      <div className='box'>
         <div className='container'>
            <span className='circle' />
            <span className='circle' />
            <span className='circle' />
            <span className='circle' />
         </div>
      </div>
   );
};

export default Loader;
