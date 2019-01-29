import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Card from 'react-rainbow-components/components/Card';
import Input from 'react-rainbow-components/components/Input';
import Button from 'react-rainbow-components/components/Button';
import CheckboxGroup from 'react-rainbow-components/components/CheckboxGroup';
import { Email, Lock } from '../../../components/icons';

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
        <Card className="react-rainbow-admin-forms_card rainbow-p-top_large">
            <form onSubmit={handleSubmit(submit)}>
                <div className="react-rainbow-admin-forms_header">
                    <img src="/assets/images/rainbow-logo.svg" alt="rainbow logo" className="react-rainbow-admin-forms_logo" />
                    <h1>Sign in</h1>
                    <div className="rainbow-flex rainbow-align_center">
                        <p>Don’t have an account?</p>
                        <p>Create Account</p>
                    </div>
                </div>
                <article className="rainbow-rainbow-forms_inputs-container">
                    <Field
                        className="rainbow-m-top_small"
                        icon={<Email />}
                        component={Input}
                        name="Email"
                        label="Email"
                        defaultMessage="Email address"
                        required
                        placeholder="Enter your email"
                        type="email" />
                    <Field
                        className="rainbow-m-top_small"
                        icon={<Lock />}
                        component={Input}
                        name="Password"
                        label="Password"
                        defaultMessage="Password"
                        required
                        placeholder="Enter your password"
                        type="password" />
                    <Button
                        className="rainbow-m-top_medium"
                        type="submit"
                        variant="brand">
                        <span>Login</span>
                    </Button>
                    <CheckboxGroup
                        className="rainbow-m-top_small"
                        lable="recover"
                        value={['Remember me']}
                        options={[{ value: 'Remember me', label: 'Remember me', disabled: false }]} />
                    <p className="rainbow-rainbow-forms_forgot rainbow-m-top_small">Forgot your password?</p>
                </article>
            </form>

        </Card>
    );
}

const SignForm = reduxForm({
    form: 'sign-in-form',
})(Form);

export default SignForm;
