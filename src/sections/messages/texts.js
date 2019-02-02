import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Avatar } from 'react-rainbow-components';
import { PersonIcon } from '../../components/icons';
import TextSent from './textSent';

export default function Texts({ texts }) {
    const getClassNames = isUser => classnames('react-rainbow-admin-messages_message', {
        'rainbow-flex_row-reverse': isUser,
    });

    const getTextClassNames = isUser => classnames(
        { 'react-rainbow-admin-messages_message-text-contact': !isUser },
        { 'react-rainbow-admin-messages_message-text-user': isUser },
    );

    return texts.map((text, index) => {
        const {
            avatarSrc,
            message,
            isUser,
            checked,
            dateSend,
        } = text;
        const key = `contact-${index}`;
        return (
            <div key={key} className={getClassNames(isUser)}>
                <Avatar
                    className="react-rainbow-admin-messages_message-avatar"
                    src={avatarSrc}
                    icon={<PersonIcon />}
                    size="medium" />
                <TextSent isUser={isUser} checked={checked} date={dateSend} />
                <p className={getTextClassNames(isUser)}>{message}</p>
            </div>
        );
    });
}

Texts.propTypes = {
    texts: PropTypes.arrayOf(PropTypes.shape({
        avatarSrc: PropTypes.string,
        message: PropTypes.string,
        isUser: PropTypes.bool,
        checked: PropTypes.bool,
        dateSend: PropTypes.string,
    })),
};

Texts.defaultProps = {
    texts: [],
};
