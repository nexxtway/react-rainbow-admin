import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Prismic, QueryAt } from 'react-prismic-cms';
import Input from 'react-rainbow-components/components/Input';
import ComponentCards from './componentCards';
import PageHeader from '../../components/PageHeader';
import { SearchIcon } from '../../components/icons';
import './styles.css';

const categories = [
    'Layout Components',
    'Forms',
    'Miscellaneous',
    'Data View',
];

function Sections({ searchTerm }) {
    return categories.map((category, index) => {
        const key = `section-${index}`;
        return (
            <div key={key}>
                <QueryAt
                    orderings="[my.component-info.component-name]"
                    component={ComponentCards}
                    pageSize={100}
                    searchTerm={searchTerm}
                    path="document.tags"
                    category={category}
                    value={[category]} />
            </div>
        );
    });
}

ComponentCards.propTypes = {
    searchTerm: PropTypes.string.isRequired,
};

export default class Components extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        const { searchTerm } = this.state;
        return (
            <Prismic repo="rainbow-components">
                <section className="react-rainbow-admin-components_view-port rainbow-background-color_gray-1">
                    <PageHeader
                        className="react-rainbow-admin-components_page-header"
                        title="Components"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    <h1 className="react-rainbow-admin-components_title">
                            More than 40 components
                    </h1>
                    <Input
                        className="react-rainbow-admin-components_search"
                        label="Find Components"
                        type="search"
                        hideLabel
                        placeholder="Find Components"
                        aria-label="Find Components"
                        value={searchTerm}
                        onChange={this.handleOnChange}
                        icon={<SearchIcon />} />
                    <section className="react-rainbow-admin-components_sections-container">
                        <Sections searchTerm={searchTerm} />
                    </section>
                </section>
            </Prismic>
        );
    }
}
