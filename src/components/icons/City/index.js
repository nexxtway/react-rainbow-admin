import React from 'react';
import PropTypes from 'prop-types';

export default function City(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} height="18px" width="18px" version="1.1" viewBox="0 0 18 18">
            <g id="new-pages" fill="none" stroke="none" strokeWidth="1">
                <g id="admin-forms" transform="translate(-176.000000, -930.000000)">
                    <g id="Group-17" transform="translate(162.000000, 898.000000)">
                        <g id="cityscape" transform="translate(14.000000, 32.000000)">
                            <g id="Group">
                                <polygon id="Path" fill="#08446D" points="14.8064516 18 0 18 0 14.0225806 2.17741935 11.9032258 14.8064516 11.9032258" />
                                <rect height="1.74193548" id="Rectangle" width="2.03225806" fill="#0091C4" x="5.80645161" y="0" />
                            </g>
                            <rect height="5.80645161" id="Rectangle" width="5.51612903" fill="#0091C4" x="4.06451613" y="0.580645161" />
                            <g id="Group" fill="#01B6F5" transform="translate(2.903226, 2.580645)">
                                <rect height="15.3870968" id="Rectangle" width="7.83870968" x="0" y="0.0322580645" />
                            </g>
                            <g id="Group" fill="#0091C4" transform="translate(11.612903, 0.362903)">
                                <rect height="10.7419355" id="Rectangle" width="5.51612903" x="0" y="6.89516129" />
                                <rect height="4.06451613" id="Rectangle" width="3.77419355" x="0.870967742" y="5.15322581" />
                                <rect height="3.77419355" id="Rectangle" width="2.03225806" x="1.74193548" y="3.12096774" />
                                <polygon id="Path" points="1.59677419 7.0983871 2.75806452 0.014516129 3.91935484 7.0983871 2.75806452 8.25967742" />
                            </g>
                            <g id="Group" fill="#061C3F" fillOpacity="0.279495018" transform="translate(12.774194, 8.419355)">
                                <rect height="8.41935484" id="Rectangle" width="1" x="0" y="0" />
                                <rect height="8.41935484" id="Rectangle" width="1" x="1.4516129" y="0" />
                                <rect height="8.41935484" id="Rectangle" width="1" x="2.61290323" y="0" />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

City.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
City.defaultProps = {
    className: undefined,
    style: undefined,
};
