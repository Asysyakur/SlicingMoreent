import { Stack, Typography, FormGroup, FormControlLabel, Checkbox, Button } from "@mui/material"

export function Confirmation() {
    return(
        <>
            <Stack direction="column" spacing={1}>
                <Typography>Confirmation</Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                    <Typography sx={{color: 'gray'}}>We are getting to the end. Just few clicks and your rental is ready!</Typography>
                    <Typography sx={{color: 'gray'}}>Step 4 of 4</Typography>
                </Stack>
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="I agree with sendig an Marketing and newsletter emails. No spam, promissed!" />
                    <FormControlLabel control={<Checkbox />} label="I agree with our terms and conditions and privacy policy." />
                </FormGroup>
                <Button variant="contained" sx={{width: '140px', height: '56px'}}>Rent Now</Button>
                <img src="Data_Safe.png" style={{width: '100%', maxWidth: '30px', height:"auto"}}/>
                <Typography>All your data are safe</Typography>
                <Typography sx={{color: 'gray'}}>We re using the most advanced security to provide you the best experience ever.</Typography>
            </Stack>
        </>
    )
}