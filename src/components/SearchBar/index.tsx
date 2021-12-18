import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { InputBaseProps } from '@material-ui/core';
import { MyTheme } from '../../styles/config';
import { VariantSize } from '../../types/utils';

interface Props extends InputBaseProps {
   size?: Exclude<VariantSize, 'huge' | 'large'>;
}

const useStyles = makeStyles<MyTheme, Props>((theme) => ({
   search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.25),
      '&:hover': {
         backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         marginLeft: theme.spacing(1),
         width: 'auto',
      },
   },
   searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   inputRoot: {
      color: 'inherit',
      height: (props) => (props.size === 'small' ? 45 : 58),
   },
   inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
         width: '24ch',
         '&:focus': {
            width: '30ch',
         },
      },
   },
}));

const SearchBar = (props: Props) => {
   const { size, ...rest } = props;
   const classes = useStyles(props);
   return (
      <div className={classes.search}>
         <div className={classes.searchIcon}>
            <SearchIcon />
         </div>
         <InputBase
            placeholder='search...'
            classes={{
               root: classes.inputRoot,
               input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search ' }}
            {...rest}
         />
      </div>
   );
};

export default SearchBar;
