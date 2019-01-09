import React from 'react';
import PropTypes from 'prop-types';

export default function Message(props) {
    const {
        className,
        style,
    } = props;
    return (
        <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20">
            <g fill="none" fillRule="nonzero">
                <path fill="#F8752D" d="M5.874.006C2.7.073.104 2.62.004 5.767A5.905 5.905 0 0 0 1.46 9.852c.427.49.549 1.173.329 1.784l-.395 1.097c-.129.357.288.661.594.435l1.401-1.04c.417-.309.947-.424 1.457-.324a6.065 6.065 0 0 0 1.662.091c3.014-.247 5.39-2.719 5.499-5.716C12.13 2.746 9.324-.068 5.874.006z" />
                <path fill="#FC0" d="M19.543 15.331a2.216 2.216 0 0 0-.402 2.174l.19.528c.836 1.967.836 1.967-.76.79l-1.18-.874a2.24 2.24 0 0 0-1.738-.402c-.394.073-.834.138-1.155.138-3.616 0-6.547-2.907-6.547-6.494 0-3.583 2.934-6.494 6.547-6.494 3.617 0 6.548 2.907 6.548 6.494a6.436 6.436 0 0 1-1.503 4.14z" />
            </g>
        </svg>
    );
}

Message.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Message.defaultProps = {
    className: undefined,
    style: undefined,
};
