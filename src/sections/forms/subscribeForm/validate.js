function validate(values) {
    const { fullName, email } = values;
    const errors = {};
    if (!fullName) {
        errors.fullName = 'Full Name is a required field';
    }
    if (!email) {
        errors.email = 'Password is a required field';
    }
}

export default validate;
