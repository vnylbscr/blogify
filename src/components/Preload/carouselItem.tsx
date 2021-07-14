import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { FC, Fragment, useState } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles<Theme, ICarouselItemProps>((theme: any) => ({
  root: {
    // width: (props) => props.width || 200,
    // height: (props) => props.height || 200,
    // maxWidth: 700,
    // height: "100%",
    borderRadius: 20,
    [theme.breakpoints.down("sm")]: {
      width: 600,
      height: 400,
    },
  },
  card: {
    backgroundColor: theme.colorPalette.primary.light,
  },
  image: {
    // filter: "blur(1px)",
    opacity: 0.8,
    transition: "all .5s",
    width: 650,
    height: 400,
    alignContent: "center",
    borderRadius: 6,
    "&:hover": {
      filter: "blur(0px)",
      cursor: "pointer",
      opacity: 1,
    },
    backgroundSize: "cover",
    [theme.breakpoints.down("sm")]: {
      width: 400,
      height: 300,
    },
  },
}));

interface ICarouselItemProps {
  title: string;
  description: string;
  imageUrl: string;
}
const CarouselItem: FC<ICarouselItemProps> = (props) => {
  const classes = useStyles(props);
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { title, description, imageUrl, ...rest } = props;
  const handleClickInformation = () => {
    history.push("/about");
  };
  const handleClickContact = () => {
    history.push("/contact");
  };
  const handleClickAbout = () => {
    history.push("/about");
  };
  return (
    <Paper elevation={12} className={classes.root}>
      <Grid container justifyContent="center" alignItems="center">
        <Card className={classes.card}>
          <CardHeader
            action={
              <Fragment>
                <IconButton
                  onClick={(e) => {
                    setAnchorEl(e.currentTarget);
                  }}
                >
                  <MoreVert fontSize="large" />
                </IconButton>
                <Menu
                  open={Boolean(anchorEl)}
                  anchorEl={anchorEl}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={handleClickInformation}>
                    Daha fazla bilgi al
                  </MenuItem>
                  <MenuItem onClick={handleClickContact}>
                    İletişime geç
                  </MenuItem>
                  <MenuItem onClick={handleClickAbout}>Hakkımızda</MenuItem>
                </Menu>
              </Fragment>
            }
            avatar={
              <Avatar aria-label="recipe" style={{ backgroundColor: "tomato" }}>
                MG
              </Avatar>
            }
            hidden={true}
            title="Blogify"
            subheader={title}
          />
          <Grid container xs={8} md={12} justify="center">
            <CardMedia
              image={imageUrl}
              title="Resim"
              className={classes.image}
            />
          </Grid>
          <CardContent>
            <Grid xs={6} sm={12} container direction="column">
              <Typography variant="h6" color="textPrimary">
                {description}
              </Typography>
              <Link onClick={() => console.log("cukura")}>Hesap Oluştur</Link>
            </Grid>
          </CardContent>*
        </Card>
      </Grid>
    </Paper>
  );
};

export default CarouselItem;
