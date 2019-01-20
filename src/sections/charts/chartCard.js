import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from 'react-rainbow-components/components/Card';
import Chart from 'react-rainbow-components/components/Chart';
import RenderIf from 'react-rainbow-components/components/RenderIf';

export default function ChartCard(props) {
    const {
        title,
        subtitle,
        chartTitle,
        icon,
        children,
        chartLabels,
        chartType,
        chartLegendPosition,
        chartDisableCurves,
        maintainAspectRatio,
        className,
        chartClassName,
    } = props;

    const getContainerClassNames = () => classnames(
        'react-rainbow-admin-charts_card',
        'rainbow-p-vertical_medium',
        'rainbow-p-horizontal_medium',
        className,
    );

    const getChartClassNames = () => classnames(
        'react-rainbow-admin-charts_card',
        'rainbow-p-top_x-small',
        chartClassName,
    );

    return (
        <Card className={getContainerClassNames()}>
            <div className="react-rainbow-admin-charts_header-title-container">
                <RenderIf isTrue={!!icon}>
                    <span className="react-rainbow-admin-charts_header-icon rainbow-p-right_small">
                        {icon}
                    </span>
                </RenderIf>
                <h2 className="rainbow-font-size-heading_medium rainbow-color_gray-4">{title}</h2>
            </div>
            <h3 className="rainbow-font-size-text_small rainbow-color_gray-3 rainbow-p-bottom_x-small">{subtitle}</h3>
            <p className="react-rainbow-admin-charts_chart-title rainbow-align-content_center rainbow-font-size-text_small rainbow-color_gray-3">
                {chartTitle}
            </p>
            <Chart
                className={getChartClassNames()}
                labels={chartLabels}
                type={chartType}
                legendPosition={chartLegendPosition}
                disableCurves={chartDisableCurves}
                maintainAspectRatio={maintainAspectRatio}>
                {children}
            </Chart>
        </Card>
    );
}

ChartCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    chartTitle: PropTypes.string,
    icon: PropTypes.node,
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
    maintainAspectRatio: PropTypes.bool,
    className: PropTypes.string,
    chartClassName: PropTypes.string,
};

ChartCard.defaultProps = {
    title: undefined,
    subtitle: undefined,
    chartTitle: undefined,
    icon: null,
    children: null,
    chartLegendPosition: 'bottom',
    chartDisableCurves: false,
    maintainAspectRatio: true,
    className: undefined,
    chartClassName: undefined,
};
