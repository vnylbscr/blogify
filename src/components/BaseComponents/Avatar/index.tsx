import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Avatar } from 'material-ui';
import { MyTheme } from '../../../styles/config';
import { ColorsKey, VariantSize } from '../../../types/utils';

interface IProps {
   size?: number | VariantSize | undefined;
   color?: ColorsKey | undefined;
}
const useStyles = makeStyles<MyTheme, IProps>((theme: MyTheme) => ({
   root: {
      width: (props) => {
         if (props.size === 'small') {
            return 47;
         } else if (props.size === 'medium') {
            return 72;
         }
      },
   },
}));
const CustomAvatar: FC<IProps> = (props) => {
   const classes = useStyles(props);
   const { size, color = 'pink' } = props;
   return <Avatar className={classes.root}></Avatar>;
};

export default CustomAvatar;
