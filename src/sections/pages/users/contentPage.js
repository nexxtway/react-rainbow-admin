import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-rainbow-components';
import UsersTabs from './usersTabs';
import ChartsSection from './chartsSection';


export default function ContentPage(props) {
    const {
        users,
        chartsData,
        isLoading,
    } = props;

    if (isLoading) {
        return <Spinner size="large" />;
    }
    return (
        <div>
            <ChartsSection chartsData={chartsData} />
            <UsersTabs users={users} />
        </div>
    );
}

ContentPage.propTypes = {
    users: PropTypes.array.isRequired,
    chartsData: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
