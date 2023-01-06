import { AppBar, Button, Chip, createStyles, FormControl, MenuItem, Select, Theme, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from 'react';
import WelcomeMessage from "./WelcomeMessage";
import { makeStyles } from '@mui/styles';
import { ProgressContext } from "../contexts/ProgressContext";
import { ThemeContext } from "../contexts/ThemeContext";


const useStyles = makeStyles((theme: Theme) => ({
    positionSelect: {
        color: 'white',
        borderBottom: '1px solid white'

    },
}));

const Navbar = () => {
    const classes = useStyles();
    const [position, setPosition] = useState('FullStackDevloper');
    const [time, setTime] = useState<Date>(() => new Date(Date.now()));
    const {lastTime, status} = useContext(ProgressContext);
    const {theme} = useContext(ThemeContext)
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date(Date.now())), 1000)
        return () => clearInterval(timer);
    }, []);
    const onPositionChange = (e: any) => {
        setPosition(e.target.value)
    };
    return (
        <AppBar position="static" color={theme}>
            <Toolbar>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width={1}
                    py={1}>
                    <Typography variant="h6">My Movie</Typography>
                    <Box textAlign={'center'}>
                        <WelcomeMessage position={position} country={'Viet Nam'} />
                        <Chip label= {`Last time working on this project:` + lastTime +`- status: ` + status}
                        />

                        <Box mt={1}>
                            <FormControl>
                                <Select value={position} onChange={onPositionChange} className={classes.positionSelect}>
                                    <MenuItem value='FullStackDevloper'> FullStackDevloper </MenuItem>
                                    <MenuItem value='BackEndDeveloper'> BackEndDeveloper </MenuItem>
                                    <MenuItem value='FrontEndDeveloper'> FrontEndDeveloper </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <Box textAlign='center'>
                        <Box my={1}>
                            <Typography variant="h6">
                                {time.toString()}
                            </Typography>
                        </Box>
                    <Button variant="contained">
                        Login
                    </Button>
                    </Box>
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar