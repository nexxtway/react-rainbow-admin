import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

export default function User({ value }) {
    function getIcon() {
        if (value.photoUrl) {
            return null;
        }
        return <FontAwesomeIcon icon={faUserCircle} size="3x" />;
    }

    return (
        <div className="react-rainbow-admin-orders_user">
            <Avatar src={value.photoUrl} icon={getIcon()} size="small" />
            <div className="react-rainbow-admin-orders_user-name">{value.name}</div>
        </div>
    );
}

User.propTypes = {
    value: PropTypes.object,
};

User.defaultProps = {
    value: undefined,
};
