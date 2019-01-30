/* eslint-disable no-script-url, jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-rainbow-components/components/Card';
import './styles.css';

export default function ListCard(props) {
    const {
        title,
        component,
        footerLink,
    } = props;

    return (
        <Card className="react-rainbow-admin-dashboard_card rainbow-p-top_medium rainbow-p-bottom_small rainbow-p-horizontal_small">
            <h1 className="rainbow-color_gray-4 rainbow-font-size-heading_small rainbow-p-bottom_medium">
                {title}
            </h1>
            {component}
            <div className="react-rainbow-admin-dashboard_divider" />
            <div className="rainbow-p-top_small rainbow-align-content_center">
                {footerLink}
            </div>
        </Card>
    );
}

ListCard.propTypes = {
    title: PropTypes.string,
    component: PropTypes.object,
    footerLink: PropTypes.node,
};

ListCard.defaultProps = {
    title: undefined,
    component: {},
    footerLink: undefined,
};
