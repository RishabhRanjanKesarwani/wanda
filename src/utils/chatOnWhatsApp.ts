export const chatOnWhatsApp = (phoneNumber: string) => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
};