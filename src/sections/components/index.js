import React, { Component } from 'react';
import { Prismic, QueryAt } from 'react-prismic-cms';
import Input from 'react-rainbow-components/components/Input';
import ComponentCards from './componentCards';
import PageHeader from '../../components/PageHeader';
import { SearchIcon } from '../../components/icons';
import './styles.css';

const sectionsName = [
    { name: 'Layout Components' },
    { name: 'Forms' },
    { name: 'Miscellaneous' },
    { name: 'Data View' },
];

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

    renderCards() {
        const { searchTerm } = this.state;
        return sectionsName.map((section, index) => {
            const { name } = section;
            const key = `section-${index}`;
            return (
                <div key={key}>
                    <QueryAt
                        orderings="[my.component-info.component-name]"
                        component={ComponentCards}
                        pageSize={100}
                        searchTerm={searchTerm}
                        path="document.tags"
                        tag={name}
                        value={[name]} />
                </div>
            );
        });
    }

    render() {
        const { searchTerm } = this.state;
        return (
            <Prismic repo="rainbow-components">
                <section className="react-rainbow-admin-components_view-port rainbow-background-color_gray-1">
                    <PageHeader
                        title="Components"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                    <div className="react-rainbow-admin-components_finder-section">
                        <h1 className="react-rainbow-admin-components_finder-section_title">
                            More than 40 components
                        </h1>
                        <Input
                            className="react-rainbow-admin-components_finder-section_search"
                            label="Find Components"
                            type="search"
                            hideLabel
                            placeholder="Find Components"
                            aria-label="Find Components"
                            value={searchTerm}
                            onChange={this.handleOnChange}
                            icon={<SearchIcon />} />
                    </div>
                    <section className="react-rainbow-admin-components_section-container">
                        {this.renderCards()}
                    </section>
                </section>
            </Prismic>
        );
    }
}
