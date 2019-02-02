import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Badge } from 'react-rainbow-components';
import './styles.css';

const iconMap = {
    VERIFIED: faCheck,
    EXPIRED: faExclamation,
    PROCESSING: faClock,
};
export default function Status({ value }) {
    const getClassNames = () => classnames({
        'react-rainbow-admin-orders-table--verified': value === 'VERIFIED',
        'react-rainbow-admin-orders-table--expired': value === 'EXPIRED',
        'react-rainbow-admin-orders-table--processing': value === 'PROCESSING',
    });

    const Icon = iconMap[value];

    return (
        <Badge className={getClassNames()} variant="lightest">
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
