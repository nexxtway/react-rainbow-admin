import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Breadcrumb,
    Breadcrumbs,
} from 'react-rainbow-components';
import { navigateTo } from '../../../history';
import ContentPage from './contentPage';
import fetchUserDetailsData from '../../../redux/actions/userDetails';
import './styles.css';


class UserDetails extends Component {
    componentDidMount() {
        const { fetchUserDetailsData, match } = this.props;
        const { uid } = match.params;
        fetchUserDetailsData(uid);
    }

    render() {
        return (
            <div className="react-rainbow-admin-user-detail_wrapper">
                <Breadcrumbs className="react-rainbow-admin-user-detail_breadcrumbs">
                    <Breadcrumb label="Pages" onClick={() => navigateTo('/pages')} />
                    <Breadcrumb label="Users" onClick={() => navigateTo('/pages/users')} />
                    <Breadcrumb label="User Details" />
                </Breadcrumbs>
                <ContentPage {...this.props} />
            </div>
        );
    }
}

UserDetails.propTypes = {
    fetchUserDetailsData: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
};

function stateToProps(state) {
    return state.userDetails;
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUserDetailsData,
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(UserDetails);
