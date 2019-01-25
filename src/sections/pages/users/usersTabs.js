import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Column, Tab, Table, Tabset,
} from 'react-rainbow-components';
import UserCell from '../../../components/UserCell';
import Status from './status';
import TablePagination from '../../../components/TablePagination';
import getActiveUsers from './getActiveUsers';

export default class UsersTabs extends Component {
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
        const activeUsers = getActiveUsers(users);
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
        const activeUsers = getActiveUsers(users);
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
        const { activeTabName, activePage } = this.state;
        return (
            <div>
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

UsersTabs.propTypes = {
    users: PropTypes.array.isRequired,
};
