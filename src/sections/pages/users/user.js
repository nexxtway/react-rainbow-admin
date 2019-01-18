import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

export default function User({ value }) {
    return (
        <div className="react-rainbow-admin-users_user">
            <Avatar src={value.photoUrl} icon={<FontAwesomeIcon icon={faUserCircle} size="3x" />} size="small" />
            <div className="react-rainbow-admin-users_user-name">{value.name}</div>
        </div>
    );
}

User.propTypes = {
    value: PropTypes.object,
};

User.defaultProps = {
    value: undefined,
};
