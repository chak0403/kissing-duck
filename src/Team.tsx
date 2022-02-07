import './Team.css';
import * as React from 'react';
import {AppBar, Box, Button, Grid, Toolbar, Typography} from '@mui/material';
import DuckIcon from "./assets/duck-icon.png";

function Team() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container
                  spacing={2}
                  className="teamContainer">
                <Grid item xs={4} className="teamIconContainer">
                    <img src={DuckIcon} alt={"DuckIcon"}  className="duckIcon"/>
                </Grid>
                <Grid item xs={4} className="teamIconContainer">
                    <img src={DuckIcon} alt={"DuckIcon"}  className="duckIcon"/>
                </Grid>
                <Grid item xs={4} className="teamIconContainer">
                    <img src={DuckIcon} alt={"DuckIcon"}  className="duckIcon"/>
                </Grid>
            </Grid>
            <Grid container
                  spacing={2}
                  className="teamContainer">
                <Grid item xs={4} className="teamInfoContainer">
                    <h1>Fuck Boy</h1>
                    <h2>CTO & Co-Founder</h2>
                </Grid>
                <Grid item xs={4} className="teamInfoContainer">
                    <h1>Ass Hole</h1>
                    <h2>CEO & Co-Founder</h2>
                </Grid>
                <Grid item xs={4} className="teamInfoContainer">
                    <h1>Bull Shit</h1>
                    <h2>CTO & Co-Founder</h2>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Team;
