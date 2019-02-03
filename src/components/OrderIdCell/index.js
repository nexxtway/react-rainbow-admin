import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';

export default function OrderIdCell({ value }) {
    return (
        <Link className="react-rainbow-admin-order-id-cell_container" to={`/pages/user/${value}`}>
            <div className="react-rainbow-admin-order-id-cell_name rainbow-color_brand">{value}</div>
        </Link>
    );
}

OrderIdCell.propTypes = {
    value: PropTypes.string,
};

OrderIdCell.defaultProps = {
    value: undefined,
};
