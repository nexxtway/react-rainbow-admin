import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Spinner from 'react-rainbow-components/components/Spinner';
import {
    ShoppingCartIcon,
    UsersIcon,
    LikeIcon,
    ErrorIcon,
} from '../../components/icons';
import ListCard from './listCard';
import ChartsSection from './chartsSection';
import LastMessagesList from './lastMessagesList';
import NewUsersList from './newUsersList';
import PageHeader from '../../components/PageHeader';
import Tile from '../../components/Tile';
import fetchDashboardData from '../../redux/actions/dashboard';
import './styles.css';

function ContentPage(props) {
    const {
        totals: {
            orders,
            users,
            followers,
            errors,
            successfulyOrdersAmount,
            totalUsers,
            followersActive,
        },
        chartsData,
        lastMessages,
        newUsers,
        isLoading,
    } = props;

    if (isLoading) {
        return <Spinner size="large" />;
    } return (
        <div>
            <section className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                <Tile
                    title="Orders"
                    label={orders}
                    icon={<ShoppingCartIcon />} />

                <Tile
                    title="Users"
                    label={users}
                    icon={<UsersIcon className="react-rainbow-admin-dashboard_tile-icon" />} />

                <Tile
                    title="Followers"
                    label={followers}
                    icon={<LikeIcon />} />

                <Tile
                    title="Errors"
                    label={errors}
                    icon={<ErrorIcon />} />
            </section>

            <ChartsSection
                chartsData={chartsData}
                successfulyOrdersAmount={successfulyOrdersAmount}
                totalUsers={totalUsers}
                followersActive={followersActive} />

            <section className="react-rainbow-admin-dashboard_section rainbow-align-content_space-between rainbow-p-top_large">
                <ListCard
                    title="Last Messages"
                    component={<LastMessagesList lastMessages={lastMessages} />}
                    footerLink={(
                        <Link className="react-rainbow-admin-dashboard_list-card--footer-link rainbow-color_brand" to="/messages">
                            View all messages
                        </Link>
                    )} />

                <ListCard
                    title="New Users"
                    component={<NewUsersList newUsers={newUsers} />}
                    footerLink={(
                        <Link className="react-rainbow-admin-dashboard_list-card--footer-link rainbow-color_brand" to="/pages/users">
                            View all users
                        </Link>
                    )} />
            </section>
        </div>
    );
}

ContentPage.propTypes = {
    totals: PropTypes.object.isRequired,
    chartsData: PropTypes.object.isRequired,
    lastMessages: PropTypes.array.isRequired,
    newUsers: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

class Dashboard extends Component {
    componentDidMount() {
        const { fetchDashboardData } = this.props;
        fetchDashboardData();
    }

    render() {
        return (
            <div className="react-rainbow-admin-dashboard_view-port">
                <PageHeader
                    title="Dashboard"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <ContentPage {...this.props} />
            </div>
        );
    }
}

Dashboard.propTypes = {
    fetchDashboardData: PropTypes.func.isRequired,
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
