import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import SpeedIcon from "@mui/icons-material/Speed";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import Typography from "@mui/material/Typography";
import ButtonUsage from "./ButtonUsage";
import Grid from "@mui/material/Grid";

const Cards = ({ image, name, category, gas, manual, size, price }) => {
  return (
    <Box sx={{ minWidth: '304px', minHeight: '388px'}}>
      <Card sx={{ backgroundColor:"#ffffff", borderRadius:'10px' }}>
        <CardContent>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 48  }}
          >
            <div>
              <Typography
                textAlign="left"
                sx={{ fontSize: 20, fontWeight: 700 }}
                color="text.primary"
                gutterBottom
              >
                {name}
              </Typography>
              <Typography
                textAlign="left"
                sx={{ fontSize: 14, fontWeight: 700 }}
                color="text.secondary"
                component="div"
              >
                {category}
              </Typography>
            </div>
            <FavoriteIcon style={{ color: "#ED3F3F", marginLeft: "auto" }} />
          </div>
          <img
            src={image}
            alt="car"
            style={{ width: "100%", height: "auto", marginBottom: 48 }}
          />
          <Grid spacing={2}  color="text.secondary" container>
            {["gas", "manual", "size"].map((text) => (
              <Grid container item xs={4}>
                <Grid item>
                  {text === "gas" ? <LocalGasStationIcon /> : null}
                  {text === "manual" ? <SpeedIcon /> : null}
                  {text === "size" ? <PeopleAltIcon /> : null}
                </Grid>

                <Grid item>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 500 }}
                    component="div"
                  >
                    {text === "gas" ? `${gas}L` : null}
                    {text === "manual" ? `${manual}` : null}
                    {text === "size" ? `${size} People` : null}
                  </Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Grid
            sx={{ fontSize: 14, marginTop: 1 }}
            justifyContent="space-between"
            alignItems="center"
            container
          >
            <Grid item>
              <Typography
                sx={{ fontSize: 20, fontWeight: 700 }}
                fontWeight="bold"
                variant="h5"
                component="div"
              >
                ${price}/
                <span
                  style={{ color: "#90A3BF", fontSize: 14, fontWeight: 700 }}
                >
                  day
                </span>
              </Typography>
            </Grid>
            <Grid item>
              <CardActions>
                <ButtonUsage name="Rent Now" />
              </CardActions>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Cards;
