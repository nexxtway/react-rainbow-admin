import React from 'react';
import Card from 'react-rainbow-components/components/Card';
import Badge from 'react-rainbow-components/components/Badge';
import Chart from 'react-rainbow-components/components/Chart';
import Dataset from 'react-rainbow-components/components/Dataset';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ShoppingCartIcon from './icons/shoppingCartIcon';
import UsersIcon from './icons/usersIcon';
import LikeIcon from './icons/likeIcon';
import ErrorIcon from './icons/errorIcon';
import PersonIcon from './icons/personIcon';
import Message from './message';
import NewUser from './newUser';
import './styles.css';

export default function Dashboard() {
    return (
        <div className="react-rainbow-admin-dashboard_view-port rainbow-background-color_gray-1">
            <section>
                <h1 className="react-rainbow-admin-dashboard_header-title rainbow-font-size-heading_small rainbow-color_dark-1">Dashboard</h1>
                <p className="rainbow-font-size-text_small rainbow-p-top_xx-small rainbow-color_gray-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </section>

            <section className="rainbow-align-content_space-between rainbow-p-top_large">
                <Card className="react-rainbow-admin-dashboard_card rainbow-align-content_space-between rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <ShoppingCartIcon />
                    <div className="rainbow-flex rainbow-flex_column rainbow-align_end">
                        <h2 className="react-rainbow-admin-dashboard_card--title rainbow-color_gray-3 rainbow-font-size-text_medium">Orders</h2>
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-top_xx-small">1003</h1>
                    </div>
                </Card>

                <Card className="react-rainbow-admin-dashboard_card rainbow-align-content_space-between rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <UsersIcon />
                    <div className="rainbow-flex rainbow-flex_column rainbow-align_end">
                        <h2 className="react-rainbow-admin-dashboard_card--title rainbow-color_gray-3 rainbow-font-size-text_medium">Users</h2>
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-top_xx-small">1003</h1>
                    </div>
                </Card>

                <Card className="react-rainbow-admin-dashboard_card rainbow-align-content_space-between rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <LikeIcon />
                    <div className="rainbow-flex rainbow-flex_column rainbow-align_end">
                        <h2 className="react-rainbow-admin-dashboard_card--title rainbow-color_gray-3 rainbow-font-size-text_medium">Followers</h2>
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-top_xx-small">1003</h1>
                    </div>
                </Card>

                <Card className="react-rainbow-admin-dashboard_card rainbow-align-content_space-between rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <ErrorIcon />
                    <div className="rainbow-flex rainbow-flex_column rainbow-align_end">
                        <h2 className="react-rainbow-admin-dashboard_card--title rainbow-color_gray-3 rainbow-font-size-text_medium">Errors</h2>
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-top_xx-small">1003</h1>
                    </div>
                </Card>
            </section>

            <section className="rainbow-align-content_space-between rainbow-p-top_large">
                <Card className="react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">$20058</h1>
                        <Badge className="react-rainbow-admin-dashboard_badge--success">
                            <FontAwesomeIcon icon={faArrowUp} pull="left" />
                            20.5%
                        </Badge>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        Total successfuly orders
                    </p>
                    <Chart className="rainbow-p-top_x-small" showLegend={false} labels={['January', 'February', 'March', 'April', 'May']} type="line">
                        <Dataset values={[23, 45, 123, 56, 100]} backgroundColor="#1de9b6" borderColor="#1de9b6" />
                    </Chart>
                </Card>

                <Card className="react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">+140K</h1>
                        <Badge className="react-rainbow-admin-dashboard_badge--error">
                            <FontAwesomeIcon icon={faArrowDown} pull="left" />
                            32.5%
                        </Badge>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        Total users
                    </p>
                    <Chart className="rainbow-p-top_x-small" showLegend={false} labels={['January', 'February', 'March', 'April', 'May']} type="line">
                        <Dataset values={[250, 45, 900, 500, 630]} backgroundColor="#01b6f5" borderColor="#01b6f5" />
                    </Chart>
                </Card>

                <Card className="react-rainbow-admin-dashboard_card rainbow-p-vertical_medium rainbow-p-horizontal_small">
                    <div className="rainbow-flex rainbow-justify_spread">
                        <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-bottom_medium">+20K</h1>
                        <Badge className="react-rainbow-admin-dashboard_badge--success">
                            <FontAwesomeIcon icon={faArrowUp} pull="left" />
                            20.5%
                        </Badge>
                    </div>
                    <p className="react-rainbow-admin-dashboard_chart-title rainbow-align-content_center rainbow-font-size-text_x-small rainbow-color_gray-3">
                        Total followers active
                    </p>
                    <Chart className="rainbow-p-top_x-small" labels={['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']} type="line">
                        <Dataset title="Google" values={[350, 90, 410, 900, 600, 620, 700]} backgroundColor="#fe4849" borderColor="#fe4849" />
                        <Dataset title="Facebook" values={[90, 350, 349, 190, 380, 350, 300]} backgroundColor="#3c5997" borderColor="#3c5997" />
                    </Chart>
                </Card>
            </section>

            <section className="rainbow-align-content_space-between rainbow-p-top_large">
                <Card className="react-rainbow-admin-dashboard_card rainbow-p-top_medium rainbow-p-bottom_small rainbow-p-horizontal_small">
                    <h1 className="rainbow-color_gray-4 rainbow-font-size-heading_small rainbow-p-bottom_medium">
                        Last Messages
                    </h1>
                    <Message
                        avatarSrc="assets/images/user2.jpg"
                        userName="Saray Pacheco"
                        messageData="8:30 am"
                        messageContent="A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum …"
                        avatarTitle="Saray Pacheco"
                        avatarSize="small"
                        avatarAssistiveText="Saray Pacheco" />

                    <Message
                        avatarSrc="assets/images/user3.jpg"
                        userName="Reinier Guerra"
                        messageData="7:25 am"
                        messageContent="A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum …"
                        avatarTitle="Reinier Guerra"
                        avatarSize="small"
                        avatarAssistiveText="Reinier Guerra" />

                    <Message
                        avatarSrc="assets/images/user1.jpg"
                        userName="Jose Leandro Torres"
                        messageData="yesterday"
                        messageContent="A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum …"
                        avatarTitle="Jose Leandro Torres"
                        avatarSize="small"
                        avatarAssistiveText="Jose Leandro Torres" />

                    <Message
                        avatarSrc="assets/images/user4.jpg"
                        userName="Tahimi León"
                        messageData="yesterday"
                        messageContent="A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum …"
                        avatarTitle="Tahimi León"
                        avatarSize="small"
                        avatarAssistiveText="Tahimi León" />

                    <Message
                        avatarIcon={<PersonIcon />}
                        userName="Carlos Miguel"
                        messageData="Monday"
                        avatarSize="small"
                        messageContent="A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum …"
                        avatarTitle="Carlos Miguel"
                        avatarAssistiveText="Carlos Miguel"
                        messageDivider={false} />

                    <div className="react-rainbow-admin-dashboard_card-message--divider" />

                    <h1 className="react-rainbow-admin-dashboard_card-message--footer rainbow-color_brand rainbow-p-top_small rainbow-align-content_center">
                        View all messages
                    </h1>
                </Card>

                <Card className="react-rainbow-admin-dashboard_card rainbow-p-top_medium rainbow-p-bottom_small rainbow-p-horizontal_small">
                    <h1 className="rainbow-color_gray-4 rainbow-font-size-heading_small rainbow-p-bottom_medium">
                        New Users
                    </h1>
                    <NewUser
                        avatarSrc="assets/images/user2.jpg"
                        userName="Saray Pacheco"
                        userCity="San Francisco"
                        avatarTitle="Saray Pacheco"
                        userData="Now"
                        userActive
                        avatarAssistiveText="Saray Pacheco" />

                    <NewUser
                        avatarSrc="assets/images/user1.jpg"
                        userName="Jose Leandro Torres"
                        userCity="Guadalajara"
                        avatarTitle="Jose Leandro Torres"
                        userData="Now"
                        userActive
                        avatarAssistiveText="Jose Leandro Torres" />

                    <NewUser
                        avatarSrc="assets/images/user3.jpg"
                        userName="Reinier Guerra"
                        userCity="San Francisco"
                        avatarTitle="Reinier Guerra"
                        userData="10min ago"
                        userActive={false}
                        avatarAssistiveText="Reinier Guerra" />

                    <NewUser
                        avatarSrc="assets/images/user4.jpg"
                        userName="Tahimi León"
                        userCity="Guadalajara"
                        avatarTitle="Tahimi León"
                        userData="1hour ago"
                        userActive={false}
                        avatarAssistiveText="Tahimi León" />

                    <NewUser
                        avatarIcon={<PersonIcon />}
                        userName="Carlos Miguel"
                        userCity="La Habana"
                        avatarTitle="Carlos Miguel"
                        userData="yesterday"
                        userActive={false}
                        avatarAssistiveText="Carlos Miguel"
                        messageDivider={false} />

                    <div className="react-rainbow-admin-dashboard_card-message--divider" />

                    <h1 className="react-rainbow-admin-dashboard_card-message--footer rainbow-color_brand rainbow-p-top_small rainbow-align-content_center">
                        View all messages
                    </h1>
                </Card>
            </section>

        </div>
    );
}
