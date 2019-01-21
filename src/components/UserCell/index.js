import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import './styles.css';

export default function UserCell({ value }) {
    return (
        <div className="react-rainbow-admin-table-user_container">
            <Avatar src={value.photoUrl} icon={<FontAwesomeIcon icon={faUserCircle} size="3x" />} size="small" />
            <div className="react-rainbow-admin-table-user_name">{value.name}</div>
        </div>
    );
}

UserCell.propTypes = {
    value: PropTypes.object,
};

UserCell.defaultProps = {
    value: undefined,
};
