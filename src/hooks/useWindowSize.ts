import React, { useEffect, useState } from 'react';

type Size = {
   width: number;
   height: number;
};
export const useWindowSize = () => {
   const [width, setWidth] = useState<number>();
   const [height, setHeight] = useState<number>();

   const resizeWidth = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
   };
   useEffect(() => {
      document.addEventListener('resize', resizeWidth);
      return () => document.removeEventListener('resize', resizeWidth);
   }, [window.innerWidth, window.innerHeight]);

   return { width, height };
};
