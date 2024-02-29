import { Stack, Typography, Radio, RadioGroup, FormControlLabel, FormControl, TextField } from "@mui/material"

export function Payment_Method() {
    return (
        <>
            <Stack direction="column">
                <Typography>Payment Method</Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                    <Typography sx={{color: 'gray'}}>Please enter your payment method</Typography>
                    <Typography sx={{color: 'gray'}}>Step 3 of 4</Typography>
                </Stack>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Credit Card"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Credit Card" control={<Radio />} label="Credit Card" />
                            <Stack spacing={2}>
                                <Stack direction="row" justifyContent="space-between" spacing={8}>
                                    <Stack>
                                        <Typography>Credit Number</Typography>
                                        <TextField size= "small" id="outlined-basic" label="Card Number" variant="outlined" />
                                    </Stack>
                                    <Stack>
                                        <Typography>Expiration Date</Typography>
                                        <TextField size= "small" id="outlined-basic" label="DD/MM/YY" variant="outlined" />
                                    </Stack>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" spacing={8}>
                                    <Stack>
                                        <Typography>Credit Holder</Typography>
                                        <TextField size= "small" id="outlined-basic" label="Card Holder" variant="outlined" />
                                    </Stack>
                                    <Stack>
                                        <Typography>CVC</Typography>
                                        <TextField size= "small" id="outlined-basic" label="CVC" variant="outlined" />
                                    </Stack>
                                </Stack>
                            </Stack>
                        <FormControlLabel value="PayPal" control={<Radio />} label="Paypal" />
                        <FormControlLabel value="BitCoin" control={<Radio />} label="BitCoin" />
                    </RadioGroup>
                </FormControl>
            </Stack>
        </>
    )
}