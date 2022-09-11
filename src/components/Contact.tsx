import { Backdrop, Button, Checkbox, CircularProgress, FormControlLabel, IconButton, Stack, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Email from "@mui/icons-material/Email";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Twitter from "@mui/icons-material/Twitter";
import WhatsApp from "@mui/icons-material/WhatsApp";
import { isEmailValid, isPhoneNumberValid } from '../utils/validations';
import { Client } from '../types/client';
import { addClient } from '../api';
import { SOCIAL_MEDIA_LINKS } from '../constants';
import { chatOnWhatsApp } from '../utils/chatOnWhatsApp';

const Contact = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [receiveNewsletter, setReceiveNewsletter] = useState<boolean>(true);
    const [nameError, setNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [phoneNumberError, setPhoneNumberError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
        if (nameError) {
            setNameError('');
        }
    }

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
        if (emailError) {
            setEmailError('');
        }
    }

    const onPhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
        if (phoneNumberError) {
            setPhoneNumberError('');
        }
    }

    const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    }

    const onReceiveNewsletterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReceiveNewsletter(event.target.checked);
    }

    const onSubmit = async () => {
        let isFormComplete = true;
        if (!name) {
            isFormComplete = false;
            setNameError('Name is a required field')
        }
        if (!email || !isEmailValid(email)) {
            isFormComplete = false;
            setEmailError('Email is a required field and must be valid');
        }
        if (phoneNumber && !isPhoneNumberValid(phoneNumber)) {
            isFormComplete = false;
            setPhoneNumberError('Phone number must have 10 digits.')
        }
        if (isFormComplete) {
            const data: Client = {
                name,
                email,
                phoneNumber,
                message,
                receiveNewsletter,
            }
            setLoading(true);
            const response = await addClient(data);
            if (response.errorCode && response.errorCode !== 0) {
                window.alert('Some error occurred in sending your message. Please try again later!')
            } else {
                setName('');
                setEmail('');
                setPhoneNumber('');
                setMessage('');
                setReceiveNewsletter(true);
                window.alert('We have received your message. One of our relationship managers will reach out to you shortly.')
            }
            setLoading(false);
        }
    };

    return (
        <Stack alignItems="center" spacing={4} sx={{backgroundColor: '#175fa7', padding: "20px 50px"}}>
            <Typography variant="h3" sx={{fontFamily: 'Georgia, serif', color: 'white'}}>Contact us</Typography>
            <Stack spacing={1} alignItems="center" width="100%">
                <TextField variant="filled" label="Name*" value={name} error={!!nameError} helperText={nameError} sx={{width: '100%', maxWidth: '500px'}} onChange={onNameChange} />
                <TextField variant="filled" label="Email*" value={email} error={!!emailError} helperText={emailError} sx={{width: '100%', maxWidth: '500px'}} onChange={onEmailChange} />
                <TextField variant="filled" label="Phone number" value={phoneNumber} error={!!phoneNumberError} helperText={phoneNumberError} sx={{width: '100%', maxWidth: '500px'}} onChange={onPhoneNumberChange} />
                <TextareaAutosize minRows={6} maxRows={6} placeholder="Message" value={message} style={{width: '100%', maxWidth: '484px', background: 'rgba(27, 88, 149, 0.6)', border: 'none', borderBottom: '2px solid #dde0e3', font: 'inherit', color: 'white', padding: '8px'}} onChange={onMessageChange} />
                <FormControlLabel control={<Checkbox checked={receiveNewsletter} onChange={onReceiveNewsletterChange} />} label="I agree to receive newsletters from Samassya" ></FormControlLabel>
                <Button variant="contained" color="info" size="large" onClick={onSubmit} disabled={loading}>Submit</Button>
            </Stack>
            <Stack direction={{xs: 'column', sm: 'row', md: 'row', lg: 'row'}} spacing={{xs: 0, sm: 2, md: 2, lg: 2}} alignItems="center">
                <Stack direction="row" spacing={2}>
                    <IconButton onClick={() => {window.open(SOCIAL_MEDIA_LINKS.facebook, '_blank')}}>
                        <Facebook sx={{color: 'white', fontSize: '60px'}} />
                    </IconButton>
                    <IconButton onClick={() => {window.open(SOCIAL_MEDIA_LINKS.twitter, '_blank')}}>
                        <Twitter sx={{color: 'white', fontSize: '60px'}} />
                    </IconButton>
                    <IconButton onClick={() => {window.open(SOCIAL_MEDIA_LINKS.linkedin, '_blank')}}>
                        <LinkedIn sx={{color: 'white', fontSize: '60px'}} />
                    </IconButton>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <IconButton onClick={() => chatOnWhatsApp(SOCIAL_MEDIA_LINKS.whatsapp)}>
                        <WhatsApp sx={{color: 'white', fontSize: '60px'}} />
                    </IconButton>
                    <IconButton onClick={() => {document.location='mailto:samassyakasamadhan@gmail.com'}}>
                        <Email sx={{color: 'white', fontSize: '60px'}} />
                    </IconButton>
                </Stack>
            </Stack>
            <Backdrop open={loading}>
                <CircularProgress color="primary" />
            </Backdrop>
        </Stack>
    );
};

export default Contact;