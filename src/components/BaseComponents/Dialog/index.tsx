import React from 'react';
import { FC } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/styles';
import useResponsiveScreenVariables from '../../../hooks/useResponsiveScreenVariables';

interface IModalProps {
   open: boolean;
   onClose?: () => void;
   style?: React.CSSProperties;
   dialogTitle?: string;
   dialogContentTitle?: string;
   className?: string;
   fullWidth?: boolean;
   width?: number;
   height?: number;
   fullScreen?: boolean;
}

const useStyles = makeStyles((theme: any) => ({
   root: {
      padding: 20,
      backgroundColor: 'transparent',
   },
   paper: {
      width: (props: IModalProps) => props.width || undefined,
      height: (props: IModalProps) => props.height || undefined,
      // background: theme.colorPalette.primary.main,
   },
}));
const Modal: FC<IModalProps> = (props) => {
   const { open, onClose, style, dialogTitle, className, fullWidth, fullScreen } = props;
   const { isSmallScreen } = useResponsiveScreenVariables();
   const classes = useStyles(props);
   return (
      <Dialog open={open} onClose={onClose} style={style} fullScreen={isSmallScreen}>
         <DialogTitle>{dialogTitle}</DialogTitle>
         <DialogContent>{props.children}</DialogContent>
      </Dialog>
   );
};

export default Modal;
