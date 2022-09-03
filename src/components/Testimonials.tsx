import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials = () => {
    return (
        <Stack alignItems="center" spacing={6} sx={{backgroundColor: '#175fa7', padding: "20px 20px 50px"}}>
            <Typography variant="h3" sx={{fontFamily: 'Georgia, serif', color: 'white'}}>Samassya in the words of our customers</Typography>
            <Stack spacing={2}>
                {TESTIMONIALS.map(testimonial => (
                    <Stack key={testimonial.id} direction={{xs: 'column', sm: 'column', md: 'row', lg: 'row'}} alignItems="center" spacing={2} sx={{borderRadius: '10px', padding: '20px', background: '#eeeeee'}}>
                        {testimonial.image ? (
                            <img src={testimonial.image} alt="testimonial headshot" style={{width: '100px', height: '100px', borderRadius: '50%', border: '1px solid #b6b6b6'}} />
                        ) : (
                            <Box sx={{width: '100px', height: '100px', borderRadius: '50%', border: '1px solid #b6b6b6', background: '#175fa7'}}>
                                <Typography variant="h3" sx={{fontFamily: 'Georgia, serif', color: 'white', width: '100px', position: 'relative', top: '22px', left: '2px'}}>{testimonial.name.charAt(0).toUpperCase()}</Typography>
                            </Box>
                        )}
                        <Stack>
                            <Typography variant="h6"><b>{testimonial.name}</b></Typography>
                            <Typography variant="subtitle1">{testimonial.testimonial}</Typography>
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    );
};

export default Testimonials;