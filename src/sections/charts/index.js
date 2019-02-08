import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PageHeader from '../../components/PageHeader';
import fetchChartsData from '../../redux/actions/charts';
import ContentPage from './contentPage';
import './styles.css';

class Charts extends Component {
    componentDidMount() {
        const { fetchChartsData } = this.props;
        fetchChartsData();
    }

    render() {
        const {
            isLoading,
            data,
        } = this.props;
        return (
            <div className="react-rainbow-admin-charts_container">
                <PageHeader
                    title="Charts"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can learn more about it here: https://www.chartjs.org" />
                <ContentPage isLoading={isLoading} {...data} />
            </div>
        );
    }
}

Charts.propTypes = {
    fetchChartsData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

function stateToProps(state) {
    return state.charts;
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        fetchChartsData,
    }, dispatch);
}
export default connect(stateToProps, dispatchToProps)(Charts);
