export enum NAV_ITEMS_IDS {
    about = 'about',
}

export const NAV_ITEMS = [
    {
        id: NAV_ITEMS_IDS.about,
        name: 'About',
    },
];

export const SAMASSYA = 'SAMASSYA';

export const ABOUT_CONTENT = {
    action: {
        heading: 'We keep the hope alive!',
        content: 'We help people who face problems related to insurance claims settlement and reimbursements by giving appropriate guidance and using accurate channels.',
    },
    about: {
        heading: 'Our story',
        content: 'Millions of us face trouble with insurance claims and reimbursements from insurance companies. One such problem was encountered by our co-founder. He awaited a claim settlement letter while his claim had settled. A claim settlement is required to get a reimbursement from an insurance company. To retreive the settlement letter, he and his wife did innumerous follow-ups with the insurance company; but all in vain. His friend, the other co-founder, came to his rescue and helped him in resolving the issue. In 8 months, a claim settlement letter was finally received by the couple. This led to a revelation that, in a country like ours, many of us require help in matters of insurance and other related problems. So, here we are to guide you and support you in your, perhaps an unpleasant and an excruciating, journey.',
    },
    vision: {
        heading: 'We aspire to...',
        content: 'Bring smile to the faces of people who have had to go through a lot in their difficult times.',
    },
};

export const API_PARAMS = {
    path: 'https://6313578ca8d3f673ffc8fe10.mockapi.io/samassya/api/v1/',
    endpoints: {
        clients: 'clients'
    },
    methods: {
        get: 'GET',
        post: 'POST',
        put: 'PUT',
        delete: 'DELETE',
    },
    headers: {
        'Content-Type': 'application/json',
    },
}

export const API_ERRORS = {
    getError: {
        errorCode: 601,
        errorMessage: 'Some error occurred in getting the data. Please try again after some time.',
    },
    postError: {
        errorCode: 602,
        errorMessage: 'Some error occurred in saving the data. Please try again after some time.',
    },
    putError: {
        errorCode: 603,
        errorMessage: 'Some error occurred in updating the data. Please try again after some time.',
    },
    deleteError: {
        errorCode: 604,
        errorMessage: 'Some error occurred in deleting the data. Please try again after some time.',
    },
};

export const SOCIAL_MEDIA_LINKS = {
    facebook: 'https://www.facebook.com/profile.php?id=100081877393234',
    twitter: 'https://twitter.com/Samassya1?t=g4u8zOiuSvWhyPWsiCjhAA&s=09',
    linkedin: 'https://linkedin.com/in/samassya-samadhan-531108241',
    email: 'mailto:samassyakasamadhan@gmail.com',
    whatsapp: '918810477977',
}