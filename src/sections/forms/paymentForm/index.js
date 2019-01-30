import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Card from 'react-rainbow-components/components/Card';
import Input from 'react-rainbow-components/components/Input';
import Button from 'react-rainbow-components/components/Button';
import validate from './validate';
import {
    User,
    Map,
    CalendarIcon,
    Lock,
    CreditCard,
} from '../../../components/icons';

function PaymentForm(props) {
    const {
        handleSubmit,
        reset,
        onSubmit,
    } = props;

    const submit = (values) => {
        onSubmit(values);
        reset();
    };

    return (
        <form noValidate onSubmit={handleSubmit(submit)} className="react-rainbow-admin-forms_card">
            <Card
                className="rainbow-rainbow-forms_contact-details"
                title="Your Payment Details"
                footer={(
                    <Button
                        variant="brand"
                        type="submit">
                        <span>Complete Payment</span>
                    </Button>
                )}>
                <article className="rainbow-rainbow-forms_inputs-container">
                    <div className="rainbow-flex rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<User />}
                            component={Input}
                            name="name"
                            label="Name on Card"
                            required
                            placeholder="Name on Card"
                            type="text" />
                    </div>
                    <div className="rainbow-flex rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<CreditCard />}
                            component={Input}
                            name="cardNumber"
                            label="Card Number"
                            required
                            placeholder="111 111 111 1111"
                            type="text" />
                    </div>
                    <div className="rainbow-flex rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<Lock />}
                            component={Input}
                            name="cvc"
                            required
                            label="CVC code"
                            type="text" />
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<CalendarIcon />}
                            component={Input}
                            name="date"
                            label="Exp. Date"
                            required
                            type="date" />
                    </div>
                    <div className="rainbow-flex rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<Map />}
                            component={Input}
                            name="zip"
                            label="Zip code"
                            placeholder="Zip code"
                            type="text" />
                    </div>
                </article>
            </Card>
        </form>
    );
}

PaymentForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
};

PaymentForm.defaultProps = {
    onSubmit: () => {},
};

export default reduxForm({
    form: 'payment-form',
    validate,
})(PaymentForm);
