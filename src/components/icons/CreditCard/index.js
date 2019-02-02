import React from 'react';
import PropTypes from 'prop-types';

export default function CreditCard(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
            <g id="new-pages" fill="none" fillRule="evenodd">
                <g id="admin-forms" transform="translate(-175 -1498)">
                    <g id="Group-33" transform="translate(129 1306)">
                        <g id="default-card" transform="translate(46 189)">
                            <g id="card">
                                <rect id="shape" width="20" height="20" />
                                <g id="Group" transform="translate(0 3.333)" fillRule="nonzero">
                                    <path d="M20,1.2947997 L20,12.0385751 C20,12.7544368 19.4041337,13.3333333 18.6672874,13.3333333 L1.33271264,13.3333333 C0.59590897,13.3333333 0,12.7544368 0,12.0385751 L0,1.2947997 C0,0.578938034 0.59590897,0 1.33271264,0 L18.6672874,0 C19.4041337,0 20,0.578938034 20,1.2947997 Z"
                                        id="Shape"
                                        fill="#D5D6DB" />
                                    <polygon id="Rectangle-path"
                                        fillOpacity="0.5"
                                        fill="#8898AA"
                                        points="0.833333333 7.5 9.16666667 7.5 9.16666667 8.33333333 0.833333333 8.33333333"
                                    />
                                    <rect id="Rectangle-path"
                                        fillOpacity="0.5"
                                        fill="#8898AA"
                                        x="0.833"
                                        y="10"
                                        width="18.333"
                                        height="1" />
                                    <rect id="Rectangle-path"
                                        fillOpacity="0.5"
                                        fill="#8898AA"
                                        y="2.5"
                                        width="20"
                                        height="1.667" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

CreditCard.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
CreditCard.defaultProps = {
    className: undefined,
    style: undefined,
};
