import React from 'react';
import { Link } from 'react-router-dom';
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
    { name: 'Orders', icon: <OrderIcon />, href: '/pages/orders' },
    { name: 'Users', icon: <UsersIcon />, href: '/pages/users' },
    { name: 'Followers', icon: <FollowerIcon />, href: '/pages/followers' },
    { name: 'Timeline', icon: <TimelineIcon />, href: '/comingSoon' },
    { name: 'Gallery', icon: <GalleryIcon />, href: '/comingSoon' },
    { name: 'Calendar', icon: <CalendarIcon />, href: '/comingSoon' },
    { name: 'Pricing', icon: <PricingIcon />, href: '/comingSoon' },
];

function Cards() {
    return pages.map((page, index) => {
        const { name, icon, href } = page;
        const key = `card-${index}`;
        return (
            <Link key={key} className="react-rainbow-admin-pages_anchor" to={href}>
                <Card className="react-rainbow-admin-pages_card" footer={name}>
                    <span className="react-rainbow-admin-pages_card-image">
                        {icon}
                    </span>
                </Card>
            </Link>
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
