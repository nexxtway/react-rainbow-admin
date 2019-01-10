import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function TitlePage(props) {
    const {
        title,
        description,
        className,
    } = props;

    return (
        <div className={className}>
            <h1 className="react-rainbow-admin-header-pages_title">{title}</h1>
            <p className="react-rainbow-admin-header-pages_description">{description}</p>
        </div>
    );
}

TitlePage.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    className: PropTypes.string,
};

TitlePage.defaultProps = {
    title: undefined,
    description: undefined,
    className: undefined,
};
