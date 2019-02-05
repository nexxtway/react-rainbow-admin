import React from 'react';
import PropTypes from 'prop-types';

export default function PhotoCamera(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} width="31px" height="23px" viewBox="0 0 31 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g id="dashboard" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group-8" transform="translate(-845.000000, -565.000000)" fillRule="nonzero">
                    <g id="photo-camera" transform="translate(845.000000, 565.000000)">
                        <path d="M28.6096154,4.8 L23.6769231,4.8 L22.1537616,2.02403846 C21.8852093,1.21947114 21.1308542,0.676682708 20.2813618,0.676923077 L11.287869,0.676923077 C10.437654,0.675961538 9.68233549,1.21875003 9.41354229,2.02403846 L7.89230769,4.8 L2.95961538,4.8 C1.86999136,4.8 0.986538462,5.68173077 0.986538462,6.76923077 L0.986538462,20.7384615 C0.986538462,21.8259615 1.86999136,22.7076923 2.95961538,22.7076923 L28.6096154,22.7076923 C29.6992394,22.7076923 30.5826923,21.8259615 30.5826923,20.7384615 L30.5826923,6.76923077 C30.5826923,5.68173077 29.6992394,4.8 28.6096154,4.8 Z" id="Shape" fill="#01B6F5" />
                        <path d="M21.7151442,13.3461538 C21.7151442,16.5748734 19.0925977,19.1923077 15.8575721,19.1923077 C12.6225465,19.1923077 10,16.5748734 10,13.3461538 C10,10.1174343 12.6225465,7.5 15.8575721,7.5 C19.0925977,7.5 21.7151442,10.1174343 21.7151442,13.3461538 Z" id="Shape" fill="#E3E5ED" />
                    </g>
                </g>
            </g>
        </svg>
    );
}

PhotoCamera.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
PhotoCamera.defaultProps = {
    className: undefined,
    style: undefined,
};
