import { useEffect, useState } from 'react';
import { Size } from '../types/utils';

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
   }, []);

   return {
      ...size,
   };
};
