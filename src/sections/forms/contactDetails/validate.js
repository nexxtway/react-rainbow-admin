function validate(values) {
    const {
        name,
        email,
        phone,
        company,
        address,
        city,
        postCode,
        country,
        date,
        cityOfBirth,
        gender,
        aboutMe,
    } = values;
    const errors = {};
    if (!name) {
        errors.name = 'Name is a required field';
    }
    if (!email) {
        errors.email = 'Email is a required field';
    }
    if (!phone) {
        errors.phone = 'Phone is a required field';
    }
    if (!company) {
        errors.company = 'Company is a required field';
    }
    if (!address) {
        errors.address = 'Address is a required field';
    }
    if (!city) {
        errors.city = 'City is a required field';
    }
    if (!postCode) {
        errors.postCode = 'Post Code is a required field';
    }
    if (!country) {
        errors.country = 'Country is a required field';
    }
    if (!date) {
        errors.date = 'Date is a required field';
    }
    if (!cityOfBirth) {
        errors.cityOfBirth = 'City of Birth is a required field';
    }
    if (!gender) {
        errors.gender = 'Gender is a required field';
    }
    if (!aboutMe) {
        errors.country = 'About me is a required field';
    }
}

export default validate;
