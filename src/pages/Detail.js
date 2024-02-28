import React from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import cars from "../datamobil.json";

export default function Detail() {
  return (
    <div style={{ backgroundColor: "#F6F7F9" }}>
      <NavBar />
        
          <Sidebar />

        
          <Box sx={{ marginLeft: '328px' }}>
            <Grid
              container
              sx={{ paddingX: 8, marginTop: 8 }}
              justifyContent="space-between"
            >
              <Grid item>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 600 }}
                  color="text.secondary"
                >
                  Recent Car
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  sx={{ fontSize: 16, fontWeight: 600 }}
                  color="primary"
                >
                  View All
                </Typography>
              </Grid>
            </Grid>
            <Grid
              justifyContent="center"
              container
              spacing={2}
              sx={{ marginY: 3 }}
            >
              {cars.slice(0, 3).map((car) => (
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
            <Typography
              sx={{ paddingX: 8, marginTop: 8, fontSize: 16, fontWeight: 600 }}
              color="text.secondary"
            >
              Recomendation Car
            </Typography>
            <Grid
              justifyContent="center"
              container
              spacing={2}
              sx={{ marginY: 2 }}
            >
              {cars.slice(0, 3).map((car) => (
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
          </Box>
        
    </div>
  );
}
