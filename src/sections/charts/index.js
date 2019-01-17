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

class Charts extends Component {
    componentWillMount() {
        const { fetchChartsData } = this.props;
        fetchChartsData();
    }

    render() {
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
        } = this.props;
        if (isLoading) {
            return (
                <div className="react-rainbow-admin-charts_container rainbow-background-color_gray-1">
                    <Spinner />
                </div>
            );
        }

        return (
            <div className="react-rainbow-admin-charts_container rainbow-background-color_gray-1">
                <PageHeader
                    title="Charts"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can learn more about it here: https://www.chartjs.org" />
                <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                    <ChartCard
                        title={lineCharts.title}
                        chartLabels={lineCharts.labels}
                        chartType={lineCharts.type}>
                        <Dataset
                            title={lineCharts.dataSet[0].title}
                            values={lineCharts.dataSet[0].values}
                            borderColor={lineCharts.dataSet[0].borderColor}
                            backgroundColor={lineCharts.dataSet[0].backgroundColor}
                            type={lineCharts.dataSet[0].type} />
                    </ChartCard>
                    <ChartCard
                        title={areaCharts.title}
                        chartLabels={areaCharts.labels}
                        chartType={areaCharts.type}
                        chartDisableCurves={areaCharts.disableCurves}>
                        <Dataset
                            title={areaCharts.dataSet[0].title}
                            values={areaCharts.dataSet[0].values}
                            borderColor={areaCharts.dataSet[0].borderColor}
                            backgroundColor={areaCharts.dataSet[0].backgroundColor}
                            type={areaCharts.dataSet[0].type}
                            fill={areaCharts.dataSet[0].fill} />
                    </ChartCard>
                </section>
                <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                    <ChartCard
                        title={barCharts.title}
                        chartLabels={barCharts.labels}
                        chartType={barCharts.type}>
                        <Dataset
                            key={barCharts.dataSet[0].title}
                            title={barCharts.dataSet[0].title}
                            values={barCharts.dataSet[0].values}
                            backgroundColor={barCharts.dataSet[0].backgroundColor} />
                        <Dataset
                            key={barCharts.dataSet[1].title}
                            title={barCharts.dataSet[1].title}
                            values={barCharts.dataSet[1].values}
                            backgroundColor={barCharts.dataSet[1].backgroundColor} />
                        <Dataset
                            key={barCharts.dataSet[2].title}
                            title={barCharts.dataSet[2].title}
                            values={barCharts.dataSet[2].values}
                            backgroundColor={barCharts.dataSet[2].backgroundColor} />
                        <Dataset
                            key={barCharts.dataSet[3].title}
                            title={barCharts.dataSet[3].title}
                            values={barCharts.dataSet[3].values}
                            backgroundColor={barCharts.dataSet[3].backgroundColor} />
                    </ChartCard>
                    <ChartCard
                        title={horizontalBarCharts.title}
                        chartLabels={horizontalBarCharts.labels}
                        chartType={horizontalBarCharts.type}>
                        <Dataset
                            key={horizontalBarCharts.dataSet[0].title}
                            title={horizontalBarCharts.dataSet[0].title}
                            values={horizontalBarCharts.dataSet[0].values}
                            backgroundColor={horizontalBarCharts.dataSet[0].backgroundColor} />
                        <Dataset
                            key={horizontalBarCharts.dataSet[1].title}
                            title={horizontalBarCharts.dataSet[1].title}
                            values={horizontalBarCharts.dataSet[1].values}
                            backgroundColor={horizontalBarCharts.dataSet[1].backgroundColor} />
                    </ChartCard>
                </section>
                <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                    <ChartCard
                        title={radarCharts.title}
                        chartLabels={radarCharts.labels}
                        chartType={radarCharts.type}
                        chartLegendPosition={radarCharts.legendPosition}>
                        <Dataset
                            key={radarCharts.dataSet[0].title}
                            title={radarCharts.dataSet[0].title}
                            values={radarCharts.dataSet[0].values}
                            backgroundColor={radarCharts.dataSet[0].backgroundColor}
                            fill={radarCharts.dataSet[0].fill} />
                        <Dataset
                            key={radarCharts.dataSet[1].title}
                            title={radarCharts.dataSet[1].title}
                            values={radarCharts.dataSet[1].values}
                            backgroundColor={radarCharts.dataSet[1].backgroundColor}
                            fill={radarCharts.dataSet[1].fill} />
                    </ChartCard>
                    <ChartCard
                        title={polarAreaCharts.title}
                        chartLabels={polarAreaCharts.labels}
                        chartType={polarAreaCharts.type}
                        chartLegendPosition={polarAreaCharts.legendPosition}>
                        <Dataset
                            key={polarAreaCharts.dataSet[0].title}
                            title={polarAreaCharts.dataSet[0].title}
                            values={polarAreaCharts.dataSet[0].values}
                            backgroundColor={polarAreaCharts.dataSet[0].backgroundColor} />
                    </ChartCard>
                </section>
                <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                    <ChartCard
                        title={pieCharts.title}
                        chartLabels={pieCharts.labels}
                        chartType={pieCharts.type}
                        chartLegendPosition={pieCharts.legendPosition}>
                        <Dataset
                            key={pieCharts.dataSet[0].title}
                            title={pieCharts.dataSet[0].title}
                            values={pieCharts.dataSet[0].values}
                            backgroundColor={pieCharts.dataSet[0].backgroundColor} />
                    </ChartCard>
                    <ChartCard
                        title={doughnutCharts.title}
                        chartLabels={doughnutCharts.labels}
                        chartType={doughnutCharts.type}
                        chartLegendPosition={doughnutCharts.legendPosition}>
                        <Dataset
                            key={doughnutCharts.dataSet[0].title}
                            title={doughnutCharts.dataSet[0].title}
                            values={doughnutCharts.dataSet[0].values}
                            backgroundColor={doughnutCharts.dataSet[0].backgroundColor} />
                    </ChartCard>
                </section>
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
