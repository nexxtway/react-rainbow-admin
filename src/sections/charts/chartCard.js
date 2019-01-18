import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-rainbow-components/components/Card';
import Chart from 'react-rainbow-components/components/Chart';

export default function ChartCard(props) {
    const {
        title,
        children,
        chartLabels,
        chartType,
        chartLegendPosition,
        chartDisableCurves,
    } = props;

    return (
        <Card className="react-rainbow-admin-charts_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
            <div className="react-rainbow-admin-charts_header">
                <h2 className="rainbow-p-bottom_medium">{title}</h2>
            </div>
            <p className="react-rainbow-admin-charts_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                COLORS USE
            </p>
            <Chart
                className="react-rainbow-admin-charts_card rainbow-p-top_x-small"
                labels={chartLabels}
                type={chartType}
                legendPosition={chartLegendPosition}
                disableCurves={chartDisableCurves}>
                {children}
            </Chart>
        </Card>
    );
}

ChartCard.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
    ]),
    chartType: PropTypes.oneOf([
        'bar',
        'horizontalBar',
        'line',
        'radar',
        'pie',
        'doughnut',
        'polarArea',
        'bubble',
    ]).isRequired,
    chartLegendPosition: PropTypes.oneOf([
        'top',
        'bottom',
        'right',
        'left',
    ]),
    chartLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
    chartDisableCurves: PropTypes.bool,
};

ChartCard.defaultProps = {
    title: undefined,
    children: null,
    chartLegendPosition: 'bottom',
    chartDisableCurves: false,
};
