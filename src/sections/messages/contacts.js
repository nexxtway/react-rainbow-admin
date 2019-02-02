import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Avatar from 'react-rainbow-components/components/Avatar';
import { PersonIcon } from '../../components/icons';
import './styles.css';

export default function Contacts({ contacts }) {
    const getClassNames = isActive => classnames('react-rainbow-admin-messages_contact', {
        'react-rainbow-admin-messages_contact--active': isActive,
    });

    return contacts.map((contact, index) => {
        const {
            name,
            avatarSrc,
            lastDateSeen,
            lastMessage,
            isActive,
        } = contact;
        const key = `contact-${index}`;
        return (
            <article key={key} className={getClassNames(isActive)}>
                <Avatar
                    className="react-rainbow-admin-messages_contact-avatar"
                    src={avatarSrc}
                    icon={<PersonIcon />}
                    size="small" />
                <div className="react-rainbow-admin-messages_contact-content">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h3 className="react-rainbow-admin-messages_contact-name">{name}</h3>
                        <p className="react-rainbow-admin-messages_contact-time">{lastDateSeen}</p>
                    </div>
                    <p className="react-rainbow-admin-messages_contact-message">{lastMessage}</p>
                </div>
            </article>
        );
    });
}

Contacts.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        avatarSrc: PropTypes.string,
        name: PropTypes.string,
        lastDateSeen: PropTypes.string,
        lastMessage: PropTypes.string,
        isActive: PropTypes.bool,
    })),
};

Contacts.defaultProps = {
    contacts: [],
};
