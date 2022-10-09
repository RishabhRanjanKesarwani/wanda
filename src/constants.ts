export enum NAV_ITEMS_IDS {
    about = 'about',
    contact = 'contact',
    progress = 'progress',
    testimonials = 'testimonials',
}

export const NAV_ITEMS = [
    {
        id: NAV_ITEMS_IDS.about,
        name: 'About',
    },
    {
        id: NAV_ITEMS_IDS.contact,
        name: 'Contact us',
    },
    {
        id: NAV_ITEMS_IDS.progress,
        name: 'Our progress',
    },
    {
        id: NAV_ITEMS_IDS.testimonials,
        name: 'Testimonials',
    },
];

export const SAMASSYA = 'SAMASSYA';

export const ABOUT_CONTENT = {
    action: {
        heading: 'About us',
        content: 'Samassya is a company which provides consultative services to individuals and organizations whose documents or hard-earned money is stuck and need assistance to get them released. We keep the hope alive!',
    },
    about: {
        heading: 'Our story',
        content: 'Millions of us face trouble with insurance claims and reimbursements from insurance companies. One such problem was encountered by our co-founder. He awaited a claim settlement letter while his claim had settled. A claim settlement letter is required to get a reimbursement from an insurance company. To retreive the settlement letter, he and his wife did numerous follow-ups with the insurance company; but all in vain. His friend, the other co-founder, came to his rescue and helped him in resolving the issue. In 8 months, a claim settlement letter was finally received by the couple. This led to a revelation that, in a country like ours, many of us require help in matters of insurance and other related problems. So, here we are to guide you and support you in your, perhaps an unpleasant and an excruciating, journey.',
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
    email: 'mailto:info@samassya.in',
    whatsapp: '918810477977',
}

export const PROGRESS_STATS = {
    casesSolved: 4,
    casesWIP: 2,
    caseTypes: ['Health insurance claim', 'Third party administrator (TPA)', 'Dispute between buyer and property developer', 'Motor insurance claim', 'Home loan subsidy case']
}

export const TESTIMONIALS = [
    {
        id: 'testimonial1',
        name: 'Deepika',
        gender: 'F',
        image: '',
        testimonial: 'Constant help and support given by Samassya in resolving the issue of insurance claim settlement letter, relieved from the pain and trouble that was part of day to day life for the past 6 months. I am thankful to them for their services.',
    },
    {
        id: 'testimonial2',
        name: 'Rajeev',
        gender: 'M',
        image: '',
        testimonial: 'Meri samassya thi ki ek builder k pas mera paisa fasa hua tha. Property cancel krne k 1 saal baad tak bhi paisa wapis nahi aaya. Samassya ke strong follow up and constant support se hi mera refund aa saka. Thank you. Samassya...Ab Samadhan bhi',
    },
    {
        id: 'testimonial3',
        name: 'Rajat',
        gender: 'M',
        image: '',
        testimonial: 'Samassya ne mera health insurance claim sahi tarah se register krne me madad ki. Unki help se hi mujhe sahi samay me cashless approval mil gaya and mujhpe poore treatment me koi financial pressure nahi pada. End tak mera experience hassle free raha.',
    },
    {
        id: 'testimonial4',
        name: 'Abhishek',
        gender: 'M',
        image: '',
        testimonial: 'Ek property me paisa daale the jisme builder ne baad me new clauses daal die jo hame acceptable nahi the. Iske chalte humne property cancel kar di par 5 saal baad tak bhi paisa wapis nahi aaya. Samassya ke strong follow up and constant support se hi mera refund aa saka.',
    },
]

export const FOOTER_DATA = {
    email: 'info@samassya.in',
    phoneNumber: '+91-8810477977',
    copyright: '© 2022 Copyright: Samassya'
}