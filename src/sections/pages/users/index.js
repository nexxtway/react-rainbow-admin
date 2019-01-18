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
    Pagination,
} from 'react-rainbow-components';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import PageHeader from '../../../components/PageHeader';
import Status from './status';
import User from './user';

const users = [
    {
        user: { name: 'Sara', photoUrl: '/assets/images/user2.jpg' },
        email: 'sara@gmail.com',
        phoneNumber: '+1 111 111 1111',
        status: 'ONLINE',
    },
    {
        user: { name: 'Reinier', photoUrl: '/assets/images/user1.jpg' },
        email: 'rey@gmail.com',
        phoneNumber: '+1 222 222 2222',
        status: 'ONLINE',
    },
    {
        user: { name: 'Leo', photoUrl: '/assets/images/user3.jpg' },
        email: 'leo@gmail.com',
        phoneNumber: '+1 333 333 3333',
        status: 'ONLINE',
    },
    {
        user: { name: 'Tahimi', photoUrl: '/assets/images/user4.jpg' },
        email: 'tahy@gmail.com',
        phoneNumber: '+1 444 444 4444',
        status: 'ONLINE',
    },
    {
        user: { name: 'Pepe' },
        email: 'pepe@gmail.com',
        phoneNumber: '+1 555 555 5555',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Jose' },
        email: 'jose@gmail.com',
        phoneNumber: '+1 666 666 6666',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Pedro' },
        email: 'pedro@gmail.com',
        phoneNumber: '+1 777 777 7777',
        status: 'ONLINE',
    },
    {
        user: { name: 'Juan' },
        email: 'juan@gmail.com',
        phoneNumber: '+1 888 888 8888',
        status: 'ONLINE',
    },
    {
        user: { name: 'Pablo' },
        email: 'pablo@gmail.com',
        phoneNumber: '+1 999 999 9999',
        status: 'ONLINE',
    },
    {
        user: { name: 'Maria' },
        email: 'maria@gmail.com',
        phoneNumber: '+1 122 222 2222',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Juana' },
        email: 'juana@gmail.com',
        phoneNumber: '+1 133 333 3333',
        status: 'ONLINE',
    },
    {
        user: { name: 'Julio' },
        email: 'julio@gmail.com',
        phoneNumber: '+1 144 444 4444',
        status: 'ONLINE',
    },
    {
        user: { name: 'Olga' },
        email: 'olga@gmail.com',
        phoneNumber: '+1 155 555 5555',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Armando' },
        email: 'armando@gmail.com',
        phoneNumber: '+1 166 666 6666',
        status: 'ONLINE',
    },
];
export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTabName: 'allUsers',
            activePage: 1,
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    getTableData() {
        const { activeTabName, activePage } = this.state;
        const activeUsers = users.filter(user => user.status === 'ONLINE');
        const firstItem = (activePage - 1) * 8;
        const lastItem = firstItem + 8;
        if (activeTabName === 'allUsers') {
            return users.slice(firstItem, lastItem);
        }
        return activeUsers.slice(firstItem, lastItem);
    }

    handleOnSelect(event, tab) {
        this.setState({ activeTabName: tab });
    }

    handleOnChange(event, page) {
        this.setState({ activePage: page });
    }

    render() {
        const {
            activeTabName,
            activePage,
        } = this.state;
        return (
            <div className="react-rainbow-admin-users_container">
                <div className="react-rainbow-admin-users_cards-container">
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
                                    labels={['January', 'February', 'March', 'April', 'May', 'Jun', '']}
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
                    <Table data={this.getTableData()}>
                        <Column header="USER" field="user" component={User} />
                        <Column header="EMAIL" field="email" />
                        <Column header="PHONE NUMBER" field="phoneNumber" />
                        <Column header="CURRENT STATUS" field="status" component={Status} />
                        <Column field="edit" />
                    </Table>
                    <div className="react-rainbow-admin-users_pagination">
                        <Pagination
                            pages={5}
                            activePage={activePage}
                            onChange={this.handleOnChange} />
                    </div>
                </div>
            </div>
        );
    }
}
