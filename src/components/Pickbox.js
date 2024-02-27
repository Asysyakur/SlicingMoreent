import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Typography, Box } from "@mui/material";

export default function Pickbox({name}) {
  const [selectedOption, setSelectedOption] = useState("default");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor:"#ffffff"
      }}
    >
      <Typography
          sx={{ fontWeight: 600, fontSize: 16 }}
          color="text.primary"
        >
          {name}
        </Typography>  
      <Grid container spacing={2}>
        <Grid item>
          <Typography sx={{ fontWeight: 700, fontSize: 16 }} color="text.primary" >Location</Typography>
          <Select value={selectedOption} onChange={handleChange}>
            <MenuItem value="default">Select your city</MenuItem>
            <MenuItem value="option1">Opsi 1</MenuItem>
            <MenuItem value="option2">Opsi 2</MenuItem>
            <MenuItem value="option3">Opsi 3</MenuItem>
          </Select>
        </Grid>
        <Grid item>
          <Typography sx={{ fontWeight: 700, fontSize: 16 }} color="text.primary">Date</Typography>
          <Select value={selectedOption} onChange={handleChange}>
            <MenuItem value="default">Select your city</MenuItem>
            <MenuItem value="option1">Opsi 1</MenuItem>
            <MenuItem value="option2">Opsi 2</MenuItem>
            <MenuItem value="option3">Opsi 3</MenuItem>
          </Select>
        </Grid>
        <Grid item>
          <Typography sx={{ fontWeight: 700, fontSize: 16 }} color="text.primary">Time</Typography>
          <Select value={selectedOption} onChange={handleChange}>
            <MenuItem value="default">Select your city</MenuItem>
            <MenuItem value="option1">Opsi 1</MenuItem>
            <MenuItem value="option2">Opsi 2</MenuItem>
            <MenuItem value="option3">Opsi 3</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </Box>
  );
}
