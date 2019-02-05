import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Avatar from 'react-rainbow-components/components/Avatar';
import { PersonIcon } from '../../components/icons';
import './styles.css';

const getClassNames = isActive => classnames('react-rainbow-admin-messages_contact', {
    'react-rainbow-admin-messages_contact--active': isActive,
});

export default function Contacts({ contacts }) {
    return contacts.map((contact, index) => {
        const {
            name,
            photoUrl,
            lastSeenDate,
            lastMessage,
            isSelected,
        } = contact;
        const key = `contact-${index}`;
        return (
            <article key={key} className={getClassNames(isSelected)}>
                <Avatar
                    className="react-rainbow-admin-messages_contact-avatar"
                    src={photoUrl}
                    icon={<PersonIcon />}
                    size="small" />
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
        isSelected: PropTypes.bool,
    })),
};

Contacts.defaultProps = {
    contacts: [],
};
