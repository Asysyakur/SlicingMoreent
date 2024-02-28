import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage({sx,name, Icon}) {
  return <Button sx={{...sx, fontSize: 16, fontWeight:600, textTransform: 'none'}} justifyContent="center" variant="contained" color="primary" >{name ? name : (Icon ? <Icon /> : null)} </Button>;
}