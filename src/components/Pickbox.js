import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CircleIcon from "@mui/icons-material/Circle";
import { Typography, Box, FormControl, InputLabel } from "@mui/material";

export default function Pickbox({ name }) {
  const [selectedOption, setSelectedOption] = useState("default");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box
      sx={{
        paddingY: 4,
        paddingX: 4,
        backgroundColor: "#ffffff",
        borderRadius: "10px",
      }}
    >
      <Grid container spacing={1}>
        <Grid item>
          <CircleIcon
            sx={{
              padding: "4px",
              width: "16px",
              height: "16px",
              color: name === "Pick - Up" ? "#3563E9" : "#54A6FF",
              borderRadius: "70px",
              backgroundColor:
                name === "Pick - Up"
                  ? "rgba(53, 99, 233, 0.3)"
                  : "rgba(92, 175, 252, 0.3)",
            }}
          />
        </Grid>
        <Grid item>
          <Typography
            sx={{ fontWeight: 600, fontSize: 16 }}
            color="text.primary"
          >
            {name}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems={"center"}
        columnSpacing={4}
        sx={{ marginY: 1 }}
      >
        <Grid item>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 126 }}>
            <Typography
              sx={{ fontWeight: 700, fontSize: 16 }}
              color="text.primary"
            >
              Location
            </Typography>
            <Select
              sx={{
                fontWeight: 500,
                fontSize: 12,
                color: selectedOption === "default" ? "#90A3BF" : "inherit",
              }}
              value={selectedOption}
              onChange={handleChange}
            >
              <MenuItem value="default">Select your city</MenuItem>
              <MenuItem value="option1">Opsi 1</MenuItem>
              <MenuItem value="option2">Opsi 2</MenuItem>
              <MenuItem value="option3">Opsi 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 126 }}>
            <Typography
              sx={{ fontWeight: 700, fontSize: 16 }}
              color="text.primary"
            >
              Date
            </Typography>
            <Select
              sx={{
                fontWeight: 500,
                fontSize: 12,
                color: selectedOption === "default" ? "#90A3BF" : "inherit",
              }}
              value={selectedOption}
              onChange={handleChange}
            >
              <MenuItem value="default">Select your city</MenuItem>
              <MenuItem value="option1">Opsi 1</MenuItem>
              <MenuItem value="option2">Opsi 2</MenuItem>
              <MenuItem value="option3">Opsi 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 126 }}>
            <Typography
              sx={{ fontWeight: 700, fontSize: 16 }}
              color="text.primary"
            >
              Time
            </Typography>
            <Select
              sx={{
                fontWeight: 500,
                fontSize: 12,
                color: selectedOption === "default" ? "#90A3BF" : "inherit",
              }}
              value={selectedOption}
              onChange={handleChange}
            >
              <MenuItem value="default">Select your city</MenuItem>
              <MenuItem value="option1">Opsi 1</MenuItem>
              <MenuItem value="option2">Opsi 2</MenuItem>
              <MenuItem value="option3">Opsi 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}
