// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3563E9',
        },
        secondary: {
            main: '#1A202C',
        },
        text: {
            primary: '#1A202C', // Contoh warna primary
            secondary: '#90A3BF', // Ubah atau tambahkan warna text.secondary sesuai keinginan Anda
            third: '#596780', // Ubah atau tambahkan warna text.third sesuai keinginan Anda
            white: '#ffffff', // Ubah atau tambahkan warna text.third sesuai keinginan Anda
        },
    },
    typography: {
        fontFamily: [
            'Plus Jakarta Sans',
        ].join(','),
    },
});

export default theme;
