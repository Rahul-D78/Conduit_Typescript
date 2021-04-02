import React, { useState } from "react";
import { makeStyles, TextField, Typography, Button } from "@material-ui/core";
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
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center"
  },
  buttonSubmit: {
    marginBottom: "5px auto 5px"
  }
}));
const Login = () => {
  const classes = useStyle();
  const [name, setName] = useState("");

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className={`${classes.center} ${classes.root}`}>
      <paper>
        <form autoComplete="off" noValidate className={classes.form}>
          <Typography variant="h5"> Welcome back {name} </Typography>
          <TextField
            name="email"
            type="email"
            label="Email"
            onChange={handleOnChange}
            placeholder="Enter your email"
            variant="outlined"
            value={name}
          />
          <TextField
            name="password"
            label="Password"
            placeholder="Enter your password"
            variant="outlined"
          />
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <Button fullWidth variant="contained">
              Don't have an account{" "}
            </Button>
          </Link>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: "5px auto 5px" }}
          >
            Login
          </Button>
        </form>
      </paper>
    </div>
  );
};

export default Login;
