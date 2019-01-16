import React from 'react';
import PropTypes from 'prop-types';
import { PersonIcon } from '../../components/icons';
import NewUser from './newUser';

export default function NewUsersList({ newUsers }) {
    return newUsers.map((user, index) => {
        const key = `user-${index}`;
        if (index === (newUsers.length - 1)) {
            return (
                <NewUser
                    key={key}
                    avatarIcon={<PersonIcon />}
                    avatarSrc={user.avatar}
                    userName={user.userName}
                    city={user.city}
                    avatarTitle={user.avatarTitle}
                    date={user.date}
                    isActive={user.isActive}
                    hasDivider={false} />
            );
        }
        return (
            <NewUser
                key={key}
                avatarIcon={<PersonIcon />}
                avatarSrc={user.avatar}
                userName={user.userName}
                city={user.city}
                avatarTitle={user.avatarTitle}
                date={user.date}
                isActive={user.isActive} />
        );
    });
}

NewUsersList.propTypes = {
    newUsers: PropTypes.array.isRequired,
};
