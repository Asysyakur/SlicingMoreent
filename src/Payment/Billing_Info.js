import { Stack, Typography, TextField } from "@mui/material"

export function Billing_Info() {
    return(
        <Stack direction="column">
            <Stack direction="column">
                <Typography>Billing Info</Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                    <Typography sx={{color: 'gray'}}>Please enter your billing info </Typography>
                    <Typography sx={{color: 'gray'}}>Step 1 of 4</Typography>
                </Stack>
                <Stack direction="column" spacing={2}>
                    <Stack direction="row" justifyContent="space-between" spacing={8}>
                        <Stack direction="column">
                            <Typography>Name</Typography>
                            <TextField size= "small" id="outlined-basic" label="Your name" variant="outlined" />
                        </Stack>
                        <Stack direction="column">
                            <Typography>Phone Number</Typography>
                            <TextField size= "small" id="outlined-basic" label="Phone number" variant="outlined" />
                        </Stack>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between" spacing={8}>
                        <Stack direction="column">
                            <Typography>Address</Typography>
                            <TextField size= "small" id="outlined-basic" label="Address" variant="outlined" />
                        </Stack>
                        <Stack direction="column">
                            <Typography>Town/City</Typography>
                            <TextField size= "small" id="outlined-basic" label="Town or City" variant="outlined" />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}