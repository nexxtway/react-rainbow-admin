import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Notification(props) {
    const {
        title,
        content,
    } = props;

    return (
        <div className="rainbow-inline-flex rainbow-justify_center rainbow-flex_column">
            <h3 className="rainbow-color_dark-1 rainbow-font-size-text_small">{title}</h3>
            <p className="rainbow-color_gray-3 rainbow-font-size-text_x-smalll">{content}</p>
        </div>
    );
}

Notification.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

Notification.defaultProps = {
    title: undefined,
    content: undefined,
};
