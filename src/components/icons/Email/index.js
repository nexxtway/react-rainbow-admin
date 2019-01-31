import React from 'react';
import PropTypes from 'prop-types';

export default function Email(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} height="13px" width="18px" version="1.1" viewBox="0 0 18 13">
            <g id="new-pages" fill="none" stroke="none" strokeWidth="1">
                <g id="admin-forms" transform="translate(-175.000000, -278.000000)">
                    <g id="Group-23" transform="translate(129.000000, 137.000000)">
                        <g id="Group-47">
                            <g id="email" transform="translate(46.000000, 141.000000)">
                                <path id="Shape" d="M17.6630664,0.268887872 L8.9869016,5.78277803 L0.310736842,0.268887872 C0.120398169,0.444356979 0,0.694709382 0,0.972411899 L0,11.8115011 C0,12.0905629 0.121551487,12.3419451 0.313496568,12.5174966 L8.98686041,7.00640732 L17.8998261,12.7701144 L17.9737209,12.7701144 L17.9737208,0.972411899 C17.9738032,0.694709382 17.853405,0.444356979 17.6630664,0.268887872 Z" fill="#009ACF" />
                                <path id="Shape" d="M0.958613272,12.7701144 L17.8999085,12.7701144 L11.8496018,6.39197712 L6.12416018,6.39197712 L0.313496568,12.5175378 C0.484187643,12.67373 0.710402746,12.7701144 0.958613272,12.7701144 Z" fill="#01B6F5" />
                                <path id="Shape" d="M0.958613272,0.0138398169 C0.709084668,0.0138398169 0.481757437,0.111254005 0.310736842,0.268929062 L8.32555606,8.67945995 C8.68930435,9.06112586 9.28445767,9.06112586 9.64820595,8.67945995 L17.6630664,0.268887872 C17.4920458,0.111212815 17.2647185,0.013798627 17.0151899,0.013798627 L0.958613272,0.013798627 L0.958613272,0.0138398169 Z" fill="#38CCFF" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

Email.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Email.defaultProps = {
    className: undefined,
    style: undefined,
};
