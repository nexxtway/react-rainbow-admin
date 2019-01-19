/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dataset from 'react-rainbow-components/components/Dataset';
import Spinner from 'react-rainbow-components/components/Spinner';
import PageHeader from '../../components/PageHeader';
import ChartCard from './chartCard';
import {
    BellIcon,
    SalesIcon,
    CompletedTasksIcon,
    IncompletedTasksIcon,
} from '../../components/icons';
import fetchChartsData from '../../redux/actions/charts';
import './styles.css';

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
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large">
                <ChartCard
                    title="Performan"
                    subtitle="Total Shipments"
                    chartTitle="Line chart"
                    chartLabels={lineCharts.labels}
                    chartType="line"
                    maintainAspectRatio={false}
                    type="line"
                    className="react-rainbow-admin-charts_chart-card"
                    chartClassName="react-rainbow-admin-charts_chart">
                    <Dataset
                        title="Red"
                        values={lineCharts.dataSet[0].values}
                        borderColor="#fe4849"
                        backgroundColor="#fe4849" />
                    <Dataset
                        title="Blue"
                        values={lineCharts.dataSet[1].values}
                        borderColor="#01b6f5"
                        backgroundColor="#01b6f5" />
                </ChartCard>
            </section>
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <ChartCard
                    title=" 763,215"
                    subtitle="Total Shipments"
                    chartTitle="Line chart"
                    icon={<BellIcon />}
                    chartLabels={lineCharts.labels}
                    chartType="line">
                    <Dataset
                        title="Yellow"
                        values={lineCharts.dataSet[0].values}
                        borderColor="#f2c302"
                        backgroundColor="#ffcc00"
                        type="line" />
                </ChartCard>
                <ChartCard
                    title="$3,500"
                    subtitle="Daily Sales"
                    chartTitle="Area charts"
                    icon={<SalesIcon />}
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
                    title="11K"
                    subtitle="Completed Tasks"
                    chartTitle="Vertical Bar Charts"
                    icon={<CompletedTasksIcon />}
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
                    title="12K"
                    subtitle="Completed Tasks"
                    chartTitle="Horizontal Bar Charts"
                    icon={<IncompletedTasksIcon />}
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
                    title="Daily Tasks"
                    subtitle="Total Shipments"
                    chartTitle="Radar Charts"
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
                    title="Color use in Design"
                    subtitle="Total Shipments"
                    chartTitle="Polar Area Charts"
                    chartType="polarArea"
                    chartLabels={polarAreaCharts.labels}
                    chartLegendPosition="right">
                    <Dataset
                        title="Red"
                        values={polarAreaCharts.dataSet[0].values}
                        backgroundColor={['#ffcc00', '#00a6e0', '#1ad1a3', '#fe4849', '#ff6837']} />
                </ChartCard>
            </section>
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <ChartCard
                    title="Mobile operative systems"
                    subtitle="Total Shipments"
                    chartTitle="Pie Charts"
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
                    title="Color use in Design"
                    subtitle="Total Shipments"
                    chartTitle="Doughnut Charts"
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
