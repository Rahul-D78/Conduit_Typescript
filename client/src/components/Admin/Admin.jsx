import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import { useHistory } from "react-router-dom";

// import "./admin.css";

const d = new Date();
const date = d.toLocaleTimeString();
// const drawerWidth = 0

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    maxWidth: 745,
    border: "2px solid #1c2c2f"
  },
  row: {
    display: "flex"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100"
  },
  right: {
    position: "absolute",
    right: 0
  },
  image: {
    height: 40
  },
  media: {
    height: 140
  },

  container: {
    display: "flex",
    marginTop: "60px",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth
      // backgroundColor: "#1c1c1c"
      flexDirection: "column"
    }
  },
  divA: {
    background: "#121212",
    marginRight: "10px",
    height: "100vh",
    flex: 0.5
  },
  divB: {
    // justifyContent: "center",
    background: "#121212",

    // alignContent: "center",
    flex: 2,
    marginRight: "10px"
  },
  divC: {
    backgroundColor: "#121212",
    flex: 1,
    height: "100px"
  },
  insideA: {
    backgroundColor: "#2eff7b"
  },
  white: {
    color: "#ffffff"
  },
  dark: {
    backgroundColor: "#121212"
  },
  greenButton: {
    color: "#ffffff",
    backgroundColor: "#2eff7b"
  }
}));

const Admin = () => {
  // const history = useHistory();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* ........... Div A container  start ............*/}

      <div className={classes.divA}>
        <div className={classes.dark}>
          <Button fullWidth variant="h6" style={{ color: "#2eff7b" }}>
            Posts
          </Button>
          <Button fullWidth variant="h6" style={{ color: "#2eff7b" }}>
            Tags
          </Button>
          <Button fullWidth variant="h6" style={{ color: "#2eff7b" }}>
            Favorites
          </Button>
          <Button fullWidth variant="h6" style={{ color: "#2eff7b" }}>
            Followers
          </Button>
        </div>
      </div>

      {/* ........... Div A container  end ............*/}

      {/* ........... Div B container  start ............*/}

      <div className={classes.divB}>
        <div>
          <Typography
            variant="h5"
            className={classes.white}
            style={{ textAlign: "center" }}
          >
            Your posts
          </Typography>
        </div>
        <div className={classes.center}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://intland.com/wp-content/uploads/2019/07/devops-infinity-1-1.png"
                title="Contemplative Reptile"
              />
              <CardContent className={classes.dark}>
                <div className={classes.row}>
                  <Avatar size="small" />
                  <Typography
                    style={{
                      marginLeft: "5px",
                      marginTop: "3px",
                      color: "#ffff"
                    }}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    DevOps
                  </Typography>
                </div>
                <Typography variant="body2" className={classes.white}>
                  {" "}
                  {date} (3 days ago){" "}
                </Typography>
                <Typography
                  variant="body2"
                  style={{ color: "#2eff7b" }}
                  component="body1"
                >
                  DevOps is a Software Development Methedology to automate the
                  software delivery lifecycle and indeed helps in faster
                  deliverry{" "}
                  <Button
                    style={{ padding: 0 }}
                    color="primary"
                    // onClick={navigateMe}
                  >
                    Read More ...
                  </Button>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.dark}>
              <Button size="small" color="primary">
                <FavoriteIcon />
              </Button>
              <div className={classes.right}>
                <Button size="small" color="primary">
                  <DeleteIcon style={{ textAlign: "right" }} />
                </Button>
              </div>
            </CardActions>
          </Card>
        </div>
      </div>

      {/* ........... Div B container  start ............*/}

      {/* ........... Div C container  start ............*/}

      <div className={classes.divC}>
        <Button variant="h6" className={classes.greenButton} fullWidth>
          Achievements
        </Button>
      </div>
    </div>
  );
};

export default Admin;
