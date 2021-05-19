import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {
    Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: "white",
        textDecoration: "none"
    },
    navbarButton: {
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        color: "white !important",
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className="d-flex justify-content-between">
                    <div className={classes.navbarButton}>
                        <Link to="/">
                            <Typography variant="h6" className={classes.title}>
                                Counter
                        </Typography>
                        </Link>
                    </div>
                    <div className={classes.navbarButton}>
                        <Link to="/users">
                            <Typography variant="h6" className={classes.title}>
                                Users Management
                        </Typography>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
