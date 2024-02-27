import {
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  Typography,
  Grid,
  Slider,
} from "@mui/material";
import React, { useState } from "react";

export default function Sidebar() {
  const [sliderValue, setSliderValue] = useState();
  return (
    <Box
      sx={{
        width: 328,
        padding: 2,
        zIndex: 1200,
      }}
      role="presentation"
    >
      <FormControl component="fieldset" sx={{ paddingBottom: 4 }}>
        <FormLabel
          sx={{ fontWeight: 600, fontSize: 12 }}
          color="secondary"
          component="legend"
        >
          TYPE
        </FormLabel>
        <FormGroup>
          {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
            (text, index) => (
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <span>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Typography
                          color="text.primary"
                          style={{ fontSize: 20, fontWeight: 600 }}
                        >
                          {text}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          color="text.secondary"
                          style={{ fontSize: 20, fontWeight: 600 }}
                        >
                          (2)
                        </Typography>
                      </Grid>
                    </Grid>
                  </span>
                }
              />
            )
          )}
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl component="fieldset" sx={{ paddingBottom: 4 }}>
        <FormLabel
          sx={{ fontWeight: 600, fontSize: 12 }}
          color="secondary"
          component="legend"
        >
          TYPE
        </FormLabel>
        <FormGroup>
          {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
            (text, index) => (
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <span>
                    <Grid container spacing={1}>
                      <Grid item>
                        <Typography
                          color="text.primary"
                          style={{ fontSize: 20, fontWeight: 600 }}
                        >
                          {text}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography
                          color="text.secondary"
                          style={{ fontSize: 20, fontWeight: 600 }}
                        >
                          (2)
                        </Typography>
                      </Grid>
                    </Grid>
                  </span>
                }
              />
            )
          )}
        </FormGroup>
        <FormHelperText></FormHelperText>
      </FormControl>
      <Box sx={{ width: 300 }}>
        <Typography
          sx={{ fontWeight: 600, fontSize: 12 }}
          color="text.secondary"
        >
          PRICE
        </Typography>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          value={sliderValue}
          onChange={(e, newValue) => {
            e.preventDefault();
            setSliderValue(newValue);
          }}
        />
        <Typography sx={{ fontWeight: 600, fontSize: 20 }} color="text.third">
          MAX ${sliderValue}
        </Typography>
      </Box>
    </Box>
  );
}
