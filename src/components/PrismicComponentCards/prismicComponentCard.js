import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-rainbow-components/components/Card';

const defaultImage = '/assets/images/component-default-image.svg';

export default class PrismicComponentCard extends Component {
    constructor(props) {
        super(props);
        const { src } = props;
        this.state = {
            src: src || defaultImage,
        };
        this.handleOnError = this.handleOnError.bind(this);
    }

    handleOnError() {
        this.setState({ src: defaultImage });
    }

    render() {
        const {
            href,
            name,
        } = this.props;
        const { src } = this.state;
        return (
            <a
                className="react-rainbow-admin-component-cards_link"
                href={href}
                target="_blank"
                rel="noopener noreferrer">
                <Card
                    className="react-rainbow-admin-component-cards_card"
                    footer={name}>
                    <img
                        src={src}
                        onError={this.handleOnError}
                        className="react-rainbow-admin-component-cards_card-image"
                        alt={`Component ${name}`} />
                </Card>
            </a>
        );
    }
}

PrismicComponentCard.propTypes = {
    href: PropTypes.string,
    src: PropTypes.string,
    name: PropTypes.string,
};

PrismicComponentCard.defaultProps = {
    href: undefined,
    src: undefined,
    name: undefined,
};
