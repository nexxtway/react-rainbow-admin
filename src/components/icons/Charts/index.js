import React from 'react';
import PropTypes from 'prop-types';

export default function Charts(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <g fill="none" fillRule="nonzero">
                <path fill="#FC0" d="M9.98 19.715c5.376 0 9.735-4.237 9.735-9.614 0 0-9.98 0-9.98.122l-6.06 7.176a9.697 9.697 0 0 0 6.304 2.316z" />
                <path fill="#FF6837" d="M10.223 9.858l9.492-.122a9.736 9.736 0 0 0-5.395-8.717s-4.097 8.717-4.097 8.839z" />
                <path fill="#FE4849" d="M14.02.869C12.834.287 11.513.061 10.117.007c0 0-.016 9.729-.138 9.729.017 0 4.04-8.867 4.04-8.867z" />
                <path fill="#1AD1A3" d="M9.736 9.736V0C4.359 0 0 4.359 0 9.736a9.715 9.715 0 0 0 3.47 7.45l6.266-7.45z" />
            </g>
        </svg>
    );
}

Charts.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Charts.defaultProps = {
    className: undefined,
    style: undefined,
};
