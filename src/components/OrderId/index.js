import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

export default function IdCell({ value }) {
    return (
        <Link className="react-rainbow-admin-order-id_container" to={`/pages/user/${value}`}>
            <div className="react-rainbow-admin-order-id_name rainbow-color_brand">{value}</div>
        </Link>
    );
}

IdCell.propTypes = {
    value: PropTypes.string,
};

IdCell.defaultProps = {
    value: undefined,
};
