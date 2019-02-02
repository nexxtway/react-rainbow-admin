import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

export default function UserId({ value }) {
    return (
        <Link className="react-rainbow-admin-users_user-id-container" to={`/pages/user/${value.id}`}>
            <div className="react-rainbow-admin-users_user-id rainbow-color_brand">{value.id}</div>
        </Link>
    );
}

UserId.propTypes = {
    value: PropTypes.object,
};

UserId.defaultProps = {
    value: undefined,
};
