import { Grid, Stack } from "@mui/material";
import { Billing_Info } from "../Payment/Billing_Info";
import { Rental_info } from "../Payment/Rental_Info";
import { Rental_Summary } from "../Payment/Rental_Summary";
import { Confirmation } from "../Payment/Confirmation";
import { Payment_Method } from "../Payment/Payment_Method";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Payment() {
    return(
        <>
            <Header/>
            <Grid direction="row" container spacing={2} justifyContent="space-evenly">
                <Grid item sx={8}>
                    <Stack direction="column" spacing={4}>
                        <Billing_Info/>
                        <Rental_info/>
                        <Payment_Method/>
                        <Confirmation/>
                    </Stack>
                </Grid>
                <Grid item sx={4}>
                    <Rental_Summary/>
                </Grid>
            </Grid>
            <Footer/>
        </>
    )
}