import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-rainbow-components';
import './styles.css';

export default function TablePagination(props) {
    const {
        pages,
        activePage,
        onChange,
    } = props;

    if (pages > 1) {
        return (
            <div className="react-rainbow-admin-table-pagination">
                <Pagination
                    pages={pages}
                    activePage={activePage}
                    onChange={onChange} />
            </div>
        );
    }
    return null;
}

TablePagination.propTypes = {
    pages: PropTypes.number,
    activePage: PropTypes.number,
    onChange: PropTypes.func,
};

TablePagination.defaultProps = {
    pages: undefined,
    activePage: undefined,
    onChange: () => {},
};
