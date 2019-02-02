import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Checked } from '../../components/icons';

export default function TextSent({ isUser, checked, date }) {
    const getCheckedClassName = () => classnames({
        'react-rainbow-admin-messages_message--checked': checked,
    });

    if (isUser) {
        return (
            <div className="react-rainbow-admin-messages_message--sent">
                <span>{date}</span>
                <Checked className={getCheckedClassName()} />
            </div>
        );
    }
    return <span className="react-rainbow-admin-messages_message--sent-date">{date}</span>;
}

TextSent.propTypes = {
    isUser: PropTypes.bool,
    checked: PropTypes.bool,
    date: PropTypes.string,
};

TextSent.defaultProps = {
    isUser: false,
    checked: false,
    date: undefined,
};
