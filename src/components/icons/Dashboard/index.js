import React from 'react';
import PropTypes from 'prop-types';

export default function Dashboard(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <g fill="none" fillRule="nonzero">
                <path fill="#6860DB" d="M7.063 11H.625a.625.625 0 0 0-.625.625v3.75c0 .345.28.625.625.625h6.438c.345 0 .625-.28.625-.625v-3.75A.625.625 0 0 0 7.063 11z" />
                <path fill="#5C56B6" d="M7.063 0H.625A.625.625 0 0 0 0 .625v8.236c0 .345.28.625.625.625h6.438c.345 0 .625-.28.625-.625V.625A.625.625 0 0 0 7.063 0zM15.375 0H8.937a.625.625 0 0 0-.624.625v3.75c0 .345.28.625.624.625h6.438c.345 0 .625-.28.625-.625V.625A.625.625 0 0 0 15.375 0z" />
                <path fill="#6860DB" d="M15.375 6.514H8.937a.625.625 0 0 0-.624.625v8.236c0 .345.28.625.624.625h6.438c.345 0 .625-.28.625-.625V7.139a.625.625 0 0 0-.625-.625z" />
            </g>
        </svg>
    );
}

Dashboard.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Dashboard.defaultProps = {
    className: undefined,
    style: undefined,
};
