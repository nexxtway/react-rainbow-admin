import React from 'react';
import PropTypes from 'prop-types';

export default function Phone(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} height="18px" width="18px" version="1.1" viewBox="0 0 18 18">
            <g id="new-pages" fill="none" stroke="none" strokeWidth="1">
                <g id="admin-forms" transform="translate(-176.000000, -755.000000)">
                    <g id="Group-13" transform="translate(162.000000, 722.000000)">
                        <g id="phone" transform="translate(14.000000, 33.000000)">
                            <path id="Shape" d="M17.5362187,13.2814687 L15.2991211,11.0438789 C14.7022383,10.4469961 13.6593984,10.4459766 13.0615312,11.0438789 L12.6884883,11.4169219 L17.1633164,15.8915039 L17.5362187,15.5186016 C18.1556367,14.8991484 18.1535625,13.8977578 17.5362187,13.2814687 Z" fill="#009ACF" />
                            <path id="Shape" d="M11.9220469,12.1419141 C11.4513047,12.5065898 10.77975,12.4920352 10.3496133,12.0609492 L5.92635938,7.63463672 C5.49523828,7.20351562 5.48071875,6.53146875 5.84539453,6.06188672 L1.38086719,1.59760547 C-0.539753906,3.83635547 -0.464660156,7.20970312 1.65508594,9.32944922 L8.65480078,16.3322227 C10.6889414,18.366293 14.020875,18.636082 16.3867852,16.6063359 L11.9220469,12.1419141 Z" fill="#01B6F5" />
                            <path id="Shape" d="M6.94346484,2.68562109 L4.70636719,0.44803125 C4.10948438,-0.148851563 3.06664453,-0.149871094 2.46877734,0.44803125 L2.09573438,0.821074219 L6.5705625,5.29565625 L6.94346484,4.92271875 C7.56284766,4.30333594 7.56080859,3.30194531 6.94346484,2.68562109 Z" fill="#009ACF" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

Phone.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Phone.defaultProps = {
    className: undefined,
    style: undefined,
};
