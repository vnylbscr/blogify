import React, { FC, Fragment } from 'react';
import { makeStyles, styled } from '@material-ui/styles';
import { Avatar, Badge } from '@material-ui/core';
import { MyTheme } from '../../../styles/config';
import { ColorsKey, VariantSize } from '../../../types/utils';
import { blue, orange, pink, purple, red } from '@material-ui/core/colors';

export interface CustomAvatarProps {
   size?: Exclude<VariantSize, 'large' | 'big'>;
   color?: ColorsKey;
   showBadge?: boolean;
}

const getColorFromKey = (color?: ColorsKey) => {
   switch (color) {
      case 'blue':
         return blue['500'];
      case 'orange':
         return orange[500];
      case 'purple':
         return purple[500];
      case 'red':
         return red[500];
      case 'pink':
         return pink[500];
      default:
         return purple[500];
   }
};

const useStyles = makeStyles<MyTheme, CustomAvatarProps>((theme: MyTheme) => ({
   root: {
      width: (props) => (props.size === 'small' ? 40 : 65),
      height: (props) => (props.size === 'small' ? 40 : 65),
      backgroundColor: (props) => getColorFromKey(props.color),
   },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
   '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: '0 0 0 2px #fff',
      '&::after': {
         position: 'absolute',
         top: 0,
         left: 0,
         width: '100%',
         height: '100%',
         borderRadius: '50%',
         border: '1px solid currentColor',
         content: '""',
      },
   },
}));

const CustomAvatar: FC<CustomAvatarProps> = (props) => {
   const classes = useStyles(props);
   const { children, showBadge } = props;
   return (
      <Fragment>
         {showBadge ? (
            <StyledBadge overlap='circular' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant='dot'>
               <Avatar className={classes.root}>{children}</Avatar>
            </StyledBadge>
         ) : (
            <Avatar className={classes.root}>{children}</Avatar>
         )}
      </Fragment>
   );
};

export default CustomAvatar;
