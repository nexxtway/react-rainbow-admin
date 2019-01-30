import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default function UserField(props) {
    const { label, value, className } = props;

    const getClassNames = () => classnames('react-rainbow-admin-user-detail_field', className);

    return (
        <div className={getClassNames()}>
            <span className="react-rainbow-admin-user-detail_field-label">{label}</span>
            <span className="react-rainbow-admin-user-detail_field-value">{value}</span>
        </div>
    );
}

UserField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    className: PropTypes.string,
};

UserField.defaultProps = {
    className: undefined,
};
