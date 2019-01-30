import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import {
    Badge, Card, Chart, Dataset, Spinner,
} from 'react-rainbow-components';
import OrdersTable from '../../../components/OrdersTable';

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
            <div className="react-rainbow-admin-orders_cards-container">
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
                            labels={chartsData.totalOrders.labels}
                            type="line"
                            showLegend={false}
                            maintainAspectRatio={false}>
                            <Dataset values={chartsData.totalOrders.value} borderColor="#1de9b6" backgroundColor="#1de9b6" />
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
                            labels={chartsData.totalOrders.labels}
                            type="line"
                            showLegend={false}
                            maintainAspectRatio={false}>
                            <Dataset values={chartsData.totalOrders.value} borderColor="#1de9b6" backgroundColor="#1de9b6" />
                        </Chart>
                    </div>
                </Card>
            </div>
            <OrdersTable orders={orders} />
        </div>
    );
}

ContentPage.propTypes = {
    orders: PropTypes.array.isRequired,
    chartsData: PropTypes.object.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
