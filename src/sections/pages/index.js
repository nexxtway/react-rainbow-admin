import React from 'react';
import { Card } from 'react-rainbow-components';
import './styles.css';

const pages = [
    { name: 'Orders' },
    { name: 'Users' },
    { name: 'Followers' },
    { name: 'Timeline' },
    { name: 'Gallery' },
    { name: 'Calendar' },
    { name: 'Pricing' },
];
export default function Pages() {
    function Cards() {
        return pages.map((page) => {
            const src = `assets/images/pages/${page.name.toLowerCase()}.svg`;

            return (
                <Card className="react-rainbow-admin-pages_card" footer={page.name}>
                    <img
                        className="react-rainbow-admin-pages_card-image"
                        src={src}
                        alt={`Page ${page.name}`} />
                </Card>
            );
        });
    }

    return (
        <div className="react-rainbow-admin-pages_container">
            <h1 className="react-rainbow-admin-pages_title">Pages</h1>
            <p className="react-rainbow-admin-pages_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="react-rainbow-admin-pages_body">
                <Cards />
            </div>
        </div>
    );
}
