/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-rainbow-components/components/Card';
import './styles.css';

function handleOnError(event) {
    event.target.src = '../icons/ComponentDefaultImage';
}

export default function PrismicComponentCards({ results }) {
    return results.map(({ data }, index) => {
        const key = `PrismicComponentCards-${index}`;
        return (
            <a
                className="react-rainbow-admin-component-cards_link"
                key={key}
                href={data['component-url'].url}
                target="_blank"
                rel="noopener noreferrer">
                <Card
                    className="react-rainbow-admin-component-cards_card"
                    footer={data['component-name'][0].text}>
                    <img
                        src={data['component-image'].url}
                        onError={handleOnError}
                        className="react-rainbow-admin-component-cards_card-image"
                        alt={`Component ${data['component-name'][0].text}`} />
                </Card>
            </a>
        );
    });
}

PrismicComponentCards.propTypes = {
    results: PropTypes.array,
};

PrismicComponentCards.defaultProps = {
    results: [],
};
