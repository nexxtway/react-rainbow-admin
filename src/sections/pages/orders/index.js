import React, { Component } from 'react';
import {
    Breadcrumb,
    Breadcrumbs,
    Card,
    Chart,
    Dataset,
    Badge,
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
        status: 'VERIFIED',
        amount: '$144.55',
        date: '11/07/2018',
    },
    {
        user: { name: 'Reinier', photoUrl: '/assets/images/user1.jpg' },
        status: 'PROCESSING',
        amount: '$285.05',
        date: '11/07/2018',
    },
    {
        user: { name: 'Leo', photoUrl: '/assets/images/user3.jpg' },
        status: 'PROCESSING',
        amount: '$125.25',
        date: '11/06/2018',
    },
    {
        user: { name: 'Tahimi', photoUrl: '/assets/images/user4.jpg' },
        status: 'EXPIRED',
        amount: '$104.55',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pepe' },
        status: 'VERIFIED',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Jose' },
        status: 'VERIFIED',
        amount: '$144.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pedro' },
        status: 'PROCESSING',
        amount: '$94.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Juan' },
        status: 'PROCESSING',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pablo' },
        status: 'EXPIRED',
        amount: '$104.55',
        date: '11/04/2018',
    },
    {
        user: { name: 'Maria' },
        status: 'VERIFIED',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Juana' },
        status: 'VERIFIED',
        amount: '$144.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Julio' },
        status: 'PROCESSING',
        amount: '$94.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Olga' },
        status: 'PROCESSING',
        amount: '$124.05',
        date: '11/04/2018',
    },
];

export default class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = { activePage: 1 };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    getTableData() {
        const { activePage } = this.state;
        const firstItem = (activePage - 1) * 8;
        const lastItem = firstItem + 8;
        return users.slice(firstItem, lastItem);
    }

    handleOnChange(event, page) {
        this.setState({ activePage: page });
    }

    renderPagination() {
        const { activePage } = this.state;
        if (users.length > 8) {
            return (
                <div className="react-rainbow-admin-orders_pagination">
                    <Pagination
                        pages={Math.ceil(users.length / 8)}
                        activePage={activePage}
                        onChange={this.handleOnChange} />
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <div className="react-rainbow-admin-orders_container">
                <div className="react-rainbow-admin-orders_cards-container">
                    <Breadcrumbs>
                        <Breadcrumb label="Pages" href="pages" />
                        <Breadcrumb label="Orders" />
                    </Breadcrumbs>
                    <PageHeader
                        className="react-rainbow-admin-orders_header"
                        title="Orders"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    <div className="react-rainbow-admin-orders_cards">
                        <Card
                            className="react-rainbow-admin-orders_card"
                            title="$20058"
                            actions={(
                                <Badge variant="brand" className="react-rainbow-admin-orders_badge">
                                    <FontAwesomeIcon icon={faArrowUp} pull="left" size="sm" />
                                    20.5%
                                </Badge>
                            )}>
                            <h1 className="react-rainbow-admin-orders_chart-title">Total orders</h1>
                            <div className="react-rainbow-admin-orders_chart">
                                <Chart
                                    labels={['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul']}
                                    type="line"
                                    showLegend={false}>
                                    <Dataset values={[370, 90, 950, 530, 800, 960, 650]} borderColor="#1de9b6" />
                                </Chart>
                            </div>
                        </Card>
                        <Card
                            className="react-rainbow-admin-orders_card"
                            title="$20058"
                            actions={(
                                <Badge className="react-rainbow-admin-orders_badge" variant="brand">
                                    <FontAwesomeIcon icon={faArrowUp} pull="left" size="sm" />
                                    20.5%
                                </Badge>
                            )}>
                            <h1 className="react-rainbow-admin-orders_chart-title">Total orders</h1>
                            <div className="react-rainbow-admin-orders_chart">
                                <Chart
                                    labels={['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul']}
                                    type="line"
                                    showLegend={false}>
                                    <Dataset values={[270, 190, 350, 930, 500, 960, 1000]} borderColor="#1de9b6" />
                                </Chart>
                            </div>
                        </Card>
                    </div>
                </div>
                <div className="react-rainbow-admin-orders_table-container">
                    <Table className="react-rainbow-admin-orders_table" data={this.getTableData()}>
                        <Column header="USER" field="user" component={User} />
                        <Column header="STATUS" field="status" component={Status} />
                        <Column header="AMOUNT" field="amount" />
                        <Column header="DATE" field="date" />
                        <Column field="edit" />
                    </Table>
                    {this.renderPagination()}
                </div>
            </div>
        );
    }
}
