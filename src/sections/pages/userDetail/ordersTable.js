import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Column, Table } from 'react-rainbow-components';
import UserCell from '../../../components/UserCell';
import Status from './status';
import TablePagination from '../../../components/TablePagination';

export default class OrdersTable extends Component {
    constructor(props) {
        super(props);
        this.state = { activePage: 1 };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    getTableData() {
        const { orders } = this.props;
        const { activePage } = this.state;
        const firstItem = (activePage - 1) * 8;
        const lastItem = firstItem + 8;
        return orders.slice(firstItem, lastItem);
    }

    handleOnChange(event, page) {
        this.setState({ activePage: page });
    }

    render() {
        const { orders } = this.props;
        const { activePage } = this.state;
        const pages = Math.ceil(orders.length / 8);
        return (
            <div className="react-rainbow-admin-orders_table-container">
                <Table className="react-rainbow-admin-orders_table" data={this.getTableData()}>
                    <Column header="USER" field="user" component={UserCell} />
                    <Column header="STATUS" field="status" component={Status} />
                    <Column header="AMOUNT" field="amount" />
                    <Column header="DATE" field="date" />
                </Table>
                <TablePagination
                    pages={pages}
                    activePage={activePage}
                    onChange={this.handleOnChange} />
            </div>
        );
    }
}

OrdersTable.propTypes = {
    orders: PropTypes.array.isRequired,
};
