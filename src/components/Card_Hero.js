import { Box, Typography, Button, Stack } from "@mui/material";
import BG2 from "../assets/BG2.png"
export function Card_Hero() {
    return(

        <>
            <Box sx={{bgcolor: '#3563E9', backgroundImage: `url(${BG2})`, width:640, height: 360, borderRadius: '10px'}} >
                    <Stack container direction="column" spacing={1} sx={{paddingLeft: "24px", paddingTop: "24px"}}>
                        <Typography sx={{color: 'white', width:272, height: 96, fontSize: 32}}>Easy way to rent a car at a low price</Typography>
                        <Typography variant="caption"sx={{color: 'white', width:284, height:48}}>Providing cheap car rental services and safe and comfortable facilities</Typography>
                        <Button variant="contained" sx={{width: 124, bgcolor: '#54A6FF'}}>Rental Car</Button>
                    </Stack>
            </Box>
        </>
    )
}