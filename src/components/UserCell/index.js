import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-rainbow-components';
import { PersonIcon } from '../icons';
import './styles.css';

export default function UserCell({ value }) {
    return (
        <div className="react-rainbow-admin-user-cell_container">
            <Avatar src={value.photoUrl} icon={<PersonIcon />} size="small" />
            <div className="react-rainbow-admin-user-cell_name">{value.name}</div>
        </div>
    );
}

UserCell.propTypes = {
    value: PropTypes.object,
};

UserCell.defaultProps = {
    value: undefined,
};
