import { FC } from "react";
import {
  AppBar as MaterialAppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Theme,
  Grid,
  Button,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import HeaderItem from "./Item";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
const useStyles = makeStyles((theme?: any) => ({
  root: {
    fontSize: "1.2rem",
    flexGrow: 1,
    height: 60,
    // color: "#C6B4CE",
    background: theme.colorPalette.primary.main,
  },
  title: {
    flexGrow: 3,
    fontWeight: "bold",
  },
  rightPanelContainer: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  icon: {
    fontSize: "1.5rem",
    color: "#C6B4CE",
  },
  headerTitle: {},
  subtitle: {},
  titleContainer: {
    transition: "all .7s",
    "&:hover": {
      color: theme.colorPalette.secondary,
      transform: "scale(1.04)",
      cursor: "pointer",
    },
  },
}));

interface AppBarProps {
  position?: string;
}

const APP_BAR_ITEMS = [
  {
    title: "Home",
    url: "/",
    icon: <HomeIcon />,
  },
  {
    title: "About",
    url: "/about",
    icon: <InfoIcon />,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: <ContactSupportIcon />,
  },
  {
    title: "Contributors",
    url: "/contributors",
    icon: <AllInclusiveIcon />,
  },
];

const AppBar: FC<AppBarProps> = ({ position }) => {
  const classes = useStyles();
  const history = useHistory();
  const handleClickItem = (url: string) => {
    history.push(url);
  };
  return (
    <MaterialAppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid
          container
          xs={12}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            direction="row"
            alignItems="center"
            container
            item
            className={classes.title}
            xs={3}
          >
            <IconButton>
              <CreateIcon className={classes.icon}></CreateIcon>
            </IconButton>
            <Grid item direction="column" className={classes.titleContainer}>
              <Typography variant="h6" className={classes.headerTitle}>
                Blogify
              </Typography>
              <Typography variant="subtitle2" className={classes.subtitle}>
                Blog yaz ve paylaş
              </Typography>
            </Grid>
          </Grid>
          <Grid
            direction="row"
            alignItems="center"
            container
            justifyContent="center"
            item
            className={classes.title}
            xs={6}
          >
            {APP_BAR_ITEMS.map((item) => (
              <HeaderItem
                title={item.title}
                onClick={() => handleClickItem(item.url)}
                style={{ marginRight: 15 }}
                icon={item.icon}
                disableRipple
              />
            ))}
          </Grid>
          <Grid
            direction="row"
            alignItems="center"
            container
            className={classes.rightPanelContainer}
            justifyContent="flex-end"
            xs={3}
          >
            <Button
              variant="outlined"
              color="default"
              style={{ fontSize: "1rem", color: "lightgrey", marginRight: 5 }}
            >
              Login
            </Button>
            <Typography variant="subtitle2">or</Typography>
            <Button
              variant="outlined"
              color="default"
              style={{ fontSize: "1rem", color: "lightgrey", marginLeft: 5 }}
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default AppBar;
