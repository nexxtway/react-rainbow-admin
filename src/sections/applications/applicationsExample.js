import React from 'react';
import PropTypes from 'prop-types';
import ApplicationsCards from '../../components/ApplicationsCards';

export default function ApplicationsExample({ response }) {
    if (response && Array.isArray(response.results) && response.results.length) {
        return <ApplicationsCards results={response.results} />;
    }
    return null;
}

ApplicationsExample.propTypes = {
    response: PropTypes.object,
};

ApplicationsExample.defaultProps = {
    response: null,
};
