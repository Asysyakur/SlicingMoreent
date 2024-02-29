import { Typography, Stack, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, Select, MenuItem, InputLabel  } from "@mui/material"
import { useState } from "react"



export function Rental_info() {
    const [value, setValue] = useState('Pick-up')
    const [test, setTest] = useState('')
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return(
        <>
            <Stack direction="column">
                <Typography>Rental Info</Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                    <Typography sx={{color: 'gray'}}>Please select your rental date</Typography>
                    <Typography sx={{color: 'gray'}}>Step 2 of 4</Typography>
                </Stack>
                <Stack direction="row" >
                    <RadioGroup
                        aria-labelledby="Rental-info-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                        >
                        <FormControlLabel value="Pick-up" control={<Radio />} label="Pick-up" />
                            <Stack direction="row" justifyContent="space-between" spacing={8}>
                                <Stack direction="column">
                                    <Typography>Locations</Typography>
                                    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                        <InputLabel id="city-select-helper-label">Select your city</InputLabel>
                                        <Select
                                            labelId="city-select-helper-label"
                                            id="city-select-helper"
                                            value={test}
                                            label="Locations"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>
                                <Stack direction="column">
                                    <Typography>Date</Typography>
                                    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
                                        <InputLabel id="city-select-helper-label">Select your date</InputLabel>
                                        <Select
                                            labelId="city-select-helper-label"
                                            id="city-select-helper"
                                            value={test}
                                            label="Locations"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>
                            </Stack>
                            <Stack direction="column">
                                <Typography>Time</Typography>
                                <FormControl sx={{ m: 1, width: "200px" }} size="small">
                                        <InputLabel id="city-select-helper-label">Select your time</InputLabel>
                                        <Select
                                            labelId="city-select-helper-label"
                                            id="city-select-helper"
                                            value={test}
                                            label="Locations"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                            </Stack>
                        <FormControlLabel value="Drop-off" control={<Radio />} label="Drop-off" />
                    </RadioGroup>
                </Stack>
            </Stack>
        </>
    )
}