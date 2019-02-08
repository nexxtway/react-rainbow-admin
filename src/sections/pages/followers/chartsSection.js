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
        } = this.props;
        return (
            <div>
                <section className="react-rainbow-admin-followers_section rainbow-align-content_space-between rainbow-p-top_large">
                    <Card className="react-rainbow-admin-followers_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                        <div className="rainbow-flex rainbow-justify_spread">
                            <h1 className="react-rainbow-admin-followers_card-chart--title rainbow-color_dark-1 rainbow-p-bottom_medium">facebook users</h1>
                            <Badge className="react-rainbow-admin-followers_badge--success">
                                <FontAwesomeIcon icon={faArrowUp} pull="left" />
                            20.5%
                            </Badge>
                        </div>
                        <p className="react-rainbow-admin-followers_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        Total users
                        </p>
                        <Chart
                            className="react-rainbow-admin-followers_chart rainbow-p-top_x-small"
                            maintainAspectRatio={false}
                            labels={chartsData.facebook.labels}
                            type="line"
                            showLegend={false}>
                            <Dataset values={chartsData.facebook.value} borderColor="#3c5997" backgroundColor="#3c5997" />
                        </Chart>
                    </Card>

                    <Card className="react-rainbow-admin-followers_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                        <div className="rainbow-flex rainbow-justify_spread">
                            <h1 className="react-rainbow-admin-followers_card-chart--title rainbow-color_dark-1 rainbow-p-bottom_medium">google users</h1>
                            <Badge className="react-rainbow-admin-followers_badge--success">
                                <FontAwesomeIcon icon={faArrowUp} pull="left" />
                            20.5%
                            </Badge>
                        </div>
                        <p className="react-rainbow-admin-followers_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        Total users
                        </p>
                        <Chart
                            className="react-rainbow-admin-followers_chart rainbow-p-top_x-small"
                            maintainAspectRatio={false}
                            labels={chartsData.google.labels}
                            type="line"
                            showLegend={false}>
                            <Dataset values={chartsData.google.value} borderColor="#fe4849" backgroundColor="#fe4849" />
                        </Chart>
                    </Card>
                </section>

                <section className="react-rainbow-admin-followers_section rainbow-align-content_space-between rainbow-p-top_large">
                    <Card className="react-rainbow-admin-followers_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                        <div className="rainbow-flex rainbow-justify_spread">
                            <h1 className="react-rainbow-admin-followers_card-chart--title rainbow-color_dark-1 rainbow-p-bottom_medium">twitter users</h1>
                            <Badge className="react-rainbow-admin-followers_badge--success">
                                <FontAwesomeIcon icon={faArrowUp} pull="left" />
                            20.5%
                            </Badge>
                        </div>
                        <p className="react-rainbow-admin-followers_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        Total users
                        </p>
                        <Chart
                            className="react-rainbow-admin-followers_chart rainbow-p-top_x-small"
                            maintainAspectRatio={false}
                            labels={chartsData.twitter.labels}
                            type="line"
                            showLegend={false}>
                            <Dataset values={chartsData.twitter.value} borderColor="#00b0f3" backgroundColor="#00b0f3" />
                        </Chart>
                    </Card>

                    <Card className="react-rainbow-admin-followers_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                        <div className="rainbow-flex rainbow-justify_spread">
                            <h1 className="react-rainbow-admin-followers_card-chart--title rainbow-color_dark-1 rainbow-p-bottom_medium">linkedin users</h1>
                            <Badge className="react-rainbow-admin-followers_badge--error">
                                <FontAwesomeIcon icon={faArrowDown} pull="left" />
                            2.5%
                            </Badge>
                        </div>
                        <p className="react-rainbow-admin-followers_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        Total users
                        </p>
                        <Chart
                            className="react-rainbow-admin-followers_chart rainbow-p-top_x-small"
                            maintainAspectRatio={false}
                            labels={chartsData.linkedin.labels}
                            type="line"
                            showLegend={false}>
                            <Dataset values={chartsData.linkedin.value} borderColor="#0077b5" backgroundColor="#0077b5" />
                        </Chart>
                    </Card>
                </section>
            </div>
        );
    }
}

ChartsSection.propTypes = {
    chartsData: PropTypes.object.isRequired,
};
