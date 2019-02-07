import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-rainbow-components/components/Avatar';
import { PersonIcon } from '../../components/icons';
import Online from './online';

export default function SelectedContact(props) {
    const {
        name,
        photoUrl,
        isOnline,
    } = props;

    const statusText = () => {
        if (isOnline) {
            return 'Active now';
        }
        return 'Inactive';
    };

    return (
        <article className="react-rainbow-admin-messages_body-selected-contact">
            <Avatar
                src={photoUrl}
                icon={<PersonIcon />}
                size="small" />
            <Online isOnline={isOnline} />
            <div className="react-rainbow-admin-messages_body-selected-contact-content">
                <h3 className="react-rainbow-admin-messages_body-selected-contact-name">{name}</h3>
                <p className="react-rainbow-admin-messages_body-selected-contact--status">{statusText()}</p>
            </div>
        </article>
    );
}

SelectedContact.propTypes = {
    photoUrl: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
};

SelectedContact.defaultProps = {
    photoUrl: undefined,
    name: undefined,
    isOnline: false,
};
