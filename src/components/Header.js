import { Typography, TextField, Stack, Avatar, IconButton, AppBar } from "@mui/material"
import { Link } from "react-router-dom"

export function Header() {
    return(
        <>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} color="common">
                <Stack direction="row" justifyContent="space-around"  alignItems="center" style={{padding: '5px'}}>
                    <Link to="/">
                        <img alt='company logo' src="Logo.png" style={{width: '100%', maxWidth: '100px', height: 'auto' }}/>
                    </Link>
                    <TextField id="standard-basic" label="Search Something Here" variant="standard" sx={{width: '400px'}}/>
                    <Stack direction="row" spacing={2}>
                        <IconButton>
                            <img src="Like_Vector.png"/>
                        </IconButton>
                        <IconButton>
                            <img src="Notification.png"/>
                        </IconButton>
                        <IconButton>
                            <img src="Setting_Vector.png"/>
                        </IconButton>
                        <Avatar alt='user icon' src="User icon.png"/>
                    </Stack>
                    
                </Stack>
            </AppBar>
        </>
    )
}