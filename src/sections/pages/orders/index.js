import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Breadcrumb, Breadcrumbs } from 'react-rainbow-components';
import { navigateTo } from '../../../history';
import PageHeader from '../../../components/PageHeader';
import ContentPage from './contentPage';
import fetchOrdersData from '../../../redux/actions/orders';
import './styles.css';

class Orders extends Component {
    componentDidMount() {
        const { fetchOrdersData } = this.props;
        fetchOrdersData();
    }

    render() {
        return (
            <div className="react-rainbow-admin-orders_container">
                <div className="react-rainbow-admin-orders_header-container">
                    <Breadcrumbs>
                        <Breadcrumb label="Pages" onClick={() => navigateTo('/pages')} />
                        <Breadcrumb label="Orders" />
                    </Breadcrumbs>
                    <PageHeader
                        className="react-rainbow-admin-orders_header"
                        title="Orders"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </div>
                <ContentPage {...this.props} />
            </div>
        );
    }
}

Orders.propTypes = {
    fetchOrdersData: PropTypes.func.isRequired,
};

function stateToProps(state) {
    return state.orders;
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        fetchOrdersData,
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(Orders);
