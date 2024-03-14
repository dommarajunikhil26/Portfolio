
export const validate = (name, value) => {
    switch (name) {
        case 'name':
            if (value.length > 30) {
                return 'Name must be less than 30 characters';
            }
            break;
        case 'email':
            if (!/\S+@\S+\.\S+/.test(value)) {
                return 'Email address is invalid';
            }
            break;
        case 'phone':
            if (!/^\d{10}$/.test(value)) {
                return 'Phone number is invalid';
            }
            break;
        default:
            return '';
    }
};
