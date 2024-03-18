
export const validate = (name, value) => {
    switch (name) {
        case 'from_name':
            if (value.length > 30) {
                return 'Name must be less than 30 characters';
            }
            break;
        case 'from_email':
            if (!/\S+@\S+\.\S+/.test(value)) {
                return 'Email address is invalid';
            }
            break;
        case 'from_phone':
            if (!/^\d{10}$/.test(value)) {
                return 'Phone number is invalid';
            }
            break;
        default:
            return '';
    }
};
