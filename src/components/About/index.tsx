import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
const useStyles = makeStyles((theme: any) => ({
  root: {
    background: `url("https://teknoguru.net/wp-content/uploads/2020/02/blog3-1360x765.jpg")`,
    opacity: 0.9,
    width: "auto",
    height: 800,
    backgroundSize: "cover",
  },
  section: {
    width: "80%",
    height: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      justifyContent="center"
      alignItems="center"
    >
      <div className={classes.section}>
        <Typography variant="h2" align="center">
          Blogify içerik paylaşma ve uygulama platformudur
        </Typography>
      </div>
    </Grid>
  );
};

export default About;
