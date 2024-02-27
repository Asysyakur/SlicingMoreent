import React from 'react'
import image from "../assets/car.png";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Pickbox from "../components/Pickbox";

const cars = [
    {
      image: image,
      name: "Koenigsegg",
      category: "Sport",
      gas: "90",
      manual: "manual",
      size: 2,
      price: 99,
    },
    {
      image: image,
      name: "Koenigsegg",
      category: "Sport",
      gas: "90",
      manual: "manual",
      size: 2,
      price: 99,
    },
    {
      image: image,
      name: "Koenigsegg",
      category: "Sport",
      gas: "90",
      manual: "manual",
      size: 2,
      price: 99,
    },
    {
      image: image,
      name: "Koenigsegg",
      category: "Sport",
      gas: "90",
      manual: "manual",
      size: 2,
      price: 99,
    },
    {
      image: image,
      name: "Koenigsegg",
      category: "Sport",
      gas: "90",
      manual: "manual",
      size: 2,
      price: 99,
    },
    {
      image: image,
      name: "Koenigsegg",
      category: "Sport",
      gas: "90",
      manual: "manual",
      size: 2,
      price: 99,
    },
    {
      image: image,
      name: "Koenigsegg",
      category: "Sport",
      gas: "90",
      manual: "manual",
      size: 2,
      price: 99,
    },
    {
      image: image,
      name: "Koenigsegg",
      category: "Sport",
      gas: "90",
      manual: "manual",
      size: 2,
      price: 99,
    },
    {
      image: image,
      name: "Koenigsegg",
      category: "Sport",
      gas: "90",
      manual: "manual",
      size: 2,
      price: 99,
    },
    {
      image: image,
      name: "Koenigsegg",
      category: "Sport",
      gas: "90",
      manual: "manual",
      size: 2,
      price: 99,
    },
    {
      image: image,
      name: "Koenigsegg",
      category: "Sport",
      gas: "90",
      manual: "manual",
      size: 2,
      price: 99,
    },
    {
      image: image,
      name: "Koenigsegg",
      category: "Sport",
      gas: "90",
      manual: "manual",
      size: 2,
      price: 99,
    },
  ];
  
export default function Detail() {
  return (
    <div>
    <Button variant="contained" color="primary">
                Primary Button
            </Button>
            <Button variant="contained" color="secondary">
                Secondary Button
            </Button>
      <NavBar />
      <Pickbox/>
      <Sidebar />
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
