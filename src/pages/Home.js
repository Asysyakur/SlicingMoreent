import React from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
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
        spacing={5}
        sx={{ marginY: 3 }}
      >
        <Grid item>
          <Pickbox sx={{padding:4}} name="Pick - Up" />
        </Grid>
        <Grid item>
          <ButtonUsage sx={{width:'60px', height:'60px', borderRadius:'10px'}} Icon={SwapVertIcon} />
        </Grid>
        <Grid item>
          <Pickbox sx={{padding:4}} name="Drop - Off" />
        </Grid>
      </Grid>

      <Grid
        container
        sx={{ paddingX: 8, marginTop:8 }}
        justifyContent="space-between"
      >
        <Grid item>
          <Typography sx={{ fontSize: 16, fontWeight: 600 }}
                color="text.secondary">Popular Car</Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ fontSize: 16, fontWeight: 600 }}
                color="primary">View All</Typography>
        </Grid>
      </Grid>
      <Grid justifyContent="center" container gap={4} sx={{ marginY: 3 }}>
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
      <Typography sx={{ paddingX:8, marginTop:8 ,fontSize: 16, fontWeight: 600 }}
                color="text.secondary" >Recomendation Car</Typography>
      <Grid justifyContent="center" container gap={4} sx={{ marginY: 2 }}>
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
      <Box justifyContent="center" sx={{paddingBottom: 8, paddingTop:4, display:"flex"}}>
        <Link to="/Detail" >
        <ButtonUsage name="Show more car" />
        </Link>
      </Box>
    </div>
  );
}
