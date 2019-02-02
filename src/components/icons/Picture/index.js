import React from 'react';
import PropTypes from 'prop-types';

export default function Picture(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} width="30px" height="22px" viewBox="0 0 30 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group-8" transform="translate(-717.000000, -566.000000)" fillRule="nonzero">
                    <g id="picture" transform="translate(718.000000, 567.000000)">
                        <polygon id="Rectangle-path" stroke="#E7ECED" strokeWidth="2" fill="#004CA9" points="0 0.4 27.8 0.4 27.8 19.6 0 19.6" />
                        <circle id="Oval" fill="#EFCE4A" cx="5.8" cy="4.9414" r="2.7414" />
                        <polygon id="Shape" fill="#56CB5F" points="26.8 13.6666 26.2 13 19 6.4 12.7 13.3 15.9898 16.5898 18.4 19 26.8 19" />
                        <polygon id="Shape" fill="#62D76B" points="1 19 18.4 19 15.9898 16.5898 9.4102 10.0102 1 17.4154" />
                    </g>
                </g>
            </g>
        </svg>
    );
}

Picture.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Picture.defaultProps = {
    className: undefined,
    style: undefined,
};
