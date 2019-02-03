import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

export default function UserIdCell({ value }) {
    return (
        <Link className="react-rainbow-admin-users_user-id-cell-container" to={`/pages/user/${value.id}`}>
            <div className="react-rainbow-admin-users_user-id-cell rainbow-color_brand">{value.id}</div>
        </Link>
    );
}

UserIdCell.propTypes = {
    value: PropTypes.object,
};

UserIdCell.defaultProps = {
    value: undefined,
};
