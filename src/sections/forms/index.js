import React from 'react';
import PageHeader from '../../components/PageHeader';
import SignForm from './signinForm';
import SubscribeForm from './subscribeForm';
import ContactDetails from './contactDetails';
import PaymentForm from './paymentForm';
import './styles.css';

export default function Forms() {
    return (
        <div className="react-rainbow-admin-forms_container rainbow-background-color_gray-1">
            <PageHeader
                title="Forms"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <section className="react-rainbow-admin-forms_section rainbow-p-top_large">
                <SignForm onSubmit={values => console.log(values)} />
                <SubscribeForm onSubmit={values => console.log(values)} />
            </section>
            <section className="react-rainbow-admin-forms_section rainbow-p-top_large">
                <ContactDetails onSubmit={values => console.log(values)} />
            </section>
            <section className="react-rainbow-admin-forms_section rainbow-p-top_large">
                <PaymentForm onSubmit={values => console.log(values)} />
            </section>
        </div>
    );
}
