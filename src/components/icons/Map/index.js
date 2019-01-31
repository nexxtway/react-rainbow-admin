import React from 'react';
import PropTypes from 'prop-types';

export default function Map(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} height="17px" width="18px" version="1.1" viewBox="0 0 18 17">
            <g id="new-pages" fill="none" stroke="none" strokeWidth="1">
                <g id="admin-forms" transform="translate(-443.000000, -931.000000)">
                    <g id="Group-31" transform="translate(429.000000, 898.000000)">
                        <g id="map" transform="translate(14.000000, 33.000000)">
                            <polygon id="Path" fill="#43B05C" points="6.11320755 7.21460377 0.766188679 1.86758491 0 2.03773585 0 16.6415094 0.712867925 16.4832453 6.11320755 11.082566" />
                            <polygon id="Path" fill="#48A0DC" points="3.1829434 15.9340755 6.11320755 15.2830189 6.11320755 13.0038113" />
                            <polygon id="Path" fill="#43B05C" points="6.11320755 0.679245283 2.33796226 1.51811321 6.11320755 5.29335849" />
                            <polygon id="Path" fill="#43B05C" points="16.794 0.402113208 11.8867925 2.03773585 11.8867925 5.30898113" />
                            <polygon id="Path" fill="#01B6F5" points="11.8867925 7.23022642 11.8867925 16.3018868 18 13.9245283 18 1.11701887" />
                            <polygon id="Path" fill="#3D994F" points="9.00781132 8.18796226 11.8867925 5.30898113 11.8867925 2.03773585 6.11320755 0.679245283 6.11320755 5.29335849" />
                            <polygon id="Path" fill="#3D994F" points="6.11320755 7.21460377 6.11320755 11.082566 8.04735849 9.14875472" />
                            <polygon id="Path" fill="#4393BF" points="6.11320755 13.0038113 6.11320755 15.2830189 11.8867925 16.3018868 11.8867925 7.23022642" />
                            <polygon id="Path" fill="#EFCE4A" points="6.11320755 5.29335849 2.33796226 1.51811321 0.766188679 1.86758491 6.11320755 7.21460377" />
                            <polygon id="Path" fill="#EFCE4A" points="6.11320755 11.082566 0.712867925 16.4832453 3.1829434 15.9340755 6.11320755 13.0038113" />
                            <polygon id="Path" fill="#EFCE4A" points="11.8867925 7.23022642 18 1.11701887 18 0 16.794 0.402113208 11.8867925 5.30898113" />
                            <polygon id="Path" fill="#D6B445" points="9.00781132 8.18796226 6.11320755 5.29335849 6.11320755 7.21460377 8.04735849 9.14875472 6.11320755 11.082566 6.11320755 13.0038113 11.8867925 7.23022642 11.8867925 5.30898113" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

Map.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Map.defaultProps = {
    className: undefined,
    style: undefined,
};
