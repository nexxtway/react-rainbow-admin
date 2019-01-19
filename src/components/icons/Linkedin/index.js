import React from 'react';
import PropTypes from 'prop-types';

export default function Linkedin(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>icon-linkedin</title>
            <desc>Created with Sketch.</desc>
            <g id="icon-linkedin" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path d="M2.021373,21.6363736 L6.01417059,21.6363736 L6.01417059,8.32802424 L2.021373,8.32802424 L2.021373,21.6363736 Z M17.5766683,7.86704094 C15.6388989,7.86704094 13.9050512,8.57469203 12.6750792,10.1366774 L12.6750792,8.28425352 L8.6676426,8.28425352 L8.6676426,21.63652 L12.6750792,21.63652 L12.6750792,14.4159609 C12.6750792,12.8899876 14.0731074,11.4013439 15.8242291,11.4013439 C17.5753508,11.4013439 18.0072024,12.8899876 18.0072024,14.3786314 L18.0072024,21.6352025 L22,21.6352025 L22,14.0814589 C21.9998536,8.83453495 19.5157553,7.86704094 17.5766683,7.86704094 Z M3.99910702,6.99806765 C5.1025977,6.99806765 5.99821404,6.10245131 5.99821404,4.99896063 C5.99821404,3.89546995 5.1025977,3 3.99910702,3 C2.89561634,3 2,3.89561634 2,4.99910702 C2,6.1025977 2.89561634,6.99806765 3.99910702,6.99806765 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero" />
            </g>
        </svg>
    );
}

Linkedin.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Linkedin.defaultProps = {
    className: undefined,
    style: undefined,
};
