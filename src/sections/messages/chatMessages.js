import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Avatar } from 'react-rainbow-components';
import { PersonIcon } from '../../components/icons';
import SentText from './sentText';

const getClassNames = isUser => classnames('react-rainbow-admin-messages_message', {
    'rainbow-flex_row-reverse': isUser,
});

const getTextClassNames = isUser => classnames({
    'react-rainbow-admin-messages_message-text-contact': !isUser,
    'react-rainbow-admin-messages_message-text-user': isUser,
});

export default function ChatMessages({ messages }) {
    return messages.map((message, index) => {
        const {
            photoUrl,
            text,
            isUser,
            isChecked,
            sentDate,
        } = message;
        const key = `contact-${index}`;
        return (
            <div key={key} className={getClassNames(isUser)}>
                <Avatar
                    className="react-rainbow-admin-messages_message-avatar"
                    src={photoUrl}
                    icon={<PersonIcon />}
                    size="medium" />
                <SentText isUser={isUser} isChecked={isChecked} date={sentDate} />
                <p className={getTextClassNames(isUser)}>{text}</p>
            </div>
        );
    });
}

ChatMessages.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        photoUrl: PropTypes.string,
        text: PropTypes.string,
        isUser: PropTypes.bool,
        isChecked: PropTypes.bool,
        sentDate: PropTypes.string,
    })),
};

ChatMessages.defaultProps = {
    messages: [],
};
