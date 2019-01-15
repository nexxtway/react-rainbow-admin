import React from 'react';
import Dataset from 'react-rainbow-components/components/Dataset';
import PageHeader from '../../components/PageHeader';
import ChartCard from './chartCard';
import './styles.css';

export default function Charts() {
    return (
        <div className="react-rainbow-admin-charts_container rainbow-background-color_gray-1">
            <PageHeader
                title="Charts"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can learn more about it here: https://www.chartjs.org" />
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <ChartCard title="Line Charts" chartLabels={['January', 'February', 'March', 'April', 'May', 'June']} chartType="line">
                    <Dataset title="Blue" values={[350, 410, 900, 620, 700, 1000]} borderColor="#01b6f5" backgroundColor="#0094c8" type="line" />
                </ChartCard>
                <ChartCard title="Area Charts" chartLabels={['January', 'February', 'March', 'April', 'May', 'June']} chartType="line" chartDisableCurves>
                    <Dataset title="Green" values={[350, 90, 410, 900, 600, 620, 700]} borderColor="#8ef4da" backgroundColor="rgba(142,244,218,0.65)" type="line" fill />
                </ChartCard>
            </section>
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <ChartCard title="Bar Charts" chartLabels={['January', 'February', 'March', 'April', 'May', 'June']} chartType="bar">
                    <Dataset key="Red" title="Red" values={[18, 42, 58, 50, 19, undefined]} backgroundColor="#fe4849" />
                    <Dataset key="Orange" title="Orange" values={[undefined, 40, undefined, 45, 95, 33]} backgroundColor="#ff6837" />
                    <Dataset key="Yellow" title="Yellow" values={[undefined, 30, 80, undefined, 65, 50]} backgroundColor="#ffcc00" />
                    <Dataset key="Green" title="Green" values={[undefined, 15, undefined, 60, 45, 85]} backgroundColor="#1ad1a3" />
                </ChartCard>
                <ChartCard title="Horizontal Bar Charts" chartLabels={['January', 'February', 'March', 'April', 'May']} chartType="horizontalBar">
                    <Dataset key="Red" title="Red" values={[-18, 42, -58, 50, 19, undefined]} backgroundColor="#fe4849" />
                    <Dataset key="Green" title="Green" values={[undefined, 15, undefined, -60, 45, 85]} backgroundColor="#1ad1a3" />
                </ChartCard>
            </section>
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <ChartCard title="Radar Charts" chartLabels={['Coding', 'Drinking', 'Sleeping', 'Reading', 'Runnig', 'Learning', 'Designing']} chartType="radar" chartLegendPosition="right">
                    <Dataset key="Yellow" title="Yellow" values={[300, 50, 200, 250, 100, 220, 100]} backgroundColor="rgba(255, 214, 51, 0.44)" fill />
                    <Dataset key="Red" title="Blue" values={[220, 150, 100, 200, 150, 300, 250]} borderColor="#01b6f5" backgroundColor="rgba(1,182,245,0.55)" fill />
                </ChartCard>
                <ChartCard title="Polar Area Charts" chartLabels={['Yellow', 'Blue', 'Green', 'Red', 'Orange']} chartType="polarArea" chartLegendPosition="right">
                    <Dataset key="Red" title="Red" values={[250, 150, 300, 250, 150]} backgroundColor={['#ffcc00', '#00a6e0', '#1ad1a3', '#fe4849', '#ff6837']} />
                </ChartCard>
            </section>
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <ChartCard title="Radar Charts" chartLabels={['Yellow', 'Green', 'Red', 'Orange']} chartType="pie" chartLegendPosition="right">
                    <Dataset key="Red" title="Red" values={[80, 145, 45, 90]} backgroundColor={['#ffcc00', '#1ad1a3', '#fe4849', '#ff6837']} />
                </ChartCard>
                <ChartCard title="Polar Area Charts" chartLabels={['Yellow', 'Green', 'Red', 'Orange']} chartType="doughnut" chartLegendPosition="right">
                    <Dataset key="Red" title="Red" values={[65, 110, 35, 80]} backgroundColor={['#ffcc00', '#1ad1a3', '#fe4849', '#ff6837']} />
                </ChartCard>
            </section>
        </div>
    );
}
