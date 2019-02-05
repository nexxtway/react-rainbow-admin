import React from 'react';
import PropTypes from 'prop-types';

export default function Emoji(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group-8" transform="translate(-470.000000, -565.000000)" fillRule="nonzero">
                    <g id="emoji" transform="translate(470.000000, 565.000000)">
                        <circle id="Oval-2" fill="#FFCC00" cx="12" cy="11.9189189" r="11.1891892" />
                        <path d="M19.0536486,12.4862432 L17.7563514,12.4862432 C17.7563514,15.8916486 14.9727568,18.6483243 11.5673514,18.6483243 L11.5673514,19.9456216 C15.7024865,19.9456216 19.0536486,16.6213784 19.0536486,12.4862432 Z" id="Shape" fill="#32325D" />
                        <circle id="Oval" fill="#32325D" cx="7.59445946" cy="8.59443243" r="1.2972973" />
                        <circle id="Oval" fill="#32325D" cx="15.5404054" cy="8.59443243" r="1.2972973" />
                    </g>
                </g>
            </g>
        </svg>
    );
}

Emoji.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Emoji.defaultProps = {
    className: undefined,
    style: undefined,
};
