import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUsage({name}) {
  return <Button sx={{ fontSize: 16, fontWeight:600}} variant="contained" color="primary" >{name}</Button>;
}