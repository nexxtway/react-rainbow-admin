import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Breadcrumb, Breadcrumbs } from 'react-rainbow-components';
import PageHeader from '../../../components/PageHeader';
import { navigateTo } from '../../../history';
import fetchUsersData from '../../../redux/actions/users';
import ContentPage from './contentPage';
import './styles.css';

class Users extends Component {
    componentDidMount() {
        const { fetchUsersData } = this.props;
        fetchUsersData();
    }

    render() {
        return (
            <div>
                <div className="react-rainbow-admin-users_header-container">
                    <Breadcrumbs>
                        <Breadcrumb label="Pages" onClick={() => navigateTo('/pages')} />
                        <Breadcrumb label="Users" />
                    </Breadcrumbs>
                    <PageHeader
                        className="react-rainbow-admin-users_header"
                        title="Users"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </div>
                <ContentPage {...this.props} />
            </div>
        );
    }
}

Users.propTypes = {
    fetchUsersData: PropTypes.func.isRequired,
};

function stateToProps(state) {
    return state.users;
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUsersData,
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(Users);
