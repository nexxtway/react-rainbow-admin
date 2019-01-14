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
import PageHeader from '../../components/PageHeader';
import './styles.css';

const pages = [
    { name: 'Order', icon: <OrderIcon />, href: 'orders' },
    { name: 'Users', icon: <UsersIcon />, href: 'users' },
    { name: 'Followers', icon: <FollowerIcon />, href: 'followers' },
    { name: 'Timeline', icon: <TimelineIcon />, href: 'timeline' },
    { name: 'Gallery', icon: <GalleryIcon />, href: 'gallery' },
    { name: 'Calendar', icon: <CalendarIcon />, href: 'calendar' },
    { name: 'Pricing', icon: <PricingIcon />, href: 'pricing' },
];

function Cards() {
    return pages.map((page, index) => {
        const key = `card-${index}`;
        return (
            <a key={key} className="react-rainbow-admin-pages_anchor" href={page.href}>
                <Card className="react-rainbow-admin-pages_card" footer={page.name}>
                    <span className="react-rainbow-admin-pages_card-image">
                        {page.icon}
                    </span>
                </Card>
            </a>
        );
    });
}
export default function Pages() {
    return (
        <div className="react-rainbow-admin-pages_container">
            <PageHeader
                title="Pages"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            <div className="react-rainbow-admin-pages_body">
                <Cards />
            </div>
        </div>
    );
}
