import React from 'react';
import PropTypes from 'prop-types';
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
    ButtonGroup,
    ButtonIcon,
    Card,
    Spinner,
} from 'react-rainbow-components';
import UserField from './userField';
import OrdersTable from './ordersTable';

export default function ContentPage(props) {
    const {
        orders,
        userDetails: {
            dataProvider,
            name,
            status,
            payments,
            totalBalance,
            birth,
            address,
            email,
            phoneNumber,
        },
        isLoading,
    } = props;

    const userCardTitle = (
        <span className="rainbow-color_gray-4 rainbow-font-size-heading_small rainbow-flex">
            <span className="react-rainbow-admin-user-detail_icon">
                <FontAwesomeIcon icon={faFacebookF} />
            </span>
            {dataProvider}
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
                <UserField label="Payments" value={payments} />
                <div className="react-rainbow-admin-user-detail_vertical-divider" />
                <UserField label="Total Balance" value={totalBalance} />
            </div>
            <ButtonIcon icon={<FontAwesomeIcon icon={faAngleDown} />} />
        </div>
    );

    if (isLoading) {
        return <Spinner size="large" />;
    }
    return (
        <div>
            <div className="react-rainbow-admin-user-detail_cards-container">
                <Card
                    title={userCardTitle}
                    actions={userCardAction}
                    footer={userCardFooter}
                    className="react-rainbow-admin-user-detail_card">

                    <div className="react-rainbow-admin-user-detail_card-content">
                        <span className="react-rainbow-admin-user-detail_user-name">{name}</span>
                        <Badge variant="lightest" className="react-rainbow-admin-user-detail_user-status">
                            <FontAwesomeIcon icon={faCheck} pull="left" />
                            <span>{status}</span>
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
                            value={name}
                            className="react-rainbow-admin-user-detail_user-identity_field" />
                        <UserField
                            label="Email address"
                            value={email}
                            className="react-rainbow-admin-user-detail_user-identity_field" />
                        <UserField
                            label="Date of birth"
                            value={birth}
                            className="react-rainbow-admin-user-detail_user-identity_field" />
                        <UserField
                            label="Phone Number"
                            value={phoneNumber}
                            className="react-rainbow-admin-user-detail_user-identity_field" />
                        <UserField
                            label="Address"
                            value={address}
                            className="react-rainbow-admin-user-detail_user-identity_field" />
                    </div>
                </Card>
            </div>
            <span className="react-rainbow-admin-user-detail_orders">Orders</span>
            <OrdersTable orders={orders} />
        </div>
    );
}

ContentPage.propTypes = {
    orders: PropTypes.array.isRequired,
    userDetails: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
