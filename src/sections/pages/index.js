import React from 'react';
import { Card } from 'react-rainbow-components';
import {
    CalendarIcon,
    FollowerIcon,
    OrderIcon,
    UsersIcon,
    TimelineIcon,
    GalleryIcon,
    PricingIcon,
} from '../../components/icons';
import HeaderPages from '../../components/HeaderPages';
import './styles.css';

const pages = [
    { name: 'Order', icon: <OrderIcon /> },
    { name: 'User', icon: <UsersIcon /> },
    { name: 'Followers', icon: <FollowerIcon /> },
    { name: 'timeline', icon: <TimelineIcon /> },
    { name: 'Gallery', icon: <GalleryIcon /> },
    { name: 'Calendar', icon: <CalendarIcon /> },
    { name: 'Pricing', icon: <PricingIcon /> },
];

function Cards() {
    return pages.map(page => (
        <a className="react-rainbow-admin-pages_anchor" href="/#">
            <Card className="react-rainbow-admin-pages_card" footer={page.name}>
                <span className="react-rainbow-admin-pages_card-image">
                    {page.icon}
                </span>
            </Card>
        </a>
    ));
}
export default function Pages() {
    return (
        <div className="react-rainbow-admin-pages_container">
            <HeaderPages
                title="Pages"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <div className="react-rainbow-admin-pages_body">
                <Cards />
            </div>
        </div>
    );
}
