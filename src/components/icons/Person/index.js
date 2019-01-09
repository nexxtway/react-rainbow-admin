import React from 'react';
import PropTypes from 'prop-types';

export default function Person(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16">
            <g fill="#FFF" fillRule="nonzero">
                <path d="M8.208 8.239a4.006 4.006 0 0 1-4.001-4.002 4.006 4.006 0 0 1 4.001-4 4.006 4.006 0 0 1 4.002 4A4.006 4.006 0 0 1 8.208 8.24zm0-7.275a3.278 3.278 0 0 0-3.274 3.273 3.278 3.278 0 0 0 3.274 3.274 3.278 3.278 0 0 0 3.274-3.274A3.278 3.278 0 0 0 8.208.964zM.817 14.95a.375.375 0 1 1-.634-.4c2.065-3.27 4.765-4.925 8.067-4.925 3.302 0 6.002 1.654 8.067 4.925a.375.375 0 1 1-.634.4c-1.935-3.063-4.402-4.575-7.433-4.575-3.031 0-5.498 1.512-7.433 4.575z" />
            </g>
        </svg>
    );
}

Person.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Person.defaultProps = {
    className: undefined,
    style: undefined,
};
