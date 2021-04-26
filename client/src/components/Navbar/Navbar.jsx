import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import {useDispatch} from "react-redux";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import AppBar from "@material-ui/core/AppBar";
import {Home, Add, SettingsApplications, Dashboard} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import useStyle from "./styles";
// import SideBarData from "./SideBarData";

export default function Navbar() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyle();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  const Logout = () => {
    dispatch({type: 'LOGOUT'})
    
    history.push('/')
    setUser(null)
  }

  useEffect(() => {
    //check for the token
    // const token = user?.token;
    // const result = user?.result;
    // console.log(user.result.name);
    // console.log(result?.name.charAt(0));
    //JWT....... Token expiry validation 
    // if(token) {
    //     const decodedToken = decode(token);
    //     if(decodedToken.exp * 1000 < new Date().getTime()) Logout();
    // }
    setUser(JSON.parse(localStorage.getItem('profile')))
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [location])
  
  return (
    <div className={classes.nav}>
      <div className={classes.root}>
        <AppBar position="fixed" style={{ backgroundColor: "#1c1c1c" }}>
          <Toolbar>
            <div>
              <Link to="#">
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={showSideBar}
                >
                  <MenuIcon />
                </IconButton>
              </Link>
            </div>
            <nav className={sideBar ? classes.navMenu : classes.nMenuActive}>
              {sideBar ? (
                <ul onClick={showSideBar} style={{paddingLeft: "24px"}}>
                  <li className={classes.navbarToggle}>

                  <Link
                      style={{ color: "#ffff" }}
                      to="#"
                      className={classes.menuBar}
                    >
                      <CloseIcon />
                    </Link>
                  </li>
                  <li className={classes.navText}>
                  

                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "#ffff" }}
                    >
                      <Home style={{marginBottom: "-4px"}}/>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className={classes.navText}>
                    <Link
                      to="/article"
                      style={{ textDecoration: "none", color: "#ffff" }}
                    >
                      <Add style={{marginBottom: "-4px"}} />
                      <span>Write A Post</span>
                    </Link>
                  </li>
                  <li className={classes.navText}>
                    <Link
                      to="/admin"
                      style={{ textDecoration: "none", color: "#ffff" }}
                    >
                      <Dashboard style={{marginBottom: "-4px"}} />
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  
                  <li className={classes.navText}>
                    <Link
                      to="/settings"
                      style={{ textDecoration: "none", color: "#ffff" }}
                    >
                      <SettingsApplications  style={{marginBottom: "-4px"}}/>
                      <span>settings</span>
                    </Link>
                  </li>
                </ul>
              ) : null}
            </nav>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ textDecoration: "none", color: "#ffff" }}>
                LOGO
              </Link>
            </Typography>
            <div>
              {user ?(
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <div style={{display: "flex", flexDirection: "row"}}> 
                    <Avatar size="small"  alt={user?.result?.name || user?.username?.charAt(0)} src={user?.result?.imageUrl || user?.username?.charAt(0)}>{user?.result?.name?.charAt(0) || user?.profile?.username?.charAt(0)}</Avatar>

                    <div style={{margin:"2.5px 4px auto"}}>

                        {/* <Typography variant="h6">{user.name}</Typography> */}
                        </div> 
                        <Button variant="contained" size="small" color="secondary" onClick={Logout}>Logout</Button>
                    </div>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign IN</Button>
                )}
            </div>
            {/* <Link
              to="/login"
              style={{ textDecoration: "none", color: "#ffff" }}
            >
              <Button color="inherit">Login</Button>
            </Link> */}
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
