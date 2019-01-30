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
        style,
    } = props;

    const getContainerClassNames = () => classnames('react-rainbow-admin-tile',
        'rainbow-align-content_space-between',
        'rainbow-p-vertical_medium',
        'rainbow-p-horizontal_small',
        className);

    const getVariantClassNames = () => classnames('react-rainbow-admin-tile_content rainbow-p-top_small', {
        'react-rainbow-admin-tile_content--inverse': variant === 'inverse',
    });

    const getTitleClassNames = () => classnames('react-rainbow-admin-tile_title rainbow-font-size-text_medium', {
        'react-rainbow-admin-tile_title--inverse': variant === 'inverse',
    });

    return (
        <Card className={getContainerClassNames()} style={style}>
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
    style: PropTypes.object,
};

Tile.defaultProps = {
    icon: undefined,
    title: undefined,
    className: undefined,
    label: undefined,
    variant: 'base',
    style: undefined,
};
