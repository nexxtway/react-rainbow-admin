import React from 'react';
import PropTypes from 'prop-types';

export default function Online({ isOnline }) {
    if (isOnline) {
        return <span className="react-rainbow-admin-messages_contact--online" />;
    }
    return null;
}

Online.propTypes = {
    isOnline: PropTypes.bool,
};

Online.defaultProps = {
    isOnline: false,
};
