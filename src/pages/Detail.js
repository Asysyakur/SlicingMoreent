import React from "react";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Grid from "@mui/material/Grid";
import { Box, Rating, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import cars from "../datamobil.json";
import Profil from "../assets/Profill.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import BG from "../assets/BG.png";
import ButtonUsage from "../components/ButtonUsage";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Detail() {
  return (
    <div style={{ backgroundColor: "#F6F7F9" }}>
      <Header />
      <Sidebar />
      <Box sx={{ marginLeft: "328px" }}>
        <Box sx={{ marginX: 3 }}>
          <Grid
            container
            sx={{ paddingTop: 10, paddingX: 5 }}
            columnSpacing={4}
          >
            <Grid item xs={12} sm={6}>
              <Box sx={{ position: "relative", width: "100%", marginBottom:2 }}>
                <Typography
                  color="text.white"
                  sx={{
                    width: "372px",
                    fontSize: 32,
                    fontWeight: 600,
                    position: "absolute",
                    top: 20,
                    left: 20,
                  }}
                >
                  Sports car with the best design and acceleration
                </Typography>
                <Typography
                  color="text.white"
                  sx={{
                    width: "284px",
                    fontSize: 16,
                    fontWeight: 500,
                    position: "absolute",
                    top: 130,
                    left: 20,
                  }}
                >
                  Safety and comfort while driving a futuristic and elegant
                  sports car
                </Typography>
                <img
                  src={BG}
                  alt="Gambar"
                  style={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "#3563E9",
                    borderRadius: "10px",
                  }}
                />
              </Box>
              <Grid container spacing={3}>
              {[...new Array(3)].map((_) => (
                <Grid item xs={4}>
                  <img
                    src={BG}
                    alt="Gambar"
                    style={{
                      width: "100%",
                      height: "auto",
                      backgroundColor: "#3563E9",
                      borderRadius: "10px",
                    }}
                  />
                </Grid>
              ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  backgroundColor: "#FFFFFF",
                  paddingX: 2,
                  paddingY: 3,
                  borderRadius: "10px",
                  minHeight: "448px",
                }}
              >
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography sx={{ fontSize: 32, fontWeight: 700 }}>
                    Nissan GT-R
                  </Typography>
                  <FavoriteIcon
                    style={{ color: "#ED3F3F", marginLeft: "auto" }}
                  />
                </Grid>
                <Grid container alignItems="center">
                  <Rating name="read-only" value={4} readOnly />

                  <Typography
                    color="text.third"
                    sx={{ fontSize: 14, fontWeight: 500 }}
                  >
                    440+ Reviewer
                  </Typography>
                </Grid>
                <Typography
                  color="text.third"
                  sx={{
                    fontSize: 20,
                    fontWeight: 400,
                    lineHeight: "40px",
                    marginY: 2,
                  }}
                >
                  NISMO has become the embodiment of Nissan's outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the "race track".
                </Typography>
                <Grid container sx={{marginBottom:8}}>
                <Grid container justifyContent="space-between" sx={{marginBottom:2}}  >
                  <Grid item>

                <Typography
                    color="text.secondary"
                    sx={{ fontSize: 20, fontWeight: 400 }}
                  >
                    Type Car
                    <span
                        style={{
                          color: "#596780",
                          fontSize: 20,
                          fontWeight: 600,
                          marginLeft: "60px",
                        }}
                      >
                        Sport
                      </span>
                  </Typography>
                    </Grid>
                  <Grid item>

                <Typography
                    color="text.secondary"
                    sx={{ fontSize: 20, fontWeight: 400 }}
                  >
                    Capacity
                    <span
                        style={{
                          color: "#596780",
                          fontSize: 20,
                          fontWeight: 600,
                          marginLeft: "60px",
                        }}
                      >
                        2 Person
                      </span>
                  </Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="space-between">
                  <Grid item>

                <Typography
                    color="text.secondary"
                    sx={{ fontSize: 20, fontWeight: 400 }}
                  >
                    Steering 
                    <span
                        style={{
                          color: "#596780",
                          fontSize: 20,
                          fontWeight: 600,
                          marginLeft: "60px",
                        }}
                      >
                        Manual
                      </span>
                  </Typography>
                    </Grid>
                  <Grid item>

                <Typography
                    color="text.secondary"
                    sx={{ fontSize: 20, fontWeight: 400 }}
                  >
                    Gasoline 
                    <span
                        style={{
                          color: "#596780",
                          fontSize: 20,
                          fontWeight: 600,
                          marginLeft: "60px",
                        }}
                      >
                        70L
                      </span>
                  </Typography>
                    </Grid>
                </Grid>
                </Grid>
                <Grid
                  sx={{ fontSize: 14, marginTop: 1 }}
                  justifyContent="space-between"
                  alignItems="center"
                  container
                >
                  <Grid item>
                    <Typography
                      sx={{ fontSize: 28, fontWeight: 700 }}
                      color="text.primary"
                      fontWeight="bold"
                      variant="h5"
                      component="div"
                    >
                      $88/
                      <span
                        style={{
                          color: "#90A3BF",
                          fontSize: 16,
                          fontWeight: 700,
                        }}
                      >
                        day
                      </span>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Link to="/Payment">
                     <ButtonUsage name="Rent Now" />

                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            marginX: 8,
            padding: 4,
            marginTop: "64px",
            borderRadius: "10px",
          }}
        >
          <Grid container alignItems="center" columnSpacing={1}>
            <Grid item>
              <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                Reviews
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                color="white"
                sx={{
                  backgroundColor: "#3563E9",
                  fontSize: 14,
                  fontWeight: 700,
                  paddingX: "16px",
                  paddingY: "5px",
                  borderRadius: "4px",
                }}
              >
                13
              </Typography>
            </Grid>
          </Grid>
          {[...new Array(2)].map((_) => (
            <Grid container columnSpacing={1} sx={{ paddingTop: 2 }}>
              <Grid item>
                <img
                  src={Profil}
                  alt="profil"
                  style={{ width: 50, height: 50, borderRadius: 50 }}
                />
              </Grid>
              <Grid container item xs={11} spacing={0}>
                <Grid container justifyContent="space-between" item>
                  <Grid item>
                    <Typography
                      color="text.primary"
                      sx={{ fontSize: 20, fontWeight: 700 }}
                    >
                      Alex Stanton
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: 14, fontWeight: 500 }}
                    >
                      21 July 2022
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  justifyContent="space-between"
                  alignItems="center"
                  item
                >
                  <Grid item>
                    <Typography
                      color="text.secondary"
                      sx={{ fontSize: 14, fontWeight: 500 }}
                    >
                      CEO at Bukalapak
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Rating name="read-only" value={4} readOnly />
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography
                    color="text.third"
                    sx={{ fontSize: 14, fontWeight: 400 }}
                  >
                    We are very happy with the service from the MORENT App.
                    Morent has a low price and also a large variety of cars with
                    good and comfortable facilities. In addition, the service
                    provided by the officers is also very friendly and very
                    polite.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
          <Grid
            container
            color="text.secondary"
            columnGap={1}
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: 4 }}
          >
            <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
              Show All
            </Typography>
            <ExpandMoreRoundedIcon />
          </Grid>
        </Box>
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
            <Typography sx={{ fontSize: 16, fontWeight: 600 }} color="primary">
              View All
            </Typography>
          </Grid>
        </Grid>
        <Grid justifyContent="center" container gap={4} sx={{ marginY: 3 }}>
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
        <Grid justifyContent="center" container gap={4} sx={{ marginY: 2 }}>
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
      <Footer/>
      </Box>
    </div>
  );
}
