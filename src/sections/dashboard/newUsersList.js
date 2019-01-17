import React from 'react';
import PropTypes from 'prop-types';
import { PersonIcon } from '../../components/icons';
import NewUser from './newUser';

export default function NewUsersList({ newUsers }) {
    return newUsers.map((user, index) => {
        const key = `user-${index}`;
        const divider = (index !== (newUsers.length - 1));
        const {
            avatar,
            userName,
            city,
            avatarTitle,
            date,
            isActive,
        } = user;
        return (
            <NewUser
                key={key}
                avatarIcon={<PersonIcon />}
                avatarSrc={avatar}
                userName={userName}
                city={city}
                avatarTitle={avatarTitle}
                date={date}
                isActive={isActive}
                hasDivider={divider} />
        );
    });
}

NewUsersList.propTypes = {
    newUsers: PropTypes.array.isRequired,
};
