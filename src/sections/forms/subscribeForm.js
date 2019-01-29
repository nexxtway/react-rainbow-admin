import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Card from 'react-rainbow-components/components/Card';
import Input from 'react-rainbow-components/components/Input';
import Button from 'react-rainbow-components/components/Button';
import { Email, User } from '../../components/icons';

function Form() {
    return (
        <Card className="react-rainbow-admin-forms_card rainbow-p-top_large" style={{ alignSelf: 'baseline' }}>
            <form>
                <div className="react-rainbow-admin-forms_header">
                    <img src="/assets/images/rainbow-logo.svg" alt="rainbow logo" className="react-rainbow-admin-forms_logo" />
                    <h1>Subscribe</h1>
                    <div className="rainbow-flex rainbow-align_center">
                        <p>Don’t miss any update from us.</p>
                    </div>
                </div>
                <article className="rainbow-rainbow-forms_inputs-container">
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
                    <Button
                        className="rainbow-m-top_medium"
                        variant="brand">
                        <span>Subscribe</span>
                    </Button>
                </article>
            </form>

        </Card>
    );
}

const SubscribeForm = reduxForm({
    form: 'subscribe-form',
})(Form);

export default SubscribeForm;
