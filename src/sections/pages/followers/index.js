import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Breadcrumb,
    Breadcrumbs,
    Spinner,
} from 'react-rainbow-components';
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
import ChartsSection from './chartsSection';
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

            <ChartsSection chartsData={chartsData} />

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
            <div className="react-rainbow-admin-followers_view-port">
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
