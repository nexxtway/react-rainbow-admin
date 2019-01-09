import React from 'react';
import PropTypes from 'prop-types';

export default function TimelineIcon(props) {
    const {
        className,
        style,
    } = props;

    return (
        <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
            <g fill="none" fillRule="evenodd">
                <rect width="23.821" height="10.982" x=".066" y="17.483" fill="#E3E5ED" rx="3" />
                <path fill="#576574" fillOpacity=".201" d="M9.682 22.4H3.399a1.093 1.093 0 1 1 0-2.185h6.283a1.093 1.093 0 1 1 0 2.185zM15.146 25.679H3.399a1.093 1.093 0 1 1 0-2.186h11.747a1.093 1.093 0 1 1 0 2.186z" />
                <rect width="18.357" height="10.982" x="44.929" y="34.966" fill="#F8752D" rx="3" />
                <path fill="#576574" fillOpacity=".195" d="M54.545 39.884h-6.283a1.093 1.093 0 1 1 0-2.186h6.283a1.093 1.093 0 1 1 0 2.186zM60.008 43.162H48.262a1.093 1.093 0 1 1 0-2.186h11.746a1.093 1.093 0 1 1 0 2.186z" />
                <rect width="18.357" height="10.982" x="44.929" y="52.953" fill="#F8752D" rx="3" />
                <path fill="#576574" fillOpacity=".195" d="M54.545 57.87h-6.283a1.093 1.093 0 1 1 0-2.185h6.283a1.093 1.093 0 1 1 0 2.186zM60.008 61.149H48.262a1.093 1.093 0 1 1 0-2.186h11.746a1.093 1.093 0 1 1 0 2.186z" />
                <rect width="18.357" height="10.982" x="44.929" fill="#FC0" rx="3" />
                <path fill="#576574" d="M35.326 19.872H34V9.055L35.326 9zM34 26h1.326v13.872H34z" />
                <path fill="#576574" fillOpacity=".205" d="M54.545 4.917h-6.283a1.093 1.093 0 1 1 0-2.185h6.283a1.093 1.093 0 1 1 0 2.185zM60.008 8.195H48.262a1.093 1.093 0 1 1 0-2.185h11.746a1.093 1.093 0 1 1 0 2.185z" />
                <path fill="#576574" d="M34 44h1.326v12.872H34z" />
                <path fill="#F8752D" d="M34.66 37.332a3.755 3.755 0 1 0 0 7.51 3.755 3.755 0 0 0 0-7.51zM34.663 55.471a3.755 3.755 0 1 0 0 7.51 3.755 3.755 0 0 0 0-7.51z" />
                <path fill="#E3E5ED" d="M34.753 19a3.755 3.755 0 1 0 .004 7.51 3.755 3.755 0 0 0-.004-7.51z" />
                <path fill="#FC0" d="M34.759 2A3.756 3.756 0 0 0 31 5.753a3.756 3.756 0 0 0 3.759 3.754 3.8 3.8 0 0 0 3.802-3.754A3.8 3.8 0 0 0 34.76 2z" />
            </g>
        </svg>
    );
}

TimelineIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

TimelineIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
