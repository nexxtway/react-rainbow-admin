import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Checked } from '../../components/icons';

export default function SentText({ isUser, isChecked, date }) {
    const getCheckedClassName = () => classnames({
        'react-rainbow-admin-messages_message--checked': isChecked,
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

SentText.propTypes = {
    isUser: PropTypes.bool,
    isChecked: PropTypes.bool,
    date: PropTypes.string,
};

SentText.defaultProps = {
    isUser: false,
    isChecked: false,
    date: undefined,
};
