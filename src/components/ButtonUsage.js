import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage({name, Icon}) {
  return <Button sx={{ fontSize: 16, fontWeight:600}} justifyContent="center" variant="contained" color="primary" >{name ? name : (Icon ? <Icon /> : null)} </Button>;
}