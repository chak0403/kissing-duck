import './Roadmap.css';
import * as React from 'react';
import {Box, Button, CardActions, CardContent, Container, Grid, Paper, Typography} from "@mui/material";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
function Roadmap() {


    return (
        <div className="roadmapContainer">
            <h1>Roadmap</h1>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >

                <Box className="content contentLeft">
                    <h2>Stage 1:</h2>
                    <p>
                        Pre-Sale: 2255 pieces for PFP Project will be sold at a price point of .07 ETH! (Max mint =
                        5)
                    </p>
                </Box>
                {/*<ArrowDownwardIcon className="arrowDown arrowDownLeft"/>*/}
                <Box className="content contentRight">
                    <h2>Stage 2:</h2>
                    <p>Public Mint: Remainder of PFP pieces (3750 remaining pieces) will be sold to the public at .085 ETH! (Max mint = 5) The Art Drop will also go live -- finalized pricing for Art Drop to be released at later date.</p>
                </Box>
                {/*<ArrowDownwardIcon className="arrowDown arrowDownRight"/>*/}
                <Box className="content contentLeft">
                    <h2>Stage 3:</h2>
                    <p>We will be making a Metaverse purchase. (Likely in Decentraland) where we will be building a basketball court for our community.</p>
                </Box>
                {/*<ArrowDownwardIcon className="arrowDown arrowDownLeft"/>*/}
                <Box className="content contentRight">
                    <h2>Stage 4:</h2>
                    <p>We're giving away somewhere between 4-8 All-Star Game Tickets to special HODLers</p>
                </Box>
            </Box>
            <div className="space"></div>
        </div>
    );
}

export default Roadmap;
