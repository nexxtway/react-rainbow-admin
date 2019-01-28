import React from 'react';
import PropTypes from 'prop-types';

export default function UserField(props) {
    const { label, value, className } = props;

    const getClassName = () => {
        if (className) {
            return ` react-rainbow-admin-user-detail_field ${className}`;
        }
        return 'react-rainbow-admin-user-detail_field';
    };

    return (
        <div className={getClassName()}>
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
