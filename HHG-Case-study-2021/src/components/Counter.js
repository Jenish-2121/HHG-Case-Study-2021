import React, { useState } from 'react';
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
        margin: "5rem",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    buttons: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}));

export default function Counter() {
    const classes = useStyles();

    const [Counter, setCounter] = useState(0)

    return (
        <div className={classes.root}>
            <h1>
                {Counter}
            </h1>
            <div className={classes.buttons}>
                <Button type="button" color="primary" className="form__custom-button" onClick={() => setCounter(Counter - 1)}>
                    Decrement
            </Button>
                <Button type="button" color="primary" className="form__custom-button" onClick={() => setCounter(0)}>
                    Reset
            </Button>
                <Button type="button" color="primary" className="form__custom-button" onClick={() => setCounter(Counter + 1)}>
                    Increment
            </Button>
            </div>
        </div>
    );
}
