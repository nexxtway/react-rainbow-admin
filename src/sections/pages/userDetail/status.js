import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Badge } from 'react-rainbow-components';

const iconMap = {
    VERIFIED: faCheck,
    EXPIRED: faExclamation,
    PROCESSING: faClock,
};
export default function Status({ value }) {
    const getClassName = () => classnames({
        'react-rainbow-admin-user-detail_status-verified': value === 'VERIFIED',
        'react-rainbow-admin-user-detail_status-expired': value === 'EXPIRED',
        'react-rainbow-admin-user-detail_status-processing': value === 'PROCESSING',
    });

    const Icon = iconMap[value];

    return (
        <Badge className={getClassName()} variant="lightest">
            <FontAwesomeIcon icon={Icon} pull="left" size="sm" />
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
