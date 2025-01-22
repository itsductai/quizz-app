import React from 'react'
import { Grid2 } from '@mui/material'

export default function Center(props) {
  return (
    <Grid2 container
        direction='column'
        alignItems='center' 
        justifyContent='center'
        sx={{ minHeight: '100vh' }} 
    >
        <Grid2 item xs={1}> 
            {props.children}  
        </Grid2>
    </Grid2>
  )
}
