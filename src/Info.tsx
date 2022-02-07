import './Info.css';
import * as React from 'react';
import {Box, Grid, Paper, styled} from "@mui/material";
import DuckIcon from "./assets/duck-icon.png"

function Info() {


  return (
      <Box sx={{ flexGrow: 1 }}>
          <Grid container
                spacing={2}
                className="infoContainer">
              <Grid item xs={4}>
                  <img src={DuckIcon} alt={"DuckIcon"}  className="duckIcon"/>
              </Grid>
              <Grid item xs={8} className="info">
                  <Box className="content">
                      <h1>Kissing Duck</h1>
                      <h2>The Greatest Kissing Duck Project</h2>
                      <p>For centuries our tribe, composed of 3 clans, has been living in the Sif mountain. One day, while we were casually mining gold, our brother Eitri made a wrong move with his pickaxe. Suddenly, a warp hole appeared and we landed in the Blockchain… Digitized in NFTs. But our tribe got separated, and our clans were split into 3 different locations.
                          We then realized that an ancient prophecy that foretold the demise of the Old World and promised untold treasures even greater than gold… had just come true. The new wealth is no longer extracted from stone, but from the Blockchain. </p>
                  </Box>
              </Grid>
          </Grid>
      </Box>
  );
}

export default Info;
