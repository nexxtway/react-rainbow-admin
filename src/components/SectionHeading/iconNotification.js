import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function IconNotification({ icon }) {
    return (
        <div className="react-rainbow-admin_header--notification-icon-container">{icon}</div>
    );
}

IconNotification.propTypes = {
    icon: PropTypes.node,
};

IconNotification.defaultProps = {
    icon: undefined,
};
