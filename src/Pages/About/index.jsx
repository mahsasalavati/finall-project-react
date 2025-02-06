import React from 'react';
import { Box, Typography, Container, Grid, Paper, Avatar, Stack, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3), // Increased padding
  textAlign: 'left', // Text align left for better readability
  color: theme.palette.text.secondary,
  height: '100%', // Ensure paper takes full height of grid cell
  display: 'flex',
  flexDirection: 'column', // Align content vertically
}));

const AvatarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

const About = () => {
  const teamMembers = [
    {  title: 'Founder & CEO', avatar: 'path/to/avatar1.jpg', bio: " passion for [your shop's focus] led him to create this shop.  He believes in [your shop's values]." },
    {  title: 'Creative Director', avatar: 'path/to/avatar2.jpg', bio: " artistic vision shapes the unique style of our products. She's dedicated to [her area of focus]." },
    // Add more team members here
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 10 }}> {/* Increased padding */}
      <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold' }}> {/* Larger, bolder heading */}
        About Our Shop
      </Typography>

      <Grid container spacing={4}> {/* Increased spacing */}
        <Grid item xs={12} md={6}>
          <Item elevation={5}> {/* Higher elevation */}
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'medium' }}>Our Story</Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}> {/* Improved line height */}
              [Your shop's story - make it engaging and personal!  Talk about your inspiration, your mission, and what makes your shop special.]
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={12} md={6}>
          <Item elevation={5}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'medium' }}>Our Values</Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
              [Describe your core values - quality, sustainability, customer service, etc.  Explain why these values are important to your shop.]
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={12}>
          <Item elevation={5}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'medium' }}>Our Team</Typography>
            <Grid container spacing={3} justifyContent="center">
              {teamMembers.map((member) => (
                <Grid item xs={12} sm={6} md={4} key={member.name}> {/* Responsive team member grid */}
                  <AvatarContainer>
                    <Avatar alt={member.name} src={member.avatar} sx={{ width: 120, height: 120 }} /> {/* Larger avatars */}
                  </AvatarContainer>
                  <Typography variant="subtitle1" align="center" gutterBottom>{member.title}</Typography>
                  <Typography variant="body2" align="center" sx={{ lineHeight: 1.7 }}>{member.bio}</Typography>
                </Grid>
              ))}
            </Grid>
          </Item>
        </Grid>


        <Grid item xs={12}>
         
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;