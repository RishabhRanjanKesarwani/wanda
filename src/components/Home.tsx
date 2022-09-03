import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { SOCIAL_MEDIA_LINKS } from '../constants';
import { chatOnWhatsApp } from '../utils/chatOnWhatsApp';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Home = () => {
    return (
        <Stack>
            <Box height={300}>
                <Stack justifyContent="flex-end" direction="column" sx={{height: '100%'}}>
                    <Typography sx={{position: 'relative', top: {xs: '20px', sm: '28px', md: '28px', lg: '28px'}, fontFamily: 'AbrilFatFace', fontSize: {xs: '60px', sm: '96px', md: '96px', lg: '96px'}}}>Samassya</Typography>
                </Stack>
            </Box>
            <Box height={300} sx={{backgroundColor: '#175fa7', paddingBottom: '20px'}}>
                <Stack justifyContent="space-between" alignItems="center" sx={{height: '100%'}}>
                    <Typography variant="h3" mt={1} color="white">Ab samadhan bhi!</Typography>
                    <Button variant="contained" size="large" color="success" startIcon={<WhatsAppIcon />} onClick={() => chatOnWhatsApp(SOCIAL_MEDIA_LINKS.whatsapp)}>Talk to us</Button>
                </Stack>
            </Box>
        </Stack>
    );
};

export default Home;