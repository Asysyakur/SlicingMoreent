import { Rating, Stack, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";


export function Rental_Summary() {
    const [value, setValue] = useState(4)
    return(
        <>
            <Stack direction="column">
                <Typography>Rental Summary</Typography>
                <Typography style={{color: 'gray'}}>
                    Prices may change depending on the length of the rental and the price of your rental car.
                </Typography>
                <br/>
                <Stack direction="row" spacing={4}>
                    <img src="Look.png"/>
                    <Stack>
                        <Typography variant="h3" sx={{}}>NISSAN GT-R</Typography>
                        <Stack direction="row">
                            <Rating name="car-rating" value={value} readOnly/>
                            <Typography sx={{color: 'gray'}}>440+ Reviewer</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <br/>
                <Stack direction="row" justifyContent="space-between">
                    <Typography sx={{color: 'gray'}}>Subtotal</Typography>
                    <Typography>$80.00</Typography>
                </Stack>
                <br/>
                <Stack direction="row" justifyContent="space-between">
                    <Typography sx={{color: 'gray'}}>Tax</Typography>
                    <Typography>$0</Typography>
                </Stack>
                <br/>
                <Stack direction="row" justifyContent="space-evenly">
                    <TextField size="small" label="Apply promo code"/>
                    <Button variant="text" sx={{color: "black"}}>Apply Now</Button>
                </Stack>
                <br/>
                <Stack direction="row" justifyContent="space-between">
                    <Stack>
                        <Typography>Total Rental Price</Typography>
                        <Typography sx={{color: "gray"}}>Overral price and includes rental discount</Typography>
                    </Stack>
                    <Typography>$80.00</Typography>
                </Stack>
            </Stack>
        </>

    )
}