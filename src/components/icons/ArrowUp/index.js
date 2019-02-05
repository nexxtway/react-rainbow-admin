import React from 'react';
import PropTypes from 'prop-types';

export default function ArrowUp(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} width="13px" height="15px" viewBox="0 0 13 15" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <title>arrow-up</title>
            <desc>Created with Sketch.</desc>
            <g id="dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group-8" transform="translate(-975.000000, -617.000000)" fill="#FFFFFF" fillRule="nonzero">
                    <g id="arrow-up" transform="translate(975.000000, 617.000000)">
                        <path d="M6.88992411,0.248330693 C6.74245996,0.0931950564 6.54072679,0 6.32336639,0 C6.10600592,0 5.90427275,0.0931950564 5.7568086,0.248330693 L0.208435242,6.13055832 C-0.0867770927,6.44111377 -0.063478365,6.93777523 0.247077094,7.22503197 C0.394541241,7.36482455 0.588602917,7.43472081 0.77499303,7.43472081 C0.984397757,7.43472081 1.20175816,7.34919731 1.35717798,7.18610593 L5.57041849,2.74754934 L5.57041849,14.2237534 C5.57041849,14.6505185 5.91989999,15 6.34666512,15 C6.77371444,15 7.12291175,14.6505185 7.12291175,14.2237534 L7.12291175,2.74783345 L11.3131376,7.18639011 C11.6080659,7.49666146 12.0893843,7.51996019 12.4076113,7.22503197 C12.7178826,6.93010367 12.7335099,6.44111377 12.4462531,6.13055832 L6.88992411,0.248330693 Z" id="Shape" />
                    </g>
                </g>
            </g>
        </svg>
    );
}

ArrowUp.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
ArrowUp.defaultProps = {
    className: undefined,
    style: undefined,
};
