import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

export default function User({ name, src }) {
    return (
        <div className="react-rainbow-admin-users_user">
            <Avatar src={src} icon={<FontAwesomeIcon icon={faUserCircle} size="3x" />} size="small" />
            <div className="react-rainbow-admin-users_user-name">{name}</div>
        </div>
    );
}

User.propTypes = {
    name: PropTypes.string,
    src: PropTypes.string,
};

User.defaultProps = {
    name: undefined,
    src: undefined,
};
