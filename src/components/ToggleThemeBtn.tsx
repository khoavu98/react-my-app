import { Fab } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import { ThemeContext } from "../contexts/ThemeContext";

const useStyles = makeStyles({
    floatBtn: {
        position: 'fixed',
        right: '3rem',
        bottom: '3rem'
    },
});

const ToggleThemeBtn = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const classes = useStyles();
    return (
        <Fab color= 'secondary' variant="extended" className={classes.floatBtn} onClick= {toggleTheme.bind(this, theme === 'primary' ? 'secondary' : 'primary')}>
            Toggle Theme
        </Fab>
    )
}
export default ToggleThemeBtn;