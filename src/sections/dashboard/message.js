import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Avatar from 'react-rainbow-components/components/Avatar';
import './styles.css';

export default function Message(props) {
    const {
        userName,
        messageDate,
        message,
        avatarSrc,
        avatarIcon,
        avatarTitle,
        hasDivider,
    } = props;

    const getMessasgeContentContainerClassName = () => classnames('rainbow-m-left_small', {
        'react-rainbow-admin-dashboard_card-message--message-divider rainbow-m-bottom_x-small': hasDivider,
    });

    return (
        <article className="rainbow-flex">
            <Avatar
                className="react-rainbow-admin-dashboard_avatar"
                src={avatarSrc}
                icon={avatarIcon}
                assistiveText={avatarTitle}
                title={avatarTitle}
                size="small" />
            <div className={getMessasgeContentContainerClassName()}>
                <div className="rainbow-flex rainbow-align_center">
                    <h3 className="rainbow-color_brand rainbow-font-size-text_small rainbow-m-right_xx-small">{userName}</h3>
                    <p className="rainbow-color_gray-3 rainbow-font-size-text_x-small">{`- ${messageDate}`}</p>
                </div>
                <p className="rainbow-color_gray-3 rainbow-font-size-text_x-small rainbow-m-bottom_xx-small">{message}</p>
            </div>
        </article>
    );
}

Message.propTypes = {
    avatarSrc: PropTypes.string,
    avatarIcon: PropTypes.node,
    userName: PropTypes.string,
    messageDate: PropTypes.string,
    message: PropTypes.string,
    avatarTitle: PropTypes.string,
    hasDivider: PropTypes.bool,
};

Message.defaultProps = {
    avatarSrc: undefined,
    avatarIcon: undefined,
    userName: undefined,
    messageDate: undefined,
    message: undefined,
    avatarTitle: undefined,
    hasDivider: true,
};
