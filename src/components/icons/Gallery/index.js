import React from 'react';
import PropTypes from 'prop-types';

export default function GalleryIcon(props) {
    const {
        className,
        style,
    } = props;

    return (
        <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="53" height="64" viewBox="0 0 53 64">
            <defs>
                <linearGradient id="a" x1="50%" x2="50%" y1=".196%" y2="99.953%">
                    <stop offset=".6%" stopColor="#5FCEE2" />
                    <stop offset="100%" stopColor="#29ABE2" />
                </linearGradient>
                <linearGradient id="b" x1="50%" x2="50%" y1=".192%" y2="99.955%">
                    <stop offset=".5%" stopColor="#CAC12D" />
                    <stop offset="74.9%" stopColor="#C9A63A" />
                </linearGradient>
                <linearGradient id="c" x1="50%" x2="50%" y1=".197%" y2="99.951%">
                    <stop offset=".5%" stopColor="#FCF039" />
                    <stop offset="100%" stopColor="#FBB953" />
                </linearGradient>
                <linearGradient id="d" x1="50%" x2="50%" y1=".199%" y2="99.957%">
                    <stop offset=".5%" stopColor="#FCF039" />
                    <stop offset="100%" stopColor="#FBB953" />
                </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <g transform="translate(0 13.412)">
                    <path fill="url(#a)" d="M.083 22.79V1.964C.083.926.96.083 2.039.083h21.666c1.079 0 1.956.843 1.956 1.88v20.828c0 1.037-.877 1.88-1.956 1.88H2.039c-1.079 0-1.956-.843-1.956-1.88z" />
                    <path fill="url(#b)" d="M25.661 17.71v4.809c0 1.172-.95 2.122-2.122 2.122H9.776l11.408-11.408 4.477 4.477z" />
                    <path fill="url(#c)" d="M2.025 24.641A1.945 1.945 0 0 1 .083 22.7v-3.82l8.603-8.604L23.053 24.64H2.025z" />
                    <circle cx="15.955" cy="6.517" r="3.173" fill="url(#d)" />
                </g>
                <g transform="translate(0 39.246)">
                    <path fill="#F5F4F7" d="M.083 22.79V1.964C.083.926.96.083 2.039.083h21.666c1.079 0 1.956.843 1.956 1.88v20.828c0 1.037-.877 1.88-1.956 1.88H2.039c-1.079 0-1.956-.843-1.956-1.88z" />
                    <path fill="#1AD1A3" d="M25.661 17.71v4.809c0 1.172-.95 2.122-2.122 2.122H9.776l11.408-11.408 4.477 4.477z" />
                    <path fill="#1AD1A3" d="M2.025 24.641A1.945 1.945 0 0 1 .083 22.7v-3.82l8.603-8.604L23.053 24.64H2.025z" />
                    <circle cx="15.955" cy="6.517" r="3.173" fill="url(#d)" />
                </g>
                <g transform="translate(27.274)">
                    <path fill="#80E3FD" d="M.083 22.79V1.964C.083.926.96.083 2.039.083h21.666c1.079 0 1.956.843 1.956 1.88v20.828c0 1.037-.877 1.88-1.956 1.88H2.039c-1.079 0-1.956-.843-1.956-1.88z" />
                    <path fill="#A4D437" d="M25.661 17.71v4.809c0 1.172-.95 2.122-2.122 2.122H9.776l11.408-11.408 4.477 4.477z" />
                    <path fill="#BFE666" d="M2.025 24.641A1.945 1.945 0 0 1 .083 22.7v-3.82l8.603-8.604L23.053 24.64H2.025z" />
                    <circle cx="15.955" cy="6.517" r="3.173" fill="url(#d)" />
                </g>
                <g transform="translate(27.274 25.834)">
                    <path fill="#1D3E71" d="M.083 22.79V1.964C.083.926.96.083 2.039.083h21.666c1.079 0 1.956.843 1.956 1.88v20.828c0 1.037-.877 1.88-1.956 1.88H2.039c-1.079 0-1.956-.843-1.956-1.88z" />
                    <path fill="#061C3F" d="M25.661 17.71v4.809c0 1.172-.95 2.122-2.122 2.122H9.776l11.408-11.408 4.477 4.477z" />
                    <path fill="#061C3F" d="M2.025 24.641A1.945 1.945 0 0 1 .083 22.7v-3.82l8.603-8.604L23.053 24.64H2.025z" />
                    <circle cx="15.955" cy="6.517" r="3.173" fill="#E3E5ED" />
                </g>
            </g>
        </svg>
    );
}

GalleryIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

GalleryIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
