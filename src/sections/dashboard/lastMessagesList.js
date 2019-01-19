import React from 'react';
import PropTypes from 'prop-types';
import { PersonIcon } from '../../components/icons';
import Message from './message';

export default function LastMessagesList({ lastMessages }) {
    return lastMessages.map((message, index) => {
        const key = `message-${index}`;
        const lastItemIndex = (lastMessages.length - 1);
        const hasDivider = (index !== lastItemIndex);
        const {
            avatar,
            userName,
            date,
            content,
            avatarTitle,
        } = message;
        return (
            <Message
                key={key}
                avatarIcon={<PersonIcon />}
                avatarSrc={avatar}
                userName={userName}
                date={date}
                content={content}
                avatarTitle={avatarTitle}
                hasDivider={hasDivider} />
        );
    });
}

LastMessagesList.propTypes = {
    lastMessages: PropTypes.array.isRequired,
};
