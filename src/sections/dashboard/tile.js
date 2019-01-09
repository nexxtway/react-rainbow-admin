import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-rainbow-components/components/Card';
import './styles.css';

export default function Tile(props) {
    const {
        icon,
        label,
        total,
    } = props;

    return (
        <Card className="react-rainbow-admin-dashboard_card rainbow-align-content_space-between rainbow-p-vertical_medium rainbow-p-horizontal_small">
            {icon}
            <div className="rainbow-flex rainbow-flex_column rainbow-align_end">
                <h2 className="react-rainbow-admin-dashboard_card--title rainbow-color_gray-3 rainbow-font-size-text_medium">{label}</h2>
                <h1 className="react-rainbow-admin-dashboard_card--content rainbow-color_dark-1 rainbow-p-top_xx-small">{total}</h1>
            </div>
        </Card>
    );
}

Tile.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    total: PropTypes.string,
};

Tile.defaultProps = {
    icon: undefined,
    label: undefined,
    total: undefined,
};
