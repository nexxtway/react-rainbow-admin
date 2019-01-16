/* eslint-disable no-script-url, jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from 'react-rainbow-components/components/Card';
import Badge from 'react-rainbow-components/components/Badge';
import Chart from 'react-rainbow-components/components/Chart';
import Dataset from 'react-rainbow-components/components/Dataset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import {
    ShoppingCartIcon,
    UsersIcon,
    LikeIcon,
    ErrorIcon,
} from '../../components/icons';
import Tile from './tile';
import LastMessagesList from './lastMessagesList';
import NewUsersList from './newUsersList';
import PageHeader from '../../components/PageHeader';
import { fetchDashboardData } from '../../redux/actions/Dashboard';
import './styles.css';

export class Dashboard extends Component {
    componentDidMount() {
        const { fetchDashboardData } = this.props;
        fetchDashboardData();
    }

    render() {
        const {
            totals,
            chartsData,
            lastMessages,
            newUsers,
        } = this.props;

        return (
            <div className="react-rainbow-admin-dashboard_view-port rainbow-background-color_gray-1">
                <PageHeader
                    title="Dashboard"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

                <section className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                    <Tile
                        label="Orders"
                        total={totals.orders}
                        icon={<ShoppingCartIcon />} />

                    <Tile
                        label="Users"
                        total={totals.users}
                        icon={<UsersIcon className="react-rainbow-admin-dashboard_tile-icon" />} />

                    <Tile
                        label="Followers"
                        total={totals.fallowers}
                        icon={<LikeIcon />} />

                    <Tile
                        label="Errors"
                        total={totals.errors}
                        icon={<ErrorIcon />} />
                </section>

                <section className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                    <Card className="react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                        <div className="rainbow-flex rainbow-justify_spread">
                            <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">{totals.successfulyOrdersAmount}</h1>
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
                            <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">{totals.totalUsers}</h1>
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
                            <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">{totals.fallowersActive}</h1>
                            <Badge className="react-rainbow-admin-dashboard_badge--success">
                                <FontAwesomeIcon icon={faArrowUp} pull="left" />
                            20.5%
                            </Badge>
                        </div>
                        <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        Total followers active
                        </p>
                        <Chart className="rainbow-p-top_x-small" labels={chartsData.fallowersActive.labels} type="line">
                            <Dataset title="Google" values={chartsData.fallowersActive.googleValue} backgroundColor="#fe4849" borderColor="#fe4849" />
                            <Dataset title="Facebook" values={chartsData.fallowersActive.facebookValue} backgroundColor="#3c5997" borderColor="#3c5997" />
                        </Chart>
                    </Card>
                </section>

                <section className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                    <Card className="react-rainbow-admin-dashboard_card rainbow-p-top_medium rainbow-p-bottom_small rainbow-p-horizontal_small">
                        <h1 className="rainbow-color_gray-4 rainbow-font-size-heading_small rainbow-p-bottom_medium">
                        Last Messages
                        </h1>

                        <LastMessagesList lastMessages={lastMessages} />

                        <div className="react-rainbow-admin-dashboard_card-message--divider" />

                        <div className="rainbow-p-top_small rainbow-align-content_center">
                            <a
                                className="react-rainbow-admin-dashboard_card-message--footer-link rainbow-color_brand"
                                href="javascript:void(0);"
                                target="_blank"
                                rel="noopener noreferrer">
                            View all messages
                            </a>
                        </div>
                    </Card>

                    <Card className="react-rainbow-admin-dashboard_card rainbow-p-top_medium rainbow-p-bottom_small rainbow-p-horizontal_small">
                        <h1 className="rainbow-color_gray-4 rainbow-font-size-heading_small rainbow-p-bottom_medium">
                        New Users
                        </h1>

                        <NewUsersList newUsers={newUsers} />

                        <div className="react-rainbow-admin-dashboard_card-message--divider" />

                        <div className="rainbow-p-top_small rainbow-align-content_center">
                            <a
                                className="react-rainbow-admin-dashboard_card-message--footer-link rainbow-color_brand"
                                href="javascript:void(0);"
                                target="_blank"
                                rel="noopener noreferrer">
                            View all messages
                            </a>
                        </div>
                    </Card>
                </section>

            </div>
        );
    }
}

Dashboard.propTypes = {
    fetchDashboardData: PropTypes.func.isRequired,
    totals: PropTypes.object.isRequired,
    chartsData: PropTypes.object.isRequired,
    lastMessages: PropTypes.array.isRequired,
    newUsers: PropTypes.array.isRequired,
};

function stateToProps(state) {
    return state.dashboard;
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        fetchDashboardData,
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(Dashboard);
