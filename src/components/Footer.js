import { Button, Stack, Typography } from "@mui/material"

export function Footer() {
    return(
        <Stack direction="column"  spacing={3} sx={{padding: 2}}>
            <Stack direction="row" justifyContent="space-between" sx={{paddingRight: '5px', paddingLeft: '5px'}}>
                <Stack direction="column" spacing={1}>
                    <img src="Logo.png" style={{width: '100%', maxWidth: '100px', height: 'auto'}}/>
                    <Typography style={{color: 'gray'}}>
                        Our vision is to provide convinience 
                        <br></br>
                        and help your sales business
                    </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-evenly" spacing={5}>
                    <Stack direction="column" alignItems="flex-start" justifyContent="space-evenly">
                        <Typography>
                            About
                        </Typography>
                        <Button size="small" sx={{color: 'gray'}}>How it works</Button>
                        <Button size="small" sx={{color: 'gray'}}>Featured</Button>
                        <Button size="small" sx={{color: 'gray'}}>Partnership</Button>
                        <Button size="small" sx={{color: 'gray'}}>Bussiness Relation</Button>
                    </Stack>
                    <Stack direction="column" alignItems="flex-start" justifyContent="space-evenly">
                        <Typography>
                            Community
                        </Typography>
                        <Button size="small" sx={{color: 'gray'}}>Events</Button>
                        <Button size="small" sx={{color: 'gray'}}>Blog</Button>
                        <Button size="small" sx={{color: 'gray'}}>Podcast</Button>
                        <Button size="small" sx={{color: 'gray'}}>invite a friend</Button>
                    </Stack>
                    <Stack direction="column" alignItems="flex-start" justifyContent="space-evenly">
                        <Typography>
                            Socials
                        </Typography>
                        <Button size="small" sx={{color: 'gray'}}>Discord</Button>
                        <Button size="small" sx={{color: 'gray'}}>Instagram</Button>
                        <Button size="small" sx={{color: 'gray'}}>Twitter</Button>
                        <Button size="small" sx={{color: 'gray'}}>Facebook</Button>
                    </Stack>
                </Stack>
            </Stack>
            <hr></hr>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography>
                    &copy;2022 MORENT.All right reserved
                </Typography>
                <Stack direction="row" spacing={4}>
                    <Button size="medium" sx={{color: 'black'}}>Privacy & Policy</Button>
                    <Button size="medium" sx={{color: 'black'}}>Terms & Condition</Button>
                </Stack>
            </Stack>
        </Stack>
    )
}