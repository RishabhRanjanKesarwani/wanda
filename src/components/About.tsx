import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import SamassyaHope from "../assets/images/samassya-hope.jpeg";
import SamassyaStory from "../assets/images/samassya-story.jpeg";
import SamassyaVision from "../assets/images/samassya-vision.jpeg";
import { ABOUT_CONTENT } from '../constants';

const About = () => {
    return (
        <Stack spacing={2} sx={{margin: '16px 0'}}>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <img src={SamassyaHope} alt="About" width="100%" height="100%" />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Stack alignItems="center" justifyContent="center" spacing={1} sx={{height: '100%'}}>
                        <Typography variant="h3" align="center" sx={{fontFamily: 'Georgia, serif'}}>{ABOUT_CONTENT.action.heading}</Typography>
                        <Typography variant="h6" color="GrayText" align="center" sx={{padding: '0 20px'}}>{ABOUT_CONTENT.action.content}</Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <img src={SamassyaStory} alt="About" width="100%" height="100%" />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Stack alignItems="center" justifyContent="center" spacing={1} sx={{height: '100%'}}>
                        <Typography variant="h3" align="center" sx={{fontFamily: 'Georgia, serif'}}>{ABOUT_CONTENT.about.heading}</Typography>
                        <Typography variant="h6" color="GrayText" align="center" sx={{padding: '0 20px'}}>{ABOUT_CONTENT.about.content}</Typography>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <img src={SamassyaVision} alt="About" width="100%" height="100%" />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Stack alignItems="center" justifyContent="center" spacing={1} sx={{height: '100%'}}>
                        <Typography variant="h3" align="center" sx={{fontFamily: 'Georgia, serif'}}>{ABOUT_CONTENT.vision.heading}</Typography>
                        <Typography variant="h6" color="GrayText" align="center" sx={{padding: '0 20px'}}>{ABOUT_CONTENT.vision.content}</Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default About;