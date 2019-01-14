import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

export default function User(props) {
    const {
        name,
        src,
    } = props;

    function getIcon() {
        if (src) {
            return null;
        }
        return <FontAwesomeIcon icon={faUserCircle} size="3x" />;
    }

    return (
        <div className="react-rainbow-admin-users_user">
            <Avatar src={src} icon={getIcon()} size="small" />
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
