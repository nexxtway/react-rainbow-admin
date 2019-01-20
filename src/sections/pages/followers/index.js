import React from 'react';
import {
    Breadcrumb,
    Breadcrumbs,
    Card,
    Chart,
    Dataset,
    Badge,
} from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
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

export default function Followers() {
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

            <section className="react-rainbow-admin-followers_section rainbow-align-content_space-between rainbow-p-top_large">
                <Tile
                    className="react-rainbow-admin-followers_tile-facebook"
                    title="facebook"
                    label="143K"
                    variant="inverse"
                    icon={<FacebookIcon className="react-rainbow-admin-followers_tile-icon" />} />

                <Tile
                    title="google"
                    label="20K"
                    icon={<GoogleIcon className="react-rainbow-admin-followers_tile-icon" />} />

                <Tile
                    className="react-rainbow-admin-followers_tile-twitter"
                    title="twitter"
                    label="13K"
                    variant="inverse"
                    icon={<TwitterIcon className="react-rainbow-admin-followers_tile-icon" />} />

                <Tile
                    className="react-rainbow-admin-followers_tile-linkedin"
                    title="linkedin"
                    label="10K"
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
                        labels={['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul']}
                        type="line"
                        showLegend={false}>
                        <Dataset values={[270, 190, 350, 930, 500, 960, 1000]} borderColor="#3c5997" />
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
                        labels={['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul']}
                        type="line"
                        showLegend={false}>
                        <Dataset values={[270, 190, 350, 930, 500, 960, 1000]} borderColor="#fe4849" />
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
                        labels={['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul']}
                        type="line"
                        showLegend={false}>
                        <Dataset values={[270, 190, 350, 930, 500, 960, 1000]} borderColor="#00b0f3" />
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
                        labels={['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul']}
                        type="line"
                        showLegend={false}>
                        <Dataset values={[270, 190, 350, 930, 500, 960, 1000]} borderColor="#0077b5" />
                    </Chart>
                </Card>
            </section>
        </div>
    );
}
