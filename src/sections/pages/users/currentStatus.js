import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function CurrentStatus(props) {
    const {
        value,
    } = props;

    function getColor() {
        if (value === 'ONLINE') {
            return '#1de9b6';
        }
        return '#fe4849';
    }

    return (
        <div className="react-rainbow-admin-users_current-status">
            <FontAwesomeIcon icon={faCircle} pull="left" size="sm" color={getColor()} />
            <div className="react-rainbow-admin-users_current-status_value">{value}</div>
        </div>
    );
}

CurrentStatus.propTypes = {
    value: PropTypes.string,
};

CurrentStatus.defaultProps = {
    value: undefined,
};
