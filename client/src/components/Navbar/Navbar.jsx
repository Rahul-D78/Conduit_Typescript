import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'

import {NotificationsActive } from '@material-ui/icons';

// import logo from '../../assets'

import useStyle from './styles'

const Navbar = () => {

    const classes = useStyle();

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src='#' alt="text"  height="25px" className={classes.image} />
                        logo name
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button} >
                        <IconButton aria-label="show products"> 
                            <Badge badgeContent={2} color="secondary">
                                <NotificationsActive/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
