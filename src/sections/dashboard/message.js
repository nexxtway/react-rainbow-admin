import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Avatar from 'react-rainbow-components/components/Avatar';
import './styles.css';

export default function Message(props) {
    const {
        userName,
        messageData,
        messageContent,
        avatarSrc,
        avatarIcon,
        avatarAssistiveText,
        avatarTitle,
        avatarSize,
        messageDivider,
    } = props;

    const getMessasgeContentContainerClassName = () => classnames('rainbow-m-left_small', {
        'react-rainbow-admin-dashboard_card-message--message-divider rainbow-m-bottom_x-small': messageDivider,
    });

    return (
        <article className="rainbow-flex">
            <Avatar
                className="react-rainbow-admin-dashboard_avatar"
                src={avatarSrc}
                icon={avatarIcon}
                assistiveText={avatarAssistiveText}
                title={avatarTitle}
                size={avatarSize} />
            <div className={getMessasgeContentContainerClassName()}>
                <div className="rainbow-flex rainbow-align_center">
                    <h3 className="rainbow-color_brand rainbow-font-size-text_small rainbow-m-right_xx-small">{userName}</h3>
                    <p className="rainbow-color_gray-3 rainbow-font-size-text_x-small">{`- ${messageData}`}</p>
                </div>
                <p className="rainbow-color_gray-3 rainbow-font-size-text_x-small rainbow-m-bottom_xx-small">{messageContent}</p>
            </div>
        </article>
    );
}

Message.propTypes = {
    avatarSrc: PropTypes.string,
    avatarIcon: PropTypes.node,
    userName: PropTypes.string,
    messageData: PropTypes.string,
    messageContent: PropTypes.string,
    avatarTitle: PropTypes.string,
    avatarSize: PropTypes.string,
    avatarAssistiveText: PropTypes.string,
    messageDivider: PropTypes.bool,
};

Message.defaultProps = {
    avatarSrc: undefined,
    avatarIcon: undefined,
    userName: undefined,
    messageData: undefined,
    messageContent: undefined,
    avatarTitle: undefined,
    avatarSize: undefined,
    avatarAssistiveText: undefined,
    messageDivider: true,
};
