import React, { useEffect, useState } from 'react';
import { Size } from '../types/helperTypes';

export const useWindowSize = () => {
   const [size, setSize] = useState<Size>();

   const resizeWidth = () => {
      setSize({
         width: window.innerWidth,
         height: window.innerHeight,
      });
   };
   useEffect(() => {
      document.addEventListener('resize', resizeWidth);
      return () => document.removeEventListener('resize', resizeWidth);
   }, [window.innerWidth, window.innerHeight]);

   return {
      ...size,
   };
};
