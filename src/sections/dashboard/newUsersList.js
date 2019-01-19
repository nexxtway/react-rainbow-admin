import React from 'react';
import PropTypes from 'prop-types';
import { PersonIcon } from '../../components/icons';
import NewUser from './newUser';

export default function NewUsersList({ newUsers }) {
    return newUsers.map((user, index) => {
        const key = `user-${index}`;
        const lastItemIndex = (newUsers.length - 1);
        const hasDivider = (index !== lastItemIndex);
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
                hasDivider={hasDivider} />
        );
    });
}

NewUsersList.propTypes = {
    newUsers: PropTypes.array.isRequired,
};
