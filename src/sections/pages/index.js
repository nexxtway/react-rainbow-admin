import React from 'react';
import { Card } from 'react-rainbow-components';
import {
    CalendarIcon,
    FollowerIcon,
    OrderIcon,
    UserIcon,
    TimelineIcon,
    GalleryIcon,
    PricingIcon,
} from '../../components/icons';
import './styles.css';

const pages = [
    { name: 'Order', icon: <OrderIcon /> },
    { name: 'User', icon: <UserIcon /> },
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
            <h1 className="react-rainbow-admin-pages_title">Pages</h1>
            <p className="react-rainbow-admin-pages_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="react-rainbow-admin-pages_body">
                <Cards />
            </div>
        </div>
    );
}
