import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        // marginTop: "60px",
        position: "relative",
        width: "745px",
    },
    row: {
      display: "flex"
    },
    center: {
    //   paddingTop: "60px",
      margin: "20px auto 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
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
    overly: {
      position: "absolute",
      top: "20px",
      left: "20px",
      color: "black",
      fontWeight: "bold"
    }
  }));