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

const sectionsName = [
    { name: 'Layout Components' },
    { name: 'Forms' },
    { name: 'Miscellaneous' },
    { name: 'Data View' },
];

function SectionTitle({ tag, componentsFiltered }) {
    return sectionsName.map((component, index) => {
        const { name } = component;
        const key = `title-${index}`;
        return (
            <RenderIf key={key} isTrue={!!componentsFiltered.length && tag === name}>
                <h2 className="react-rainbow-admin-components_cards-section_title">
                    {name}
                </h2>
            </RenderIf>
        );
    });
}

SectionTitle.propTypes = {
    componentsFiltered: PropTypes.array,
    tag: PropTypes.string,
};

SectionTitle.defaultProps = {
    componentsFiltered: undefined,
    tag: undefined,
};

export default function ComponentCards(props) {
    const {
        response,
        searchTerm,
        tag,
    } = props;
    if (response && Array.isArray(response.results) && response.results.length) {
        const componentsFiltered = filter(searchTerm, response.results);
        return (
            <div>
                <SectionTitle tag={tag} componentsFiltered={componentsFiltered} />
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
    tag: PropTypes.string,
};

ComponentCards.defaultProps = {
    response: null,
    searchTerm: undefined,
    tag: undefined,
};
