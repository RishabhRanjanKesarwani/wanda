import { Stack, Typography } from '@mui/material';
import React from 'react';
import { FOOTER_DATA } from '../constants';

const Footer = () => {
    return (
        <Stack direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row'}} justifyContent="space-between" sx={{padding: '10px 20px', backgroundColor: '#094E92'}}>
            <Typography variant="subtitle1" color="#96989A">{FOOTER_DATA.email}</Typography>
            <Typography variant="subtitle1" color="#96989A">{FOOTER_DATA.copyright}</Typography>
            <Typography variant="subtitle1" color="#96989A">{FOOTER_DATA.phoneNumber}</Typography>
        </Stack>
    );
};

export default Footer;