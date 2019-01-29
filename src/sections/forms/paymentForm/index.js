import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Card from 'react-rainbow-components/components/Card';
import Input from 'react-rainbow-components/components/Input';
import Button from 'react-rainbow-components/components/Button';
import CheckboxGroup from 'react-rainbow-components/components/CheckboxGroup';
import Textarea from 'react-rainbow-components/components/Textarea';
import Select from 'react-rainbow-components/components/Select';
import {
    Email, User, Phone, Company, Avatar, SignPost, City, Map, CalendarIcon,
} from '../../../components/icons';

function Form(props) {
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
        <form onSubmit={handleSubmit(submit)} className="react-rainbow-admin-forms_card">
            <Card
                className="rainbow-rainbow-forms_contact-details"
                icon={<Avatar style={{ backgroundColor: '#f4f6f9', borderRadius: '32px' }} />}
                title="Contact Details"
                actions={<Button variant="neutral" label="Edit" />}
                footer={(
                    <Button
                        variant="brand"
                        type="submit">
                        <span>Update Profile</span>
                    </Button>
                )}>
                <article className="rainbow-rainbow-forms_inputs-container">
                    <div className="rainbow-flex rainbow-p-bottom_medium rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<User />}
                            component={Input}
                            name="Full Name"
                            label="Full Name"
                            defaultMessage="Enter your Full Name"
                            required
                            placeholder="Enter your Full Name"
                            type="text" />
/>
                                                            </div>
                    <div className="rainbow-flex rainbow-p-bottom_medium rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<Phone />}
                            component={Input}
                            name="Phone Number"
                            label="Phone Number"
                            defaultMessage="Phone Number"
                            placeholder="Enter your Phone Number"
                            type="text" />
                    </div>
                    <div className="rainbow-flex rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<CalendarIcon />}
                            component={Input}
                            name="Date"
                            label="Date of Birthday"
                            defaultMessage="Date of Birthday"
                            type="date" />
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<City />}
                            component={Input}
                            name="City of Birth"
                            label="City of Birth"
                            defaultMessage="Postal Code"
                            placeholder="City"
                            type="text" />
                    </div>
                    <div className="rainbow-flex rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<City />}
                            component={Input}
                            name="City of Birth"
                            label="City of Birth"
                            defaultMessage="Postal Code"
                            placeholder="City"
                            type="text" />
                    </div>
                </article>
            </Card>
        </form>
    );
}

const PaymentForm = reduxForm({
    form: 'payment-form',
})(Form);

export default PaymentForm;
