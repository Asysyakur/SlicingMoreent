import React from 'react'
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import cars from "../datamobil.json";

export default function Detail() {
  return (
    <div style={{backgroundColor:"#F6F7F9"}}>
      <NavBar />
      <Sidebar />
      <Grid
        container
        sx={{ paddingX: 3 }}
        justifyContent="space-between"
        spacing={1}
      >
        <Grid item>
          <Typography>Recent Car</Typography>
        </Grid>
        <Grid item>
          <Typography>View All</Typography>
        </Grid>
      </Grid>
      <Grid justifyContent="center" container spacing={2} sx={{ marginTop: 2 }}>
          {cars.map((car) => (
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
    </div>
  )
}
