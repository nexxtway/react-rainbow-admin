import React from 'react';
import ButtonGroup from 'react-rainbow-components/components/ButtonGroup';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import Avatar from 'react-rainbow-components/components/Avatar';
import Input from 'react-rainbow-components/components/Input';
import MenuItem from 'react-rainbow-components/components/MenuItem';
import ButtonMenu from 'react-rainbow-components/components/ButtonMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRocket,
    faAngleDown,
    faBullhorn,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { ShoppingCartIcon, MessageIcon } from '../icons';
import Notification from './notification';
import IconNotification from './iconNotification';
import './styles.css';

export default function SectionHeading() {
    return (
        <header className="react-rainbow-admin_header rainbow-position_fixed rainbow-flex rainbow-align_center rainbow-p-horizontal_large rainbow-background-color_white">
            <img src="/assets/images/rainbow-logo.svg" alt="rainbow logo" className="react-rainbow-admin_header-logo" />
            <Input
                className="rainbow-m-left_xx-large react-rainbow-admin_header-search"
                placeholder="search"
                label="header search"
                hideLabel
                icon={<FontAwesomeIcon icon={faSearch} className="rainbow-color_gray-2" />} />
            <section className="rainbow-flex rainbow-align_center react-rainbow-admin_header-actions">
                <ButtonGroup>
                    <ButtonIcon icon={<FontAwesomeIcon icon={faRocket} />} variant="border-filled" disabled />
                    <ButtonIcon icon={<FontAwesomeIcon icon={faBullhorn} />} variant="border-filled" />
                    <ButtonMenu menuAlignment="right" menuSize="xx-small" icon={<FontAwesomeIcon icon={faAngleDown} />}>
                        <MenuItem label="Admin-1" />
                        <MenuItem label="Admin-2" />
                        <MenuItem label="Admin-3" />
                    </ButtonMenu>
                </ButtonGroup>
                <ButtonMenu
                    className="rainbow-m-horizontal_medium"
                    menuAlignment="right"
                    buttonVariant="base"
                    buttonSize="large"
                    icon={<FontAwesomeIcon icon={faBell} />}>
                    <MenuItem label="Notifications (2)" variant="header" />
                    <MenuItem
                        icon={
                            <IconNotification icon={<ShoppingCartIcon className="react-rainbow-admin_header--notification-icon" />} />
                        }
                        label={(
                            <Notification
                                title="Your order is placed"
                                content="Dummy text of the printing and typesetting industry" />
                        )} />
                    <MenuItem
                        icon={
                            <IconNotification icon={<MessageIcon className="react-rainbow-admin_header--notification-icon" />} />
                        }
                        label={(
                            <Notification
                                title="New messages"
                                content="You have 5 unread messages" />
                        )} />
                </ButtonMenu>
                <Avatar
                    src="/assets/images/user3.jpg"
                    assistiveText="Carlos Miguel"
                    title="Carlos Miguel" />
            </section>
        </header>
    );
}
