import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Avatar from 'react-rainbow-components/components/Avatar';
import './styles.css';

export default function NewUser(props) {
    const {
        userName,
        city,
        avatarSrc,
        avatarIcon,
        avatarTitle,
        hasDivider,
        date,
        isActive,
    } = props;

    const getMessasgeContentContainerClassName = () => classnames('react-rainbow-admin-dashboard_card-message--message-container rainbow-m-left_small', {
        'react-rainbow-admin-dashboard_card-message--message-divider rainbow-m-bottom_x-small': hasDivider,
    });

    const getUserActiveClassName = () => classnames('react-rainbow-admin-dashboard_card-users--user-active', {
        'react-rainbow-admin-dashboard_card-users--user-inactive': isActive,
    });

    return (
        <article className="rainbow-flex">
            <Avatar
                className="react-rainbow-admin-dashboard_avatar"
                src={avatarSrc}
                icon={avatarIcon}
                assistiveText={avatarTitle}
                title={avatarTitle} />
            <div className={getMessasgeContentContainerClassName()}>
                <div className="rainbow-flex rainbow-flex_column rainbow-justify_center rainbow-align_start">
                    <h3 className="rainbow-flex rainbow-align_center rainbow-color_brand rainbow-font-size-text_medium rainbow-m-bottom_xx-small">{userName}</h3>
                    <p className="rainbow-color_gray-3 rainbow-font-size-text_small rainbow-m-bottom_x-small">{city}</p>
                </div>
                <div className="rainbow-flex rainbow-flex_column rainbow-justify_center rainbow-align_end">
                    <div className={getUserActiveClassName()} />
                    <p className="rainbow-color_gray-3 rainbow-font-size-text_small">{date}</p>
                </div>
            </div>
        </article>
    );
}

NewUser.propTypes = {
    avatarSrc: PropTypes.string,
    avatarIcon: PropTypes.node,
    userName: PropTypes.string,
    city: PropTypes.string,
    avatarTitle: PropTypes.string,
    date: PropTypes.string,
    hasDivider: PropTypes.bool,
    isActive: PropTypes.bool,
};

NewUser.defaultProps = {
    avatarSrc: undefined,
    avatarIcon: undefined,
    userName: undefined,
    city: undefined,
    avatarTitle: undefined,
    date: undefined,
    hasDivider: true,
    isActive: true,
};
