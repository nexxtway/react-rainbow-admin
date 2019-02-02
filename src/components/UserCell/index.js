import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Avatar } from 'react-rainbow-components';
import { PersonIcon } from '../icons';
import './styles.css';

export default function UserCell({ value }) {
    return (
        <Link className="react-rainbow-admin-user-cell_container" to={`/pages/user/${value.id}`}>
            <Avatar src={value.photoUrl} icon={<PersonIcon />} size="small" />
            <div className="react-rainbow-admin-user-cell_name rainbow-color_brand">{value.name}</div>
        </Link>
    );
}

UserCell.propTypes = {
    value: PropTypes.object,
};

UserCell.defaultProps = {
    value: undefined,
};
