import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Column, Table } from 'react-rainbow-components';
import Status from '../../../components/OrdersStatus';
import OrderId from '../../../components/OrderId';
import TablePagination from '../../../components/TablePagination';

export default class OrdersDetailsTable extends Component {
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
            <div className="react-rainbow-admin-user-details_table-container">
                <Table className="react-rainbow-admin-user-details_table" data={this.getTableData()}>
                    <Column header="ORDER ID" field="id" component={OrderId} />
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

OrdersDetailsTable.propTypes = {
    orders: PropTypes.array.isRequired,
};
