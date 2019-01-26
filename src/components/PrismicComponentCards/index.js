import React from 'react';
import PropTypes from 'prop-types';
import PrismicComponentCard from './prismicComponentCard';
import './styles.css';

export default function PrismicComponentCards({ results }) {
    return results.map(({ data }, index) => {
        const key = `component-card-${index}`;
        return (
            <PrismicComponentCard
                key={key}
                href={data['component-url'].url}
                name={data['component-name'][0].text}
                src={data['component-image'].url} />
        );
    });
}

PrismicComponentCards.propTypes = {
    results: PropTypes.array,
};

PrismicComponentCards.defaultProps = {
    results: [],
};
