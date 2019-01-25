import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Breadcrumb,
    Breadcrumbs,
    Card,
    Chart,
    Dataset,
    Badge,
    Spinner,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import fetchFollowersData from '../../../redux/actions/followers';
import { navigateTo } from '../../../history';
import Tile from '../../../components/Tile';
import PageHeader from '../../../components/PageHeader';
import {
    GoogleIcon,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
} from '../../../components/icons';
import './styles.css';

function ContentPage(props) {
    const {
        totals: {
            facebook,
            google,
            twitter,
            linkedin,
        },
        chartsData,
        isLoading,
    } = props;

    if (isLoading) {
        return <Spinner size="large" />;
    } return (
        <div>
            <section className="react-rainbow-admin-followers_section rainbow-align-content_space-between rainbow-p-top_large">
                <Tile
                    className="react-rainbow-admin-followers_tile-facebook"
                    title="facebook"
                    label={facebook}
                    variant="inverse"
                    icon={<FacebookIcon className="react-rainbow-admin-followers_tile-icon" />} />

                <Tile
                    title="google"
                    label={google}
                    icon={<GoogleIcon className="react-rainbow-admin-followers_tile-icon" />} />

                <Tile
                    className="react-rainbow-admin-followers_tile-twitter"
                    title="twitter"
                    label={twitter}
                    variant="inverse"
                    icon={<TwitterIcon className="react-rainbow-admin-followers_tile-icon" />} />

                <Tile
                    className="react-rainbow-admin-followers_tile-linkedin"
                    title="linkedin"
                    label={linkedin}
                    variant="inverse"
                    icon={<LinkedinIcon className="react-rainbow-admin-followers_tile-icon" />} />
            </section>

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

ContentPage.propTypes = {
    totals: PropTypes.object.isRequired,
    chartsData: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

class Folloers extends Component {
    componentDidMount() {
        const { fetchFollowersData } = this.props;
        fetchFollowersData();
    }

    render() {
        return (
            <div className="react-rainbow-admin-followers_view-port rainbow-background-color_gray-1">
                <Breadcrumbs>
                    <Breadcrumb label="Pages" onClick={() => navigateTo('/pages')} />
                    <Breadcrumb label="Followers" />
                </Breadcrumbs>
                <PageHeader
                    className="react-rainbow-admin-followers_header"
                    title="Followers"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <ContentPage {...this.props} />
            </div>
        );
    }
}

Folloers.propTypes = {
    fetchFollowersData: PropTypes.func.isRequired,
};

function stateToProps(state) {
    return state.followers;
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        fetchFollowersData,
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(Folloers);
