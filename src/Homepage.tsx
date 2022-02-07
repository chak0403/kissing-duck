import React from 'react';
import './Homepage.css';
import Info from './Info';
import Roadmap from './Roadmap';
import Navigation from './Navigation';
import FAQ from './FAQ';
import {Grid} from "@mui/material";
import Team from "./Team";

function Homepage() {
  return (
      <Grid container className="homepage">
          <Info/>
          <Roadmap/>
          <Navigation/>
          <FAQ/>
          <Team/>
      </Grid>
  );
}

export default Homepage;
