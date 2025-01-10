import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Box, Stack } from '@mui/material';

export default function Navbar() {
  return (
    <Stack 
    component={'nav'}
    flexDirection={'row'}
    gap={3}
    sx={{paddingLeft:20, paddingRight:20, paddingTop:5}}
    >
      <LocalMallIcon/>
      <PersonIcon/>
        <Box sx={{width:50, height:50, paddingLeft:130 }}>LOGO</Box>
    <Stack>
      
    </Stack>
      
    </Stack>
  )
}

