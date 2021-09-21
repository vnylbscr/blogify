import { useMediaQuery, useTheme } from '@material-ui/core';

const useResponsiveScreenVariables = () => {
   const theme = useTheme();
   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
   const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
   const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'));

   return {
      isSmallScreen,
      isMediumScreen,
      isLargeScreen,
   };
};

export default useResponsiveScreenVariables;
