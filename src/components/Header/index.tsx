import { FC, Fragment, useState } from "react";
import {
  AppBar as MaterialAppBar,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import HeaderItem from "./Item";
import { useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import Modal from "../BaseComponents/Dialog";
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

// Types
interface AppBarProps {
  position?: string;
}
type ModalConfig = {
  mode: string;
  open: boolean;
};

// Return
const AppBar: FC<AppBarProps> = ({ position }) => {
  const classes = useStyles();
  const history = useHistory();
  const initialState = {
    mode: "",
    open: false,
  };
  const [modalConfig, setModalConfig] = useState<ModalConfig>(initialState);

  const handleClickItem = (url: string) => {
    history.push(url);
  };

  const openLoginDialog = () => {
    setModalConfig({
      mode: "LOGIN",
      open: true,
    });
  };
  const openRegisterDialog = () => {
    setModalConfig({
      mode: "REGISTER",
      open: true,
    });
  };

  const handleCloseDialog = () => {
    setModalConfig(initialState);
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
              <CreateIcon className={classes.icon} />
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
              onClick={openLoginDialog}
            >
              Login
            </Button>

            <Typography variant="subtitle2">or</Typography>
            <Button
              variant="outlined"
              color="default"
              style={{ fontSize: "1rem", color: "lightgrey", marginLeft: 5 }}
              onClick={openRegisterDialog}
            >
              Register
            </Button>
            <Modal
              open={modalConfig.open}
              onClose={handleCloseDialog}
              dialogTitle={
                modalConfig.mode === "LOGIN" ? "Giriş Yap" : "Üye OL"
              }
            >
              {modalConfig.mode === "LOGIN" ? (
                <Fragment>
                  <TextField variant="outlined" label="E-mail" fullWidth />
                  <TextField
                    variant="outlined"
                    label="Şifre"
                    type="password"
                    fullWidth
                  />

                  <Button variant="contained" color="secondary">
                    Giriş Yap
                  </Button>
                </Fragment>
              ) : (
                <Fragment>
                  <TextField
                    variant="outlined"
                    label="E-mail"
                    style={{ paddingLeft: 10, paddingRight: 20 }}
                    fullWidth
                  />
                  <TextField variant="outlined" label="İsim" fullWidth />
                  <TextField
                    variant="outlined"
                    label="Şifre"
                    type="password"
                    fullWidth
                  />
                  <Button variant="contained">Üye OL</Button>
                </Fragment>
              )}
            </Modal>
          </Grid>
        </Grid>
      </Toolbar>
    </MaterialAppBar>
  );
};

export default AppBar;
