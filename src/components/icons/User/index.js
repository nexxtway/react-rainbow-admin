import React from 'react';
import PropTypes from 'prop-types';

export default function User(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} height="20px" width="20px" version="1.1" viewBox="0 0 20 20">
            <g id="new-pages" fill="none" stroke="none" strokeWidth="1">
                <g id="admin-forms" transform="translate(-627.000000, -275.000000)">
                    <g id="Group-47-Copy" transform="translate(581.000000, 137.000000)">
                        <g id="Group-4" transform="translate(32.000000, 106.000000)">
                            <g id="Group-9">
                                <g id="user" transform="translate(14.000000, 32.000000)">
                                    <circle id="Oval-3" cx="9.81481481" cy="9.81481481" fill="#009ACF" r="9.81481481" />
                                    <g id="users" transform="translate(4.074074, 5.555556)">
                                        <g id="Group">
                                            <ellipse id="Oval" cx="5.90968275" cy="3.02612277" fill="#FFFFFF" rx="2.95484138" ry="2.99842787" />
                                            <path id="Shape" d="M5.90968275,7.66003497 C3.09686639,7.66003497 0.74304821,9.65414323 0.146223102,12.3251876 C0.130929716,12.393632 2.59259259,14.0740741 5.90968275,14.0740741 C9.22677291,14.0740741 11.6344167,12.1619891 11.622907,12.1178754 C10.9533429,9.55161739 8.64919574,7.66003497 5.90968275,7.66003497 Z" fill="#38CCFF" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

User.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
User.defaultProps = {
    className: undefined,
    style: undefined,
};
