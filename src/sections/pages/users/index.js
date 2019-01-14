import React, { Component } from 'react';
import {
    Breadcrumb,
    Breadcrumbs,
    Card,
    Chart,
    Dataset,
    Badge,
    Tabset,
    Tab,
    Table,
    Column,
} from 'react-rainbow-components';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faPen } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../../../components/PageHeader';
import CurrentStatus from './currentStatus';
import User from './user';

function EditIcon() {
    return (
        <div className="react-rainbow-admin-users_table-edit-icon">
            <FontAwesomeIcon icon={faPen} size="xs" />
        </div>
    );
}

const data = [
    {
        user: <User name="Sara" />,
        email: 'sara@gmail.com',
        phoneNumber: '+1 111 111 1111',
        currentStatus: <CurrentStatus value="ONLINE" />,
        edit: <EditIcon />,
    },
    {
        user: <User name="Reinier" />,
        email: 'rey@gmail.com',
        phoneNumber: '+1 222 222 2222',
        currentStatus: <CurrentStatus value="ONLINE" />,
        edit: <EditIcon />,
    },
    {
        user: <User name="Leo" />,
        email: 'leo@gmail.com',
        phoneNumber: '+1 333 333 3333',
        currentStatus: <CurrentStatus value="ONLINE" />,
        edit: <EditIcon />,
    },
    {
        user: <User name="Tahimi" />,
        email: 'tahy@gmail.com',
        phoneNumber: '+1 444 444 4444',
        currentStatus: <CurrentStatus value="ONLINE" />,
        edit: <EditIcon />,
    },
    {
        user: <User name="Pepe" />,
        email: 'pepe@gmail.com',
        phoneNumber: '+1 555 555 5555',
        currentStatus: <CurrentStatus value="OFFLINE" />,
        edit: <EditIcon />,
    },
    {
        user: <User name="Jose" />,
        email: 'jose@gmail.com',
        phoneNumber: '+1 666 666 6666',
        currentStatus: <CurrentStatus value="OFFLINE" />,
        edit: <EditIcon />,
    },
    {
        user: <User name="Pedro" />,
        email: 'pedro@gmail.com',
        phoneNumber: '+1 777 777 7777',
        currentStatus: <CurrentStatus value="ONLINE" />,
        edit: <EditIcon />,
    },
    {
        user: <User name="Juan" />,
        email: 'Juan@gmail.com',
        phoneNumber: '+1 888 888 8888',
        currentStatus: <CurrentStatus value="ONLINE" />,
        edit: <EditIcon />,
    },
];
export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTabName: 'allUsers' };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(event, tab) {
        this.setState({ activeTabName: tab });
    }

    render() {
        const { activeTabName } = this.state;
        return (
            <div>
                <div className="react-rainbow-admin-users_container">
                    <Breadcrumbs>
                        <Breadcrumb label="Pages" href="pages" />
                        <Breadcrumb label="Users" />
                    </Breadcrumbs>
                    <PageHeader
                        className="react-rainbow-admin-users_header"
                        title="Users"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    <div className="react-rainbow-admin-users_cards">
                        <Card
                            className="react-rainbow-admin-users_card"
                            title="114 245"
                            actions={(
                                <Badge variant="brand" className="react-rainbow-admin-users_badge">
                                    <FontAwesomeIcon icon={faArrowUp} pull="left" size="sm" />
                                    20.5%
                                </Badge>
                            )}>
                            <div className="react-rainbow-admin-users_chart">
                                <Chart
                                    labels={['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul']}
                                    type="line"
                                    showLegend={false}>
                                    <Dataset values={[370, 90, 950, 530, 800, 960, 650]} borderColor="#1de9b6" />
                                </Chart>
                            </div>
                        </Card>
                        <Card
                            className="react-rainbow-admin-users_card"
                            title="94 988"
                            actions={(
                                <Badge className="react-rainbow-admin-users_badge" variant="brand">
                                    <FontAwesomeIcon icon={faArrowUp} pull="left" size="sm" />
                                    20.5%
                                </Badge>
                            )}>
                            <Chart
                                className="react-rainbow-admin-users_chart"
                                labels={['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul']}
                                type="line"
                                showLegend={false}>
                                <Dataset values={[270, 190, 350, 930, 500, 960, 1000]} borderColor="#1de9b6" />
                            </Chart>
                        </Card>
                    </div>
                </div>
                <Tabset
                    onSelect={this.handleOnSelect}
                    className="react-rainbow-admin-users_tab-set"
                    activeTabName={activeTabName}>
                    <Tab
                        label="ALL USERS"
                        name="allUsers" />

                    <Tab
                        label="ACTIVE USERS"
                        name="activeUsers" />
                </Tabset>
                <div className="react-rainbow-admin-users_tab-content">
                    <Table data={data}>
                        <Column header="USER" field="user" />
                        <Column header="EMAIL" field="email" />
                        <Column header="PHONE NUMBER" field="phoneNumber" />
                        <Column header="CURRENT STATUS" field="currentStatus" />
                        <Column field="edit" />
                    </Table>
                </div>
            </div>
        );
    }
}
