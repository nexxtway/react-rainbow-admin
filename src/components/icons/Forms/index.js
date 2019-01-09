import React from 'react';
import PropTypes from 'prop-types';

export default function Forms(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15">
            <g fill="none" fillRule="evenodd">
                <path fill="#FE4849" fillRule="nonzero" d="M1.765 10.824a1.647 1.647 0 1 0 0 3.294H17.5a1.647 1.647 0 0 0 0-3.294H1.765zm0-.118H17.5a1.765 1.765 0 0 1 0 3.53H1.765a1.765 1.765 0 0 1 0-3.53z" />
                <path fill="#01B6F5" fillRule="nonzero" d="M1.765 2.324H17.5a1.765 1.765 0 0 1 0 3.529H1.765a1.765 1.765 0 0 1 0-3.53z" />
                <path fill="#061C3F" d="M3.382 11.735h.173v1.629h-.173z" />
                <path fill="#FE4849" fillRule="nonzero" d="M1.765 13.206a.735.735 0 0 1 0-1.47h.22a.735.735 0 1 1 0 1.47h-.22z" />
                <path fill="#C3C6D2" fillRule="nonzero" d="M4.568 9.882c-.249 0-.45-.263-.45-.588 0-.325.201-.588.45-.588h9.687c.25 0 .45.263.45.588 0 .325-.2.588-.45.588H4.568zM4.568 1.647c-.249 0-.45-.263-.45-.588 0-.325.201-.588.45-.588h9.687c.25 0 .45.263.45.588 0 .325-.2.588-.45.588H4.568z" />
                <path fill="#FFF" fillRule="nonzero" d="M1.765 4.824a.735.735 0 1 1 0-1.471h.22a.735.735 0 1 1 0 1.47h-.22zM4.044 4.588c-.162 0-.294-.263-.294-.588 0-.325.132-.588.294-.588h9.706c.162 0 .294.263.294.588 0 .325-.132.588-.294.588H4.044z" />
            </g>
        </svg>
    );
}

Forms.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Forms.defaultProps = {
    className: undefined,
    style: undefined,
};
