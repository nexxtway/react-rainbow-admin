import React from 'react';
import PropTypes from 'prop-types';
import { PersonIcon } from '../../components/icons';
import Message from './message';

export default function LastMessagesList({ lastMessages }) {
    return lastMessages.map((message, index) => {
        const key = `message-${index}`;
        if (index === (lastMessages.length - 1)) {
            return (
                <Message
                    key={key}
                    avatarIcon={<PersonIcon />}
                    avatarSrc={message.avatar}
                    userName={message.userName}
                    date={message.date}
                    content={message.content}
                    avatarTitle={message.avatarTitle}
                    hasDivider={false} />
            );
        }
        return (
            <Message
                key={key}
                avatarIcon={<PersonIcon />}
                avatarSrc={message.avatar}
                userName={message.userName}
                date={message.date}
                content={message.content}
                avatarTitle={message.avatarTitle} />
        );
    });
}

LastMessagesList.propTypes = {
    lastMessages: PropTypes.array.isRequired,
};
