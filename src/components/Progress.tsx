import { Circle } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { PROGRESS_STATS } from '../constants';

const Progress = () => {
    return (
        <Stack spacing={4} sx={{margin: '32px 0'}}>
            <Stack direction={{xs: 'column', sm: 'row', md: 'row', lg: 'row'}} justifyContent="space-evenly" alignItems="center">
                <Stack>
                    <Box sx={{border: '5px solid #175fa7', borderRadius: '50%', padding: '20px', width: 'fit-content'}}>
                        <Box sx={{borderRadius: '50%', background: '#175fa7', width: '150px', height: '150px'}}>
                            <Typography variant="h1" sx={{fontFamily: 'Georgia, serif', color: 'white'}}>{PROGRESS_STATS.casesSolved}</Typography>
                        </Box>
                    </Box>
                    <Typography variant="h6">CASES SOLVED</Typography>
                </Stack>
                <Stack>
                    <Box sx={{border: '5px solid #175fa7', borderRadius: '50%', padding: '20px', width: 'fit-content'}}>
                        <Box sx={{borderRadius: '50%', background: '#175fa7', width: '150px', height: '150px'}}>
                            <Typography variant="h1" sx={{fontFamily: 'Georgia, serif', color: 'white', position: 'relative', top: '10px'}}>{PROGRESS_STATS.casesWIP}</Typography>
                        </Box>
                    </Box>
                    <Typography variant="h6">WORK IN PROGRESS</Typography>
                </Stack>
            </Stack>
            <Stack alignItems="center">
                <Box sx={{border: '5px solid #175fa7', borderRadius: '20px', padding: '20px', width: 'fit-content'}}>
                    <Box sx={{borderRadius: '20px', background: '#175fa7', padding: '20px'}}>
                        <Stack spacing={1}>
                            {PROGRESS_STATS.caseTypes.map(type => (
                                <Stack spacing={1} direction="row">
                                    <Circle sx={{color: 'white', position: 'relative', top: '5px'}} fontSize="small" />
                                    <Typography variant="h5" sx={{fontFamily: 'Georgia, serif', color: 'white'}}>{type}</Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                </Box>
                <Typography variant="h6">TYPES OF CASES SOLVED</Typography>
            </Stack>
        </Stack>
    );
};

export default Progress;