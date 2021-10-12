import { withStyles, MenuItem } from '@material-ui/core';

const StyledMenuItem = withStyles((theme) => ({
   root: {
      '&$selected': {
         transition: theme.transitions.create('backgroundColor'),
         backgroundColor: '#A2D2FF',
         color: 'white',
         '& .MuiListItemIcon-root': {
            color: 'white',
         },
      },
      '&$selected:hover': {
         transition: theme.transitions.create('backgroundColor'),
         backgroundColor: '#889EAF',
         color: '#506D84',
         '& .MuiListItemIcon-root': {
            color: 'white',
         },
      },
      '&:hover': {
         transition: theme.transitions.create('backgroundColor'),
         backgroundColor: '#5C7AEA',
         color: 'white',
         '& .MuiListItemIcon-root': {
            color: 'white',
         },
      },
   },
}))(MenuItem);

export default StyledMenuItem;
