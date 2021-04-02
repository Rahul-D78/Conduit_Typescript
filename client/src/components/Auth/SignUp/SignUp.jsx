import React from "react";
import { makeStyles, TextField, Button, Typography } from "@material-ui/core";
import FileBase from "react-file-base64";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginBottom: theme.spacing(1)
    }
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center"
  }
}));

const SignUp = () => {
  const classes = useStyle();
  return (
    <div className={`${classes.center} ${classes.root}`}>
      <form autoComplete="off" noValidate className={classes.form}>
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Create Your New account
        </Typography>
        <TextField
          name="Name"
          label="Name"
          type="Text"
          placeholder="Enter Your Name"
          variant="outlined"
        />

        <TextField
          name="Email"
          label="Email"
          type="Email"
          placeholder="Enter your Email"
          variant="outlined"
        />

        <TextField
          name="password"
          label="password"
          type="password"
          placeholder="Enter your password"
          variant="outlined"
        />

        <div style={{ color: "blue" }}>
          {" "}
          <FileBase type="file" multipl={false} />{" "}
        </div>

        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            fullWidth
            style={{ margin: "5px auto 5px" }}
          >
            have an account{" "}
          </Button>
        </Link>

        <Button variant="contained" fullWidth type="submit" color="primary">
          submit
        </Button>
      </form>
    </div>
  );
};
export default SignUp;
