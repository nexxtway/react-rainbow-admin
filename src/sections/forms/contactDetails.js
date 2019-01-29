import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Card from 'react-rainbow-components/components/Card';
import Input from 'react-rainbow-components/components/Input';
import Button from 'react-rainbow-components/components/Button';
import {
    Email, User, Phone, Company, Avatar, SignPost,
} from '../../components/icons';

function Form() {
    return (
        <Card
            className="react-rainbow-admin-forms_card rainbow-rainbow-forms_contact-details"
            icon={<Avatar style={{ backgroundColor: '#f4f6f9', borderRadius: '32px' }} />}
            title="Contact Details"
            actions={<Button variant="neutral" label="Edit" />}>
            <form>
                <article className="rainbow-rainbow-forms_inputs-container">
                    <div className="rainbow-flex rainbow-p-bottom_medium">
                        <div className="rainbow-p-horizontal_small" style={{ width: '50%' }}>
                            <Field
                                className="rainbow-m-top_small"
                                icon={<User />}
                                component={Input}
                                name="Full Name"
                                label="Full Name"
                                defaultMessage="Enter your Full Name"
                                required
                                placeholder="Enter your Full Name"
                                type="text" />
                        </div>
                        <div className="rainbow-p-horizontal_small" style={{ width: '50%' }}>
                            <Field
                                className="rainbow-m-top_small"
                                icon={<Email />}
                                component={Input}
                                name="Email Address"
                                label="Email Address"
                                defaultMessage="Email Address"
                                required
                                placeholder="Enter your email"
                                type="email" />
                        </div>
                    </div>
                    <div className="rainbow-flex rainbow-p-bottom_medium">
                        <div className="rainbow-p-horizontal_small" style={{ width: '50%' }}>
                            <Field
                                className="rainbow-m-top_small"
                                icon={<Phone />}
                                component={Input}
                                name="Phone Number"
                                label="Phone Number"
                                defaultMessage="Phone Number"
                                required
                                placeholder="Enter your Phone Number"
                                type="text" />
                        </div>
                        <div className="rainbow-p-horizontal_small" style={{ width: '50%' }}>
                            <Field
                                className="rainbow-m-top_small"
                                icon={<Company />}
                                component={Input}
                                name="Company"
                                label="Company"
                                defaultMessage="Company"
                                required
                                placeholder="Enter your Company Name"
                                type="text" />
                        </div>
                    </div>
                    <div className="rainbow-flex rainbow-p-bottom_medium">
                        <div className="rainbow-p-horizontal_small" style={{ width: '100%' }}>
                            <Field
                                className="rainbow-m-top_small"
                                icon={<SignPost />}
                                component={Input}
                                name="Address"
                                label="Address"
                                defaultMessage="Address"
                                required
                                placeholder="Enter your Address"
                                type="text" />
                        </div>
                    </div>
                    <div className="rainbow-flex rainbow-justify">
                        <Field
                            className="rainbow-m-top_small"
                            icon={<SignPost />}
                            component={Input}
                            name="Address"
                            label="Address"
                            defaultMessage="Address"
                            required
                            placeholder="Enter your Address"
                            type="text" />
                        <Field
                            className="rainbow-m-top_small"
                            icon={<SignPost />}
                            component={Input}
                            name="Address"
                            label="Address"
                            defaultMessage="Address"
                            required
                            placeholder="Enter your Address"
                            type="text" />
                        <Field
                            className="rainbow-m-top_small"
                            icon={<SignPost />}
                            component={Input}
                            name="Address"
                            label="Address"
                            defaultMessage="Address"
                            required
                            placeholder="Enter your Address"
                            type="text" />
                    </div>
                    <Button
                        className="rainbow-m-top_medium"
                        variant="brand">
                        <span>Update Profile</span>
                    </Button>
                </article>
            </form>

        </Card>
    );
}

const ContactDetails = reduxForm({
    form: 'contact-details-form',
})(Form);

export default ContactDetails;
