import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Badge } from 'react-rainbow-components';

export default function Status({ value }) {
    function getClassName() {
        if (value === 'VERIFIED') {
            return 'react-rainbow-admin-orders_status-verified';
        }
        if (value === 'EXPIRED') {
            return 'react-rainbow-admin-orders_status-expired';
        }
        return 'react-rainbow-admin-orders_status-processing';
    }

    function getIcon() {
        if (value === 'VERIFIED') {
            return faCheck;
        }
        if (value === 'EXPIRED') {
            return faExclamation;
        }
        return faClock;
    }

    return (
        <Badge className={getClassName()} variant="lightest">
            <FontAwesomeIcon icon={getIcon()} pull="left" size="sm" />
            {value}
        </Badge>
    );
}

Status.propTypes = {
    value: PropTypes.string,
};

Status.defaultProps = {
    value: undefined,
};
