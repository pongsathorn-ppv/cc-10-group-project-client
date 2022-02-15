import React from 'react';
import { Avatar, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import user2 from '../../images/profiles/pro2.jpg';

const UserBio = () => {
  return (
    <Box sx={{ height: '210px' }}>
      <Box sx={{ height: '100px', display: 'flex' }}>
        <Box
          sx={{
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Avatar
            src={user2}
            sx={{ width: 70, height: 70, marginLeft: '20px' }}
          />
        </Box>
        <Box
          sx={{
            height: '100px',
            width: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Typography>6</Typography>
            <Typography>Posts</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography>0</Typography>
            <Typography>Followers</Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography>0</Typography>
            <Typography>Following</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ height: '100px' }}>
        <Box sx={{ height: '60px', padding: '0 15px' }}>
          <Typography variant='body'>username</Typography>
          <Typography>I am a good man in the world.</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Button variant="outlined" sx={{ width: '350px' }}>Edit Profile</Button>
        </Box>
        
      </Box>
      {/* <Box sx={{ height: '70px' }}>3</Box> */}
    </Box>
  );
};

export default UserBio;
