import React from 'react';
import PropTypes from 'prop-types';
import PrismicApplicationCards from '../../components/PrismicApplicationCards';

export default function ApplicationsExample({ response }) {
    if (response && Array.isArray(response.results) && response.results.length) {
        return <PrismicApplicationCards results={response.results} />;
    }
    return null;
}

ApplicationsExample.propTypes = {
    response: PropTypes.object,
};

ApplicationsExample.defaultProps = {
    response: null,
};
