import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import backgroundImage from "../../assets/images/bg.jpg";
import Carousel from "react-material-ui-carousel";
import CarouselItem from "./carouselItem";
import { useQuery } from "@apollo/client";
import { DENEME } from "../queries/authorize";

const useStyles = makeStyles((theme: any) => ({
  root: {
    padding: theme.spacing(2),
    position: "absolute",
    // flexGrow: 1,
    width: "100%",
    backgroundImage: `url("https://images5.alphacoders.com/394/thumb-1920-394862.jpg")`,
    backgroundSize: "cover",
    height: "calc(100% - 60px)",
    // filter: "blur(1px)",
  },
  leftSpace: {
    // height: 600,
  },
  rightSpace: {
    // height: 600,
  },
  iconTitle: {
    width: "100%",
    fontSize: "4rem",
    textAlign: "center",
    color: "rebeccapurple",
  },
  section: {
    fontSize: "1.5rem",
  },
  caraousel: {
    maxWidth: 1100,
    maxHeight: 1100,
    [theme.breakpoints.down("sm")]: {
      width: 400,
      height: 500,
    },
  },
}));

const CARAOUSEL_ITEMS = [
  {
    title: "Blogify ile post paylaşmak çok kolay!",
    description:
      "Blogify ile post paylaşmak çok kolaydır. Hemen üye ol ve paylaşmaya başla! Ya da yeni bir hesap oluştur!",
    imageUrl: "https://www.rgsyazilim.com/wp-content/uploads/2020/06/blog.png",
  },
  {
    title: "Blogify ile post paylaşmak çok hızlıdır!",
    description:
      "Blogify ile post paylaşmak çok hızlıdır. Hemen üye ol ve paylaşmaya başla! Ya da yeni bir hesap oluştur!",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/05/30/03/58/blog-2355684_960_720.jpg",
  },
  {
    title: "Blogify ile post paylaşmak çok ulaşılabilirdir!",
    description:
      "Blogify ile post paylaşmak çok kolaydır. Hemen üye ol ve paylaşmaya başla! Ya da yeni bir hesap oluştur!",
    imageUrl: "https://sinanhan.com/wp-content/uploads/2019/01/blog-gorsel.jpg",
  },
];
const Content = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(DENEME);

  console.log("datalar", data);
  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <main className={classes.root}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Carousel
          animation="slide"
          timeout={500}
          autoPlay
          className={classes.caraousel}
          navButtonsWrapperProps={{
            style: {
              display: "none",
            },
          }}
        >
          {CARAOUSEL_ITEMS.map((item) => (
            <CarouselItem
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              key={item.title}
            />
          ))}
        </Carousel>

        {/* <Grid
          direction="row"
          container
          xs={12}
          justify="center"
          alignItems="center"
        >
          <Grid container item xs={6} className={classes.leftSpace}>
            <h1>Blogify</h1>
          </Grid>
          <Grid
            container
            item
            xs={6}
            direction="column"
            className={classes.rightSpace}
            alignItems="center"
            justifyContent="center"
          >
            <div className="preload-title">Blogify</div>
            <div className={classes.section}>
              <span style={{ color: "rebeccapurple" }}>Blogify</span> blog
              oluşturmana ve arkadaşlarınla paylaşmanı sağlar.
            </div>
          </Grid>
        </Grid> */}
      </Grid>
    </main>
  );
};

export default Content;
