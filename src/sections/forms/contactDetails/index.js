import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import Card from 'react-rainbow-components/components/Card';
import Input from 'react-rainbow-components/components/Input';
import Button from 'react-rainbow-components/components/Button';
import RadioGroup from 'react-rainbow-components/components/RadioGroup';
import Textarea from 'react-rainbow-components/components/Textarea';
import Select from 'react-rainbow-components/components/Select';
import validate from './validate';
import {
    Email,
    User,
    Phone,
    Company,
    Avatar,
    SignPost,
    City,
    Map,
    CalendarIcon,
} from '../../../components/icons';

const COUNTRY_OPTIONS = [{ value: 'US', label: 'US' }, { value: 'Canada', label: 'Canada' }];
const GENDER_OPTIONS = [{ value: 'Female', label: 'Female' }, { value: 'Male', label: 'Male' }];

function ContactDetails(props) {
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
                icon={<Avatar className="rainbow-rainbow-forms_contact-details-avatar" />}
                title="Contact Details"
                actions={<Button variant="neutral" label="Edit" />}
                footer={(
                    <Button
                        className="rainbow-rainbow-forms_button"
                        variant="brand"
                        type="submit">
                        <span>Update Profile</span>
                    </Button>
                )}>
                <article className="rainbow-rainbow-forms_inputs-container">
                    <div className="rainbow-flex  rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<User />}
                            component={Input}
                            name="name"
                            label="Full Name"
                            required
                            placeholder="Enter your Full Name"
                            type="text" />
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<Email />}
                            component={Input}
                            name="email"
                            label="Email Address"
                            required
                            placeholder="Enter your email"
                            type="email" />
                    </div>
                    <div className="rainbow-flex  rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<Phone />}
                            component={Input}
                            name="phone"
                            label="Phone Number"
                            placeholder="Enter your Phone Number"
                            type="text" />
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<Company />}
                            component={Input}
                            name="company"
                            label="Company"
                            placeholder="Enter your Company Name"
                            type="text" />
                    </div>
                    <div className="rainbow-flex  rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<SignPost />}
                            component={Input}
                            name="address"
                            label="Address"
                            placeholder="Enter your Address"
                            type="text" />
                    </div>
                    <div className="rainbow-flex rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<City />}
                            component={Input}
                            name="city"
                            label="City"
                            placeholder="City"
                            type="text" />
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<Map />}
                            component={Input}
                            name="postCode"
                            label="Postal Code"
                            placeholder="Postal Code"
                            type="text" />
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            component={Select}
                            options={COUNTRY_OPTIONS}
                            name="country"
                            label="Select your Country"
                            placeholder="Country"
                            type="text" />
                    </div>
                    <div className="rainbow-flex rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<CalendarIcon />}
                            component={Input}
                            name="date"
                            label="Date of Birthday"
                            type="date" />
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<City />}
                            component={Input}
                            name="cityOfBirth"
                            label="City of Birth"
                            placeholder="City"
                            type="text" />
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            icon={<CalendarIcon />}
                            component={RadioGroup}
                            options={GENDER_OPTIONS}
                            name="gender"
                            label="Gender" />
                    </div>
                    <div className="rainbow-flex rainbow-justify rainbow-p-horizontal_small">
                        <Field
                            className="rainbow-m-top_small rainbow-rainbow-forms_inputs-field"
                            component={Textarea}
                            name="aboutMe"
                            label="About me"
                            row={4}
                            placeholder="Enter about your description"
                            type="textarea" />
                    </div>
                </article>
            </Card>
        </form>
    );
}

ContactDetails.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    onSubmit: PropTypes.func,
};

ContactDetails.defaultProps = {
    onSubmit: () => {},
};

export default reduxForm({
    form: 'contact-details-form',
    validate,
})(ContactDetails);
