/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dataset from 'react-rainbow-components/components/Dataset';
import Spinner from 'react-rainbow-components/components/Spinner';
import PageHeader from '../../components/PageHeader';
import ChartCard from './chartCard';
import './styles.css';
import fetchChartsData from '../../redux/actions/charts';

function Cards(props) {
    const {
        isLoading,
        data: {
            lineCharts,
            areaCharts,
            barCharts,
            horizontalBarCharts,
            radarCharts,
            polarAreaCharts,
            pieCharts,
            doughnutCharts,
        },
    } = props;

    if (isLoading) {
        return <Spinner size="large" />;
    } return (
        <div>
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <ChartCard
                    title="Line Charts"
                    chartLabels={lineCharts.labels}
                    chartType="line">
                    <Dataset
                        title="Blue"
                        values={lineCharts.dataSet[0].values}
                        borderColor="#01b6f5"
                        backgroundColor="#0094c8"
                        type="line" />
                </ChartCard>
                <ChartCard
                    title="Area Charts"
                    chartLabels={areaCharts.labels}
                    chartType="line"
                    chartDisableCurves>
                    <Dataset
                        title="Green"
                        values={areaCharts.dataSet[0].values}
                        borderColor="#8ef4da"
                        backgroundColor="rgba(142,244,218,0.65)"
                        type="line"
                        fill />
                </ChartCard>
            </section>
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <ChartCard
                    title="Bar Charts"
                    chartLabels={barCharts.labels}
                    chartType="bar">
                    <Dataset
                        key="Red"
                        title="Red"
                        values={barCharts.dataSet[0].values}
                        backgroundColor="#fe4849" />
                    <Dataset
                        key="Orange"
                        title="Orange"
                        values={barCharts.dataSet[1].values}
                        backgroundColor="#ff6837" />
                    <Dataset
                        key="Yellow"
                        title="Yellow"
                        values={barCharts.dataSet[2].values}
                        backgroundColor="#ffcc00" />
                    <Dataset
                        key="Green"
                        title="Green"
                        values={barCharts.dataSet[3].values}
                        backgroundColor="#1ad1a3" />
                </ChartCard>
                <ChartCard
                    title="Horizontal Bar Charts"
                    chartLabels={horizontalBarCharts.labels}
                    chartType="horizontalBar">
                    <Dataset
                        key="Red"
                        title="Red"
                        values={horizontalBarCharts.dataSet[0].values}
                        backgroundColor="#fe4849" />
                    <Dataset
                        key="Green"
                        title="Green"
                        values={horizontalBarCharts.dataSet[1].values}
                        backgroundColor="#1ad1a3" />
                </ChartCard>
            </section>
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <ChartCard
                    title="Radar Charts"
                    chartLabels={radarCharts.labels}
                    chartType="radar"
                    chartLegendPosition="right">
                    <Dataset
                        key="Yellow"
                        title="Yellow"
                        values={radarCharts.dataSet[0].values}
                        backgroundColor="rgba(255, 214, 51, 0.44)"
                        fill />
                    <Dataset
                        key="Blue"
                        title="Blue"
                        values={radarCharts.dataSet[1].values}
                        backgroundColor="rgba(1,182,245,0.55)"
                        fill />
                </ChartCard>
                <ChartCard
                    title="Polar Area Charts"
                    chartLabels={polarAreaCharts.labels}
                    chartType="polarArea"
                    chartLegendPosition>
                    <Dataset
                        key="Red"
                        title="Red"
                        values={polarAreaCharts.dataSet[0].values}
                        backgroundColor={['#ffcc00', '#00a6e0', '#1ad1a3', '#fe4849', '#ff6837']} />
                </ChartCard>
            </section>
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <ChartCard
                    title="Pie Charts"
                    chartLabels={pieCharts.labels}
                    chartType="pie"
                    chartLegendPosition="right">
                    <Dataset
                        key="Red"
                        title={pieCharts.dataSet[0].title}
                        values={pieCharts.dataSet[0].values}
                        backgroundColor={['#ffcc00', '#1ad1a3', '#fe4849', '#ff6837']} />
                </ChartCard>
                <ChartCard
                    title="Boughnut Charts"
                    chartLabels={doughnutCharts.labels}
                    chartType="doughnut"
                    chartLegendPosition="right">
                    <Dataset
                        key="Red"
                        title="Red"
                        values={doughnutCharts.dataSet[0].values}
                        backgroundColor={['#ffcc00', '#1ad1a3', '#fe4849', '#ff6837']} />
                </ChartCard>
            </section>
        </div>
    );
}

Cards.propTypes = {
    data: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

class Charts extends Component {
    componentWillMount() {
        const { fetchChartsData } = this.props;
        fetchChartsData();
    }

    render() {
        return (
            <div className="react-rainbow-admin-charts_container rainbow-background-color_gray-1">
                <PageHeader
                    title="Charts"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can learn more about it here: https://www.chartjs.org" />
                <Cards {...this.props} />
            </div>
        );
    }
}

Charts.propTypes = {
    fetchChartsData: PropTypes.func.isRequired,
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
