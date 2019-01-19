import React from 'react';
import PropTypes from 'prop-types';

export default function Facebook(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>icon-facebook</title>
            <desc>Created with Sketch.</desc>
            <g id="icon-facebook" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path d="M9.99609375,22 L9.99609375,13.0546875 L7,13.0546875 L7,9.5 L9.99609375,9.5 L9.99609375,6.69921875 C9.99609375,3.65625 11.8554688,2 14.5703125,2 C15.8710938,2 16.9882812,2.09765625 17.3125,2.140625 L17.3125,5.3203125 L15.4296875,5.3203125 C13.953125,5.3203125 13.6679688,6.0234375 13.6679688,7.05078125 L13.6679688,9.5 L17,9.5 L16.5429688,13.0546875 L13.6679688,13.0546875 L13.6679688,22" id="Shape" fill="#FFFFFF" fillRule="nonzero" />
            </g>
        </svg>
    );
}

Facebook.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Facebook.defaultProps = {
    className: undefined,
    style: undefined,
};
