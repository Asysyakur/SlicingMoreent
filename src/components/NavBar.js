import { AppBar, Toolbar, Typography, TextField } from "@mui/material";
import React from "react";

export default function NavBar() {
    return (
        <AppBar position="static" color="common">
        <Toolbar>
            <Typography variant="h6" color="primary">
            MORENT
            </Typography>
            <TextField
            id="standard-basic"
            label="Search something here"
            variant="outlined"
            size="small"
            />
        </Toolbar>
        </AppBar>
    );
}
