import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { WHATSAPP_CONTACTS } from '../constants';
import { chatOnWhatsApp } from '../utils/chatOnWhatsApp';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Home = () => {
    return (
        <Stack spacing={2} alignItems="center">
            <Stack spacing={0} sx={{width: '100%'}}>
                <Box height={300}>
                    <Stack justifyContent="flex-end" direction="column" sx={{height: '100%'}}>
                        <Typography sx={{position: 'relative', top: {xs: '20px', sm: '28px', md: '28px', lg: '28px'}, fontFamily: 'AbrilFatFace', fontSize: {xs: '60px', sm: '96px', md: '96px', lg: '96px'}}}>Samassya</Typography>
                    </Stack>
                </Box>
                <Box height={300} sx={{backgroundColor: '#175fa7'}}>
                    <Typography variant="h3" mt={1} color="white">Ab samadhan bhi!</Typography>
                </Box>
            </Stack>
            <Button variant="contained" size="large" color="success" startIcon={<WhatsAppIcon />} onClick={() => chatOnWhatsApp(WHATSAPP_CONTACTS.ceo)}>Talk to us</Button>
        </Stack>
    );
};

export default Home;