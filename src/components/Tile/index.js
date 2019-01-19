import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from 'react-rainbow-components/components/Card';
import './styles.css';

export default function Tile(props) {
    const {
        icon,
        title,
        label,
        variant,
        className,
    } = props;

    function getClassNames() {
        return classnames('react-rainbow-admin-tile rainbow-align-content_space-between rainbow-p-vertical_medium rainbow-p-horizontal_small',
            className);
    }

    function getVariantClassNames() {
        if (variant === 'inverse') {
            return 'react-rainbow-admin-tile--content rainbow-p-top_small';
        }
        return 'react-rainbow-admin-tile--content rainbow-p-top_small react-rainbow-admin-tile--content-dark';
    }

    function getTitleClassNames() {
        if (variant === 'inverse') {
            return 'react-rainbow-admin-tile--title rainbow-color_gray-2 rainbow-font-size-text_medium';
        }
        return 'react-rainbow-admin-tile--title rainbow-color_gray-3 rainbow-font-size-text_medium';
    }

    return (
        <Card className={getClassNames()}>
            {icon}
            <div className="rainbow-flex rainbow-flex_column rainbow-align_end">
                <h2 className={getTitleClassNames()}>{title}</h2>
                <h1 className={getVariantClassNames()}>{label}</h1>
            </div>
        </Card>
    );
}

Tile.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    variant: PropTypes.oneOf([
        'base',
        'inverse',
    ]),
};

Tile.defaultProps = {
    icon: undefined,
    title: undefined,
    className: undefined,
    label: undefined,
    variant: 'base',
};
