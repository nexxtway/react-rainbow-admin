import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorIcon(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
            <g fill="none" fillRule="nonzero">
                <circle cx="17.965" cy="17.965" r="17.965" fill="#FE4849" />
                <path fill="#EA4243" d="M35.93 17.965c0 9.88-8.084 17.965-17.965 17.965-5.726 0-10.78-2.583-14.035-6.737 3.031 2.47 6.961 3.93 11.228 3.93 9.88 0 17.965-8.084 17.965-17.965 0-4.267-1.46-8.196-3.93-11.228 4.154 3.256 6.737 8.309 6.737 14.035z" />
                <path fill="#FFF" d="M16.784 19.413l-.456-6.834c-.086-1.332-.128-2.288-.128-2.868 0-.789.207-1.405.62-1.847.414-.443.959-.664 1.634-.664.818 0 1.365.283 1.64.849.276.566.414 1.382.414 2.446 0 .628-.033 1.266-.099 1.912l-.614 7.033c-.066.838-.209 1.48-.428 1.927-.22.447-.581.67-1.085.67-.514 0-.87-.215-1.07-.649-.2-.432-.342-1.09-.428-1.975zm1.584 9.387c-.58 0-1.087-.187-1.52-.563-.432-.375-.648-.9-.648-1.576 0-.59.207-1.092.62-1.506.414-.413.92-.62 1.52-.62s1.11.206 1.533.62c.424.414.635.916.635 1.506 0 .666-.214 1.189-.642 1.57-.428.379-.927.569-1.498.569z" />
            </g>
        </svg>
    );
}

ErrorIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
ErrorIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
