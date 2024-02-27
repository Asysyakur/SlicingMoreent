import React from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import Pickbox from "../components/Pickbox";
import cars from "../datamobil.json";
import ButtonUsage from "../components/ButtonUsage";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#F6F7F9" }}>
      <NavBar />
      <Grid
        container
        justifyContent="center"
        alignItems={"center"}
        spacing={2}
        sx={{ marginY: 3 }}
      >
        <Grid item>
          <Pickbox name="Pick - Up" />
        </Grid>
        <Grid item>
          <ButtonUsage Icon={SwapVertIcon} />
        </Grid>
        <Grid item>
          <Pickbox name="Drop - Off" />
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ paddingX: 3 }}
        justifyContent="space-between"
        spacing={1}
      >
        <Grid item>
          <Typography>Popular Car</Typography>
        </Grid>
        <Grid item>
          <Typography>View All</Typography>
        </Grid>
      </Grid>
      <Grid justifyContent="center" container spacing={1} sx={{ marginY: 3 }}>
        {cars.slice(0, 8).map((car) => (
          <Grid item>
            <Card
              image={car.image}
              name={car.name}
              category={car.category}
              gas={car.gas}
              manual={car.manual}
              size={car.size}
              price={car.price}
            />
          </Grid>
        ))}
      </Grid>
      <Typography sx={{ paddingX: 3 }} >Recomendation Car</Typography>
      <Grid justifyContent="center" container spacing={1} sx={{ marginY: 2 }}>
        {cars.slice(0, 4).map((car) => (
          <Grid item>
            <Card
              image={car.image}
              name={car.name}
              category={car.category}
              gas={car.gas}
              manual={car.manual}
              size={car.size}
              price={car.price}
            />
          </Grid>
        ))}
      </Grid>
      <Box justifyContent="center" sx={{margin: 3, display:"flex"}}>
        <Link to="/Detail" >
        <ButtonUsage name="Show more car" />
        </Link>
      </Box>
    </div>
  );
}
