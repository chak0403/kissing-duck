import './Navigation.css';
import * as React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';

function Navigation() {
    return (
        <div className="navigation">
            <AppBar position="static">
                <Toolbar>
                    <Typography className="title">Kissing Duck</Typography>
                    <div className="menu">
                        <Button color="inherit" className="navigate">Roadmap</Button>
                        <Button color="inherit" className="navigate">FAQ</Button>
                        <Button color="inherit" className="navigate">Team</Button>
                        <Button color="inherit" className="navigate">Twitter</Button>
                        <Button color="inherit" className="navigate">Instagram</Button>
                        <Button color="inherit" className="navigate">Discord</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navigation;
