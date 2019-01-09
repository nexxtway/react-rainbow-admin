import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Notification(props) {
    const {
        notificationTitle,
        notificationContent,
    } = props;

    return (
        <article className="rainbow-inline-flex rainbow-justify_center rainbow-flex_column">
            <h3 className="rainbow-color_dark-1 rainbow-font-size-text_small">{notificationTitle}</h3>
            <p className="rainbow-color_gray-3 rainbow-font-size-text_x-smalll">{notificationContent}</p>
        </article>
    );
}

Notification.propTypes = {
    notificationTitle: PropTypes.string,
    notificationContent: PropTypes.string,
};

Notification.defaultProps = {
    notificationTitle: undefined,
    notificationContent: undefined,
};
