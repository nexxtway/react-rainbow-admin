import React from 'react';
import PropTypes from 'prop-types';

const iconContainerStyles = {
    width: 24,
    height: 24,
    borderRadius: '100%',
    backgroundColor: '#01b6f5',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
};

export default function MessagesBlueWhite(props) {
    const {
        className,
        style,
    } = props;
    return (
        <div style={iconContainerStyles}>
            <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11">
                <g fill="none" fillRule="nonzero">
                    <path fill="#0487B4" d="M3.204.003A3.286 3.286 0 0 0 .002 3.172c-.027.86.277 1.648.794 2.247.233.27.3.645.18.98l-.216.604a.21.21 0 0 0 .324.24l.765-.572c.227-.17.516-.234.794-.179A3.284 3.284 0 0 0 6.55 3.398 3.276 3.276 0 0 0 3.204.003z" />
                    <path fill="#FFF" d="M10.66 8.432a1.227 1.227 0 0 0-.22 1.196l.104.29C11 11 11 11 10.13 10.353l-.644-.481a1.214 1.214 0 0 0-.948-.221c-.215.04-.455.076-.63.076a3.571 3.571 0 1 1 2.752-1.295z" />
                </g>
            </svg>
        </div>
    );
}

MessagesBlueWhite.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
MessagesBlueWhite.defaultProps = {
    className: undefined,
    style: undefined,
};
