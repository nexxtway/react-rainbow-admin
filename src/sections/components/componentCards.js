import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import PrismicComponentCards from '../../components/PrismicComponentCards';

function filter(query, data) {
    return data.filter((item) => {
        const regex = new RegExp(query, 'i');
        return regex.test(item.data['component-name'][0].text);
    });
}

export default function ComponentCards(props) {
    const {
        response,
        searchTerm,
        category,
    } = props;
    if (response && Array.isArray(response.results) && response.results.length) {
        const componentsFiltered = filter(searchTerm, response.results);
        return (
            <div>
                <RenderIf isTrue={!!componentsFiltered.length}>
                    <h2 className="react-rainbow-admin-components_cards-section_title">
                        {category}
                    </h2>
                </RenderIf>
                <section className="react-rainbow-admin-components_cards-section">
                    <PrismicComponentCards results={componentsFiltered} />
                </section>
            </div>
        );
    }
    return null;
}

ComponentCards.propTypes = {
    response: PropTypes.object,
    searchTerm: PropTypes.string,
    category: PropTypes.string,
};

ComponentCards.defaultProps = {
    response: null,
    searchTerm: undefined,
    category: undefined,
};
