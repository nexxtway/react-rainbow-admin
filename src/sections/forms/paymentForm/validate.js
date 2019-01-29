function validate(values) {
    const {
        name,
        cardNumber,
        cvc,
        date,
        zip,
    } = values;
    const errors = {};
    if (!name) {
        errors.name = 'Name is a required field';
    }
    if (!cardNumber) {
        errors.cardNumber = 'Card Number is a required field';
    }
    if (!cvc) {
        errors.cvc = 'CVC is a required field';
    }
    if (!date) {
        errors.date = 'Date is a required field';
    }
    if (!zip) {
        errors.zip = 'Zip is a required field';
    }
}

export default validate;
