import React from 'react';
import PropTypes from 'prop-types';

export default function Application(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19">
            <g fill="none" fillRule="evenodd">
                <g fill="#E20460">
                    <path d="M4.918.709H1.92a.808.808 0 0 0-.807.807V2.6l2.306.752L5.725 2.6V1.516A.807.807 0 0 0 4.918.71zM14.739.709h2.996c.446 0 .808.361.808.807V2.6l-2.306.752L13.93 2.6V1.516c0-.446.362-.807.808-.807zM11.326.709H8.33a.808.808 0 0 0-.808.807V2.6l2.306.752 2.306-.752V1.516a.807.807 0 0 0-.808-.807z" />
                </g>
                <path fill="#F7076A" d="M18.543 2.6H1.113C.5 2.6 0 3.1 0 3.714V7.76l9.828 1.364 9.828-1.364V3.714c0-.615-.498-1.114-1.113-1.114z" />
                <path fill="#E20460" d="M1.582 7.76V3.714c0-.615.499-1.114 1.114-1.114H1.114C.499 2.6 0 3.1 0 3.714V7.76l9.828 1.364.791-.11L1.582 7.76z" />
                <path fill="#FF73AD" d="M9.828 11.768L0 12.918v4.046c0 .615.499 1.114 1.114 1.114h17.429c.615 0 1.113-.499 1.113-1.114V12.92l-9.828-1.151z" />
                <path fill="#F94D95" d="M1.582 16.964V12.92l9.037-1.059-.79-.092L0 12.918v4.046c0 .615.499 1.114 1.114 1.114h1.582a1.114 1.114 0 0 1-1.114-1.114z" />
                <path fill="#BFC1CA" d="M0 7.76h19.656v5.159H0z" />
                <path fill="#ACAEB6" d="M0 7.76h1.582v5.159H0z" />
            </g>
        </svg>
    );
}

Application.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Application.defaultProps = {
    className: undefined,
    style: undefined,
};
