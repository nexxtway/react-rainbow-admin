import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-rainbow-components/components/Card';
import GithubIcon from '../icons/Github';
import './styles.css';

export default function PrismicApplicationCards({ results }) {
    return results.map(({ data, id }) => (
        <section key={id} className="react-rainbow-admin-applications-cards_container">
            <a
                className="react-rainbow-admin-applications-cards_example-link"
                href={data['example-url'].url}
                target="_blank"
                rel="noopener noreferrer">

                <Card
                    className="react-rainbow-admin-applications-cards"
                    footer={(
                        <div className="react-rainbow-admin-applications-cards_content">
                            <p className="react-rainbow-admin-applications-cards_header">{data.title[0].text}</p>
                            <p className="react-rainbow-admin-applications-cards_description">{data.description[0].text}</p>
                        </div>
                    )}>
                    <div className="react-rainbow-admin-applications-cards_img-container">
                        <img
                            className="react-rainbow-admin-applications-cards_img"
                            src={data.image.url}
                            alt={data.title[0].text} />
                    </div>
                </Card>
            </a>
            <a
                className="react-rainbow-admin-applications-cards_github-link"
                href={data['github-url'].url}
                target="_blank"
                rel="noopener noreferrer">

                <GithubIcon />
            </a>
        </section>
    ));
}

PrismicApplicationCards.propTypes = {
    results: PropTypes.array,
};

PrismicApplicationCards.defaultProps = {
    results: [],
};
