import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Card, CardContent, Typography } from '@mui/material';
import Center from './Center';

export default function Login() {
  return (
    <Center>
        <Card>
            <CardContent sx={{textAlign: 'center'}}>
                <Typography variant='h3' sx={{my: 3}}>Quiz App</Typography>
            <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '90%' } }}
            autoComplete="off"
            >
                <TextField
                id="outlined-multiline-flexible"
                label="Email"
                multiline
                variant='outlined'
                
                />
                <TextField
                id="outlined-textarea"
                label="Password"
                placeholder="Password"
                variant='outlined'
                multiline
                />
                <Button 
                type='submit' 
                variant="contained" 
                href="#outlined-buttons"
                sx={{ width: '90%'  }}
                >
                Start
                </Button>
            </Box>
            </CardContent>
        </Card>
    </Center>
  )
}
