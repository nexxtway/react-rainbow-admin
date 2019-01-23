import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {
    Badge, Card, Chart, Column, Dataset, Spinner, Tab, Table, Tabset,
} from 'react-rainbow-components';
import Status from './status';
import UserCell from '../../../components/UserCell';
import TablePagination from '../../../components/TablePagination';


export default class ContentPage extends Component {
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
        const { users } = this.props;
        const activeUsers = users.filter(user => user.status === 'ONLINE');
        const { activeTabName, activePage } = this.state;
        const firstItem = (activePage - 1) * 8;
        const lastItem = firstItem + 8;
        if (activeTabName === 'allUsers') {
            return users.slice(firstItem, lastItem);
        }
        return activeUsers.slice(firstItem, lastItem);
    }

    getPages() {
        const { users } = this.props;
        const activeUsers = users.filter(user => user.status === 'ONLINE');
        const { activeTabName } = this.state;
        if (activeTabName === 'allUsers') {
            return Math.ceil(users.length / 8);
        }
        return Math.ceil(activeUsers.length / 8);
    }

    handleOnSelect(event, tab) {
        this.setState({ activeTabName: tab, activePage: 1 });
    }

    handleOnChange(event, page) {
        this.setState({ activePage: page });
    }

    render() {
        const {
            chartsData,
            isLoading,
        } = this.props;
        const { activeTabName, activePage } = this.state;

        if (isLoading) {
            return <Spinner size="large" />;
        }
        return (
            <div>
                <div className="react-rainbow-admin-users_cards-container">
                    <Card
                        className="react-rainbow-admin-users_card"
                        title="114 245"
                        actions={(
                            <Badge variant="brand" className="react-rainbow-admin-users_badge">
                                <FontAwesomeIcon icon={faArrowUp} pull="left" size="sm" />
                                20.5%
                            </Badge>
                        )}>
                        <h1 className="react-rainbow-admin-users_card-title">Total users</h1>
                        <div className="react-rainbow-admin-users_chart">
                            <Chart
                                labels={chartsData.totalUsers.labels}
                                type="line"
                                showLegend={false}
                                maintainAspectRatio={false}>
                                <Dataset values={chartsData.totalUsers.value} borderColor="#1de9b6" />
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
                        <h1 className="react-rainbow-admin-users_card-title">Active users</h1>
                        <div className="react-rainbow-admin-users_chart">
                            <Chart
                                labels={chartsData.activeUsers.labels}
                                type="line"
                                showLegend={false}
                                maintainAspectRatio={false}>
                                <Dataset values={chartsData.activeUsers.value} borderColor="#1de9b6" />
                            </Chart>
                        </div>
                    </Card>
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
                        <Column header="USER" field="user" component={UserCell} />
                        <Column header="EMAIL" field="email" />
                        <Column header="PHONE NUMBER" field="phoneNumber" />
                        <Column header="CURRENT STATUS" field="status" component={Status} />
                        <Column field="edit" />
                    </Table>
                    <TablePagination
                        pages={this.getPages()}
                        activePage={activePage}
                        onChange={this.handleOnChange} />
                </div>
            </div>
        );
    }
}

ContentPage.propTypes = {
    users: PropTypes.array.isRequired,
    chartsData: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
