import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {
    Badge, Card, Chart, Dataset, Spinner,
} from 'react-rainbow-components';
import UsersTabs from './usersTabs';


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
            <div className="react-rainbow-admin-users_cards-container">
                <Card
                    className="react-rainbow-admin-users_card"
                    title="114 245"
                    actions={(
                        <Badge variant="brand" className="react-rainbow-admin-users_badge">
                            <FontAwesomeIcon icon={faArrowUp} pull="left" size="sm" />
                            20.5%
                        </Badge>
                    )}>
                    <h1 className="react-rainbow-admin-users_card-title">Total users</h1>
                    <div className="react-rainbow-admin-users_chart">
                        <Chart
                            labels={chartsData.totalUsers.labels}
                            type="line"
                            showLegend={false}
                            maintainAspectRatio={false}>
                            <Dataset values={chartsData.totalUsers.value} borderColor="#1de9b6" />
                        </Chart>
                    </div>
                </Card>
                <Card
                    className="react-rainbow-admin-users_card"
                    title="94 988"
                    actions={(
                        <Badge className="react-rainbow-admin-users_badge" variant="brand">
                            <FontAwesomeIcon icon={faArrowUp} pull="left" size="sm" />
                            20.5%
                        </Badge>
                    )}>
                    <h1 className="react-rainbow-admin-users_card-title">Active users</h1>
                    <div className="react-rainbow-admin-users_chart">
                        <Chart
                            labels={chartsData.activeUsers.labels}
                            type="line"
                            showLegend={false}
                            maintainAspectRatio={false}>
                            <Dataset values={chartsData.activeUsers.value} borderColor="#1de9b6" />
                        </Chart>
                    </div>
                </Card>
            </div>
            <UsersTabs users={users} />
        </div>
    );
}

ContentPage.propTypes = {
    users: PropTypes.array.isRequired,
    chartsData: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
