import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-rainbow-components/components/Card';
import Chart from 'react-rainbow-components/components/Chart';
import Badge from 'react-rainbow-components/components/Badge';
import Dataset from 'react-rainbow-components/components/Dataset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default class ChartsSection extends PureComponent {
    render() {
        const {
            chartsData,
            successfulyOrdersAmount,
            totalUsers,
            followersActive,
        } = this.props;
        return (
            <section className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                <Card className="react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">{successfulyOrdersAmount}</h1>
                        <Badge className="react-rainbow-admin-dashboard_badge--success">
                            <FontAwesomeIcon icon={faArrowUp} pull="left" />
                        20.5%
                        </Badge>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                    Total successfuly orders
                    </p>
                    <Chart className="rainbow-p-top_x-small" showLegend={false} labels={chartsData.successfulyOrders.labels} type="line">
                        <Dataset values={chartsData.successfulyOrders.value} backgroundColor="#1de9b6" borderColor="#1de9b6" />
                    </Chart>
                </Card>

                <Card className="react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">{totalUsers}</h1>
                        <Badge className="react-rainbow-admin-dashboard_badge--error">
                            <FontAwesomeIcon icon={faArrowDown} pull="left" />
                        32.5%
                        </Badge>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                    Total users
                    </p>
                    <Chart className="rainbow-p-top_x-small" showLegend={false} labels={chartsData.totalUsers.labels} type="line">
                        <Dataset values={chartsData.totalUsers.value} backgroundColor="#01b6f5" borderColor="#01b6f5" />
                    </Chart>
                </Card>

                <Card className="react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">{followersActive}</h1>
                        <Badge className="react-rainbow-admin-dashboard_badge--success">
                            <FontAwesomeIcon icon={faArrowUp} pull="left" />
                        20.5%
                        </Badge>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                    Total followers active
                    </p>
                    <Chart className="rainbow-p-top_x-small" labels={chartsData.followersActive.labels} type="line">
                        <Dataset title="Google" values={chartsData.followersActive.googleValue} backgroundColor="#fe4849" borderColor="#fe4849" />
                        <Dataset title="Facebook" values={chartsData.followersActive.facebookValue} backgroundColor="#3c5997" borderColor="#3c5997" />
                    </Chart>
                </Card>
            </section>
        );
    }
}

ChartsSection.propTypes = {
    chartsData: PropTypes.object.isRequired,
    successfulyOrdersAmount: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number,
    ]).isRequired,
    totalUsers: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number,
    ]).isRequired,
    followersActive: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number,
    ]).isRequired,
};
