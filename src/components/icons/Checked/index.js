import React from 'react';
import PropTypes from 'prop-types';

export default function Checked(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} width="11px" height="8px" viewBox="0 0 11 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group-8" transform="translate(-948.000000, -519.000000)" fill="#A0A0BC" fillRule="nonzero" stroke="#A0A0BC" strokeWidth="0.5">
                    <g id="Group-11" transform="translate(454.000000, 262.000000)">
                        <g id="Group-8-Copy-3" transform="translate(451.000000, 213.000000)">
                            <g id="checked" transform="translate(42.750000, 44.250000)">
                                <path d="M10.5568189,0.724696177 C10.3444072,0.207117903 9.91432394,0.26538833 9.44730181,0.357923541 C9.16839235,0.416052314 7.92787726,0.779167002 5.96508048,2.84884105 C5.15055332,3.70780684 4.6132334,4.39260362 4.25946278,4.91485714 C4.04335412,4.64952918 3.79577264,4.36565795 3.53576861,4.10554527 C2.73616298,3.30615694 1.84445674,2.75717505 1.80697183,2.73410463 C1.43277465,2.50535614 0.944275654,2.62306237 0.714875252,2.99696982 C0.485764588,3.37087726 0.603108652,3.86017304 0.976726358,4.08979074 C0.984368209,4.09460765 1.75011066,4.56804024 2.41161972,5.22973038 C3.08623944,5.90442254 3.69747887,6.81684507 3.70349095,6.82568209 C3.85230785,7.0494326 4.10217103,7.17999598 4.36503622,7.17999598 C4.41016298,7.17999598 4.45572435,7.17619316 4.50106841,7.168334 C4.81130584,7.11444266 5.0605171,6.88247082 5.13650101,6.576833 C5.13842052,6.56948089 5.52780601,5.73072536 7.11867404,3.94285714 C8.625,2.25 10.875,1.5 10.5568189,0.724696177 Z" id="Shape" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

Checked.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Checked.defaultProps = {
    className: undefined,
    style: undefined,
};
