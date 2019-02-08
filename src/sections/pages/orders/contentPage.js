import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-rainbow-components';
import OrdersTable from './ordersTable';
import ChartsSection from './chartsSection';

export default function ContentPage(props) {
    const {
        orders,
        chartsData,
        isLoading,
    } = props;

    if (isLoading) {
        return <Spinner size="large" />;
    }
    return (
        <div>
            <ChartsSection chartsData={chartsData} />
            <OrdersTable orders={orders} />
        </div>
    );
}

ContentPage.propTypes = {
    orders: PropTypes.array.isRequired,
    chartsData: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
