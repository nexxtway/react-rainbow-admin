import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-rainbow-components/components/Card';
import Chart from 'react-rainbow-components/components/Chart';
import Badge from 'react-rainbow-components/components/Badge';
import Dataset from 'react-rainbow-components/components/Dataset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default class ChartsSection extends PureComponent {
    render() {
        const {
            chartsData,
        } = this.props;
        return (
            <section className="react-rainbow-admin-orders_cards-container">
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
                            <Dataset values={chartsData.totalUsers.value} borderColor="#1de9b6" backgroundColor="#1de9b6" />
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
                            <Dataset values={chartsData.activeUsers.value} borderColor="#1de9b6" backgroundColor="#1de9b6" />
                        </Chart>
                    </div>
                </Card>
            </section>
        );
    }
}

ChartsSection.propTypes = {
    chartsData: PropTypes.object.isRequired,
};
