import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faPencilAlt,
    faAngleDown,
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import {
    Badge,
    Breadcrumb,
    Breadcrumbs,
    ButtonGroup,
    ButtonIcon,
    Card,
} from 'react-rainbow-components';
import { navigateTo } from '../../../history';
import UserField from './userField';
import OrdersTable from './ordersTable';
import './styles.css';

const orders = [
    {
        user: { name: 'Sara', photoUrl: '/assets/images/user2.jpg' },
        status: 'VERIFIED',
        amount: '$144.55',
        date: '11/07/2018',
    },
    {
        user: { name: 'Reinier', photoUrl: '/assets/images/user1.jpg' },
        status: 'PROCESSING',
        amount: '$285.05',
        date: '11/07/2018',
    },
    {
        user: { name: 'Leo', photoUrl: '/assets/images/user3.jpg' },
        status: 'PROCESSING',
        amount: '$125.25',
        date: '11/06/2018',
    },
    {
        user: { name: 'Tahimi', photoUrl: '/assets/images/user4.jpg' },
        status: 'EXPIRED',
        amount: '$104.55',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pepe' },
        status: 'VERIFIED',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Jose' },
        status: 'VERIFIED',
        amount: '$144.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pedro' },
        status: 'PROCESSING',
        amount: '$94.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Juan' },
        status: 'PROCESSING',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pablo' },
        status: 'EXPIRED',
        amount: '$104.55',
        date: '11/04/2018',
    },
    {
        user: { name: 'Maria' },
        status: 'VERIFIED',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Juana' },
        status: 'VERIFIED',
        amount: '$144.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Julio' },
        status: 'PROCESSING',
        amount: '$94.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Olga' },
        status: 'PROCESSING',
        amount: '$124.05',
        date: '11/04/2018',
    },
];

const userCardTitle = (
    <span className="rainbow-color_gray-4 rainbow-font-size-heading_small rainbow-flex">
        <span className="react-rainbow-admin-user-detail_icon">
            <FontAwesomeIcon icon={faFacebookF} style={{ marginRight: '4px' }} />
        </span>
        Facebook user
    </span>
);

const userCardAction = (
    <ButtonGroup>
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPlus} />} />
        <ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
    </ButtonGroup>
);

const userCardFooter = (
    <div className="rainbow-align-content_space-between">
        <div className="rainbow-flex">
            <UserField label="Payments" value="Enabled" />
            <div className="react-rainbow-admin-user-detail_vertical-divider" />
            <UserField label="Total Balance" value="$ 100 000" />
        </div>
        <ButtonIcon icon={<FontAwesomeIcon icon={faAngleDown} />} />
    </div>
);

export default class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="react-rainbow-admin-user-detail_wrapper">
                <div className="react-rainbow-admin-user-detail_top-container">
                    <Breadcrumbs>
                        <Breadcrumb label="Pages" onClick={() => navigateTo('/pages')} />
                        <Breadcrumb label="Users" onClick={() => navigateTo('/pages/users')} />
                        <Breadcrumb label="User Details" />
                    </Breadcrumbs>
                    <Card
                        title={userCardTitle}
                        actions={userCardAction}
                        footer={userCardFooter}
                        className="react-rainbow-admin-user-detail_card">

                        <div className="react-rainbow-admin-user-detail_card-content">
                            <span className="react-rainbow-admin-user-detail_user-name">Leandro Torres</span>
                            <Badge variant="lightest" className="react-rainbow-admin-user-detail_user-status">
                                <FontAwesomeIcon icon={faCheck} style={{ marginRight: '4px' }} />
                                <span>Verified</span>
                            </Badge>
                        </div>
                    </Card>
                    <Card
                        title="Identity"
                        actions={<ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faPencilAlt} />} />}
                        className="react-rainbow-admin-user-detail_card">

                        <div className="react-rainbow-admin-user-detail_card-content react-rainbow-admin-user-detail_user-identity">
                            <UserField
                                label="Name"
                                value="Leandro Torres"
                                className="react-rainbow-admin-user-detail_user-identity_field" />
                            <UserField
                                label="Email address"
                                value="leandro@gmail.com"
                                className="react-rainbow-admin-user-detail_user-identity_field" />
                            <UserField
                                label="Date of birth"
                                value="01/01/1992"
                                className="react-rainbow-admin-user-detail_user-identity_field" />
                            <UserField
                                label="Phone Number"
                                value="+1 111 111 1111"
                                className="react-rainbow-admin-user-detail_user-identity_field" />
                            <UserField
                                label="Address"
                                value="185 Berry St. San Francisco, CA"
                                className="react-rainbow-admin-user-detail_user-identity_field" />
                        </div>
                    </Card>
                </div>
                <span className="react-rainbow-admin-user-detail_orders">Orders</span>
                <OrdersTable orders={orders} />
            </div>
        );
    }
}
