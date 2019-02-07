import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Avatar from 'react-rainbow-components/components/Avatar';
import { PersonIcon } from '../../components/icons';
import Online from './online';

const getClassNames = isSelected => classnames('react-rainbow-admin-messages_contact', {
    'react-rainbow-admin-messages_contact--active': isSelected,
});

export default function Contacts({ contacts, onClick, selectedContactIndex }) {
    return contacts.map((contact, index) => {
        const {
            name,
            photoUrl,
            lastSeenDate,
            lastMessage,
            isOnline,
        } = contact;
        const isSelected = selectedContactIndex === index;
        const key = `contact-${index}`;
        return (
            <article
                role="presentation"
                key={key}
                className={getClassNames(isSelected)}
                onClick={() => onClick(index)}>
                <Avatar
                    className="react-rainbow-admin-messages_contact-avatar"
                    src={photoUrl}
                    icon={<PersonIcon />}
                    size="small" />
                <Online isOnline={isOnline} />
                <div className="react-rainbow-admin-messages_contact-content">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h3 className="react-rainbow-admin-messages_contact-name">{name}</h3>
                        <p className="react-rainbow-admin-messages_contact-time">{lastSeenDate}</p>
                    </div>
                    <p className="react-rainbow-admin-messages_contact-message">{lastMessage}</p>
                </div>
            </article>
        );
    });
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        photoUrl: PropTypes.string,
        name: PropTypes.string,
        lastSeenDate: PropTypes.string,
        lastMessage: PropTypes.string,
        isOnline: PropTypes.bool,
    })),
    onClick: PropTypes.func,
};

Contacts.defaultProps = {
    contacts: [],
    onClick: () => {},
};
