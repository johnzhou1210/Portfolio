import React from "react";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "./components/Card";
import { Helmet } from "react-helmet";

import shroomiesImage from './/images/Shroomies.png';

function App() {
  return (
    <div>
      <Helmet title="John Zhou" />
      <ResponsiveAppBar />

      <Box
        id="top-section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "red",
          height: "55vh",
          gap: 2,
        }}
      >
        <Typography variant="h2" sx={{ fontSize: 36 }}>
          Hello, I'm
        </Typography>
        <Typography variant="h2" sx={{ mb: 0 }}>
          John Zhou
        </Typography>
      </Box>

      <Box
        id="resume-section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "orange",
          height: "20vh",
          gap: 2,
        }}
      >
        <Typography variant="h2">Get Resume</Typography>
      </Box>

      <Box
        id="about-section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "yellow",
          height: "20vh",
          gap: 2,
        }}
      >
        <Typography variant="h2">About Me</Typography>
      </Box>

      <Box
        id="projects-section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "green",
          height: "50vh",
          gap: 2,
          padding: 5,
        }}
      >
        <Typography variant="h2">Projects</Typography>
        <Grid 
        
        sx={{
          display: 'flex',
          gap: 10,
        }}>
          <Card description={" A 2D floral themed shoot-em-up created in a group of 4 CUNY students and alumni originally for a game jam. Made with Unity C#. Placed #1 in Rensselaer Polytechnic Institute's 2023 GameFest and #2 in BWGJ 2022 on itch.io."} title={"Shroomies"} img={shroomiesImage} />
          <Card description={" Turn Based Combat Prototype made on ROBLOX Studio with Luau (a variant of Lua)."} title={"Aeternum Rift"} img={shroomiesImage} />
          
          
        </Grid>
      </Box>

      <Box
        id="contact-section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "blue",
          height: "20vh",
          gap: 2,
        }}
      >
        <Typography variant="h2">Contact Me</Typography>
      </Box>
    </div>
  );
}

export default App;
