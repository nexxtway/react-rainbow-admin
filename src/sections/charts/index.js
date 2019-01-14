import React from 'react';
import Card from 'react-rainbow-components/components/Card';
import Chart from 'react-rainbow-components/components/Chart';
import Dataset from 'react-rainbow-components/components/Dataset';
import ButtonGroup from 'react-rainbow-components/components/ButtonGroup';
import Button from 'react-rainbow-components/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../../components/PageHeader';
import './styles.css';

export default function Charts() {
    return (
        <div className="react-rainbow-admin-charts_container rainbow-background-color_gray-1">
            <PageHeader
                title="Charts"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. You can learn more about it here: https://www.chartjs.org" />
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <Card className="react-rainbow-admin-charts_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="react-rainbow-admin-charts_header">
                        <h2 className="rainbow-p-bottom_medium">Line Charts</h2>
                        <ButtonGroup>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                        </ButtonGroup>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        COLORS USE
                    </p>
                    <Chart className="react-rainbow-admin-charts_card rainbow-p-top_x-small" labels={['January', 'February', 'March', 'April', 'May', 'June']} type="line">
                        <Dataset title="Blue" values={[350, 410, 900, 620, 700, 1000]} borderColor="#01b6f5" backgroundColor="#0094c8" type="line" />
                    </Chart>
                </Card>
                <Card className="react-rainbow-admin-charts_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="react-rainbow-admin-charts_header">
                        <h2 className="rainbow-p-bottom_medium">Area Charts</h2>
                        <ButtonGroup>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                        </ButtonGroup>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        COLORS USE
                    </p>
                    <Chart className="react-rainbow-admin-charts_card rainbow-p-top_x-small" labels={['January', 'February', 'March', 'April', 'May', 'June']} type="line" disableCurves>
                        <Dataset title="Green" values={[350, 90, 410, 900, 600, 620, 700]} borderColor="#8ef4da" backgroundColor="rgba(142,244,218,0.65)" type="line" fill />
                    </Chart>
                </Card>
            </section>
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <Card className="react-rainbow-admin-charts_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="react-rainbow-admin-charts_header">
                        <h2 className="rainbow-p-bottom_medium">Bar Charts</h2>
                        <ButtonGroup>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                        </ButtonGroup>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        COLORS USE
                    </p>
                    <Chart className="react-rainbow-admin-charts_card rainbow-p-top_x-small" labels={['January', 'February', 'March', 'April', 'May', 'June']} type="bar">
                        <Dataset key="Red" title="Red" values={[18, 42, 58, 50, 19, undefined]} backgroundColor="#fe4849" />
                        <Dataset key="Orange" title="Orange" values={[undefined, 40, undefined, 45, 95, 33]} backgroundColor="#ff6837" />
                        <Dataset key="Yellow" title="Yellow" values={[undefined, 30, 80, undefined, 65, 50]} backgroundColor="#ffcc00" />
                        <Dataset key="Green" title="Green" values={[undefined, 15, undefined, 60, 45, 85]} backgroundColor="#1ad1a3" />
                    </Chart>
                </Card>
                <Card className="react-rainbow-admin-charts_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="react-rainbow-admin-charts_header">
                        <h2 className="rainbow-p-bottom_medium">Horizontal Bar Charts</h2>
                        <ButtonGroup>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                        </ButtonGroup>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        COLORS USE
                    </p>
                    <Chart className="react-rainbow-admin-charts_card rainbow-p-top_x-small" labels={['January', 'February', 'March', 'April', 'May']} type="horizontalBar">
                        <Dataset key="Red" title="Red" values={[-18, 42, -58, 50, 19, undefined]} backgroundColor="#fe4849" />
                        <Dataset key="Green" title="Green" values={[undefined, 15, undefined, -60, 45, 85]} backgroundColor="#1ad1a3" />
                    </Chart>
                </Card>
            </section>
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <Card className="react-rainbow-admin-charts_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="react-rainbow-admin-charts_header">
                        <h2 className="rainbow-p-bottom_medium">Radar Charts</h2>
                        <ButtonGroup>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                        </ButtonGroup>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        COLORS USE
                    </p>
                    <Chart className="react-rainbow-admin-charts_card rainbow-p-top_x-small" labels={['Coding', 'Drinking', 'Sleeping', 'Reading', 'Runnig', 'Learning', 'Designing']} legendPosition="right" type="radar">
                        <Dataset key="Yellow" title="Yellow" values={[300, 50, 200, 250, 100, 220, 100]}  backgroundColor="rgba(255, 214, 51, 0.44)" fill />
                        <Dataset key="Red" title="Blue" values={[220, 150, 100, 200, 150, 300, 250]} borderColor="#01b6f5" backgroundColor="rgba(1,182,245,0.55)" fill/>
                    </Chart>
                </Card>
                <Card className="react-rainbow-admin-charts_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="react-rainbow-admin-charts_header">
                        <h2 className="rainbow-p-bottom_medium">Polar Area Charts</h2>
                        <ButtonGroup>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                        </ButtonGroup>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        COLORS USE
                    </p>
                    <Chart className="react-rainbow-admin-charts_card rainbow-p-top_x-small" labels={['Yellow', 'Blue', 'Green', 'Red', 'Orange']} type="polarArea" legendPosition="right">
                        <Dataset key="Red" title="Red" values={[250, 150, 300, 250, 150]} backgroundColor={['#ffcc00', '#00a6e0', '#1ad1a3', '#fe4849', '#ff6837']} />
                    </Chart>
                </Card>
            </section>
            <section className="react-rainbow-admin-charts_section rainbow-p-top_large rainbow-align-content_space-between">
                <Card className="react-rainbow-admin-charts_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="react-rainbow-admin-charts_header">
                        <h2 className="rainbow-p-bottom_medium">Pie Charts</h2>
                        <ButtonGroup>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                        </ButtonGroup>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        COLORS USE
                    </p>
                    <Chart className="react-rainbow-admin-charts_card rainbow-p-top_x-small" labels={['Yellow', 'Green', 'Red', 'Orange']} type="pie" legendPosition="right">
                        <Dataset key="Red" title="Red" values={[65, 110, 35, 80]} backgroundColor={['#ffcc00', '#1ad1a3', '#fe4849', '#ff6837']} />
                    </Chart>
                </Card>
                <Card className="react-rainbow-admin-charts_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="react-rainbow-admin-charts_header">
                        <h2 className="rainbow-p-bottom_medium">Doughnut Charts</h2>
                        <ButtonGroup>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                            <Button variant="neutral" className="react-rainbow-admin-chart_button">
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_small" />
                            Color
                            </Button>
                        </ButtonGroup>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        COLORS USE
                    </p>
                    <Chart className="react-rainbow-admin-charts_card rainbow-p-top_x-small" labels={['Yellow', 'Green', 'Red', 'Orange']} type="doughnut" legendPosition="right">
                        <Dataset key="Red" title="Red" values={[65, 110, 35, 80]} backgroundColor={['#ffcc00', '#1ad1a3', '#fe4849', '#ff6837']} />
                    </Chart>
                </Card>
            </section>
        </div>
    );
}
