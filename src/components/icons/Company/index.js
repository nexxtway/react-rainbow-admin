import React from 'react';
import PropTypes from 'prop-types';

export default function Company(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} height="14px" width="20px" version="1.1" viewBox="0 0 20 14">
            <g id="new-pages" fill="none" stroke="none" strokeWidth="1">
                <g id="admin-forms" transform="translate(-583.000000, -756.000000)">
                    <g id="Group-15" transform="translate(569.000000, 722.000000)">
                        <g id="company" transform="translate(14.000000, 34.000000)">
                            <polygon id="Path" fill="#01B6F5" points="5.5 0 14.5 0 14.5 13.65625 5.5 13.65625" />
                            <polygon id="Path" fill="#38CCFF" points="14.5 5.40625 20 5.40625 20 13.65625 14.5 13.65625" />
                            <path id="Path" d="M18.25,13.65625 L16.25,13.65625 L16.25,11.1155875 C16.2500014,10.7583496 16.5395996,10.4687514 16.8968375,10.46875 L17.6031625,10.46875 C17.9604004,10.4687514 18.2499986,10.7583496 18.25,11.1155875 L18.25,13.65625 Z" fill="#009ACF" />
                            <polygon id="Path" fill="#38CCFF" points="0 5.40625 5.5 5.40625 5.5 13.65625 0 13.65625" />
                            <path id="Path" d="M3.75,13.65625 L1.75,13.65625 L1.75,11.0530875 C1.75000138,10.6958496 2.03959959,10.4062514 2.3968375,10.40625 L3.1031625,10.40625 C3.46040041,10.4062514 3.74999862,10.6958496 3.75,11.0530875 L3.75,13.65625 Z" fill="#009ACF" />
                            <path id="Path" d="M10.5481875,9.65625 L9.4518125,9.65625 C9.06421387,9.65625414 8.75000414,9.97046387 8.75,10.3580625 L8.75,13.65625 L11.25,13.65625 L11.25,10.3580625 C11.2500007,10.17193 11.1760601,9.99342091 11.0444446,9.86180539 C10.9128291,9.73018987 10.73432,9.65624934 10.5481875,9.65625 Z" fill="#009ACF" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

Company.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Company.defaultProps = {
    className: undefined,
    style: undefined,
};
