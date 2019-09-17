import React from 'react';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-rainbow-components/components/ButtonGroup';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import AvatarMenu from 'react-rainbow-components/components/AvatarMenu';
import Avatar from 'react-rainbow-components/components/Avatar';
import Input from 'react-rainbow-components/components/Input';
import MenuItem from 'react-rainbow-components/components/MenuItem';
import MenuDivider from 'react-rainbow-components/components/MenuDivider';
import ButtonMenu from 'react-rainbow-components/components/ButtonMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRocket,
    faAngleDown,
    faBullhorn,
    faSearch,
    faPencilAlt,
    faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import {
    ShoppingCartIcon,
    MessageIcon,
    BarsIcon,
    GithubIcon,
} from '../icons';
import Notification from './notification';
import IconNotification from './iconNotification';
import './styles.css';

export default function SectionHeading({ onToogleSidebar }) {
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
                <ButtonGroup className="rainbow-m-right_medium">
                    <ButtonIcon icon={<FontAwesomeIcon icon={faRocket} />} variant="border-filled" disabled />
                    <ButtonIcon icon={<FontAwesomeIcon icon={faBullhorn} />} variant="border-filled" />
                    <ButtonMenu menuAlignment="right" menuSize="xx-small" icon={<FontAwesomeIcon icon={faAngleDown} />}>
                        <MenuItem label="Admin-1" />
                        <MenuItem label="Admin-2" />
                        <MenuItem label="Admin-3" />
                    </ButtonMenu>
                </ButtonGroup>
                <a
                    href="https://github.com/nexxtway/react-rainbow-admin"
                    target="_blank"
                    rel="noopener noreferrer">
                    <GithubIcon className="react-rainbow-admin_header-github-icon" />
                </a>
                <ButtonMenu
                    className="rainbow-m-horizontal_medium react-rainbow-admin_header-button-notification"
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
                                title="Your order is placed" />
                        )} />
                    <MenuItem
                        icon={
                            <IconNotification icon={<MessageIcon className="react-rainbow-admin_header--notification-icon" />} />
                        }
                        label={(
                            <Notification
                                title="New messages" />
                        )} />
                </ButtonMenu>
                <AvatarMenu
                    src="/assets/images/user2.jpg"
                    assistiveText="Tahimi Leon"
                    menuAlignment="right"
                    menuSize="small"
                    title="Tahimi Leon">
                    <li className="rainbow-p-horizontal_small rainbow-align_center rainbow-flex">
                        <Avatar
                            src="/assets/images/user2.jpg"
                            assistiveText="Tahimi Leon"
                            title="Tahimi Leon"
                            size="medium" />
                        <div className="rainbow-m-left_x-small">
                            <p className="rainbow-font-size-text_medium rainbow-color_dark-1">Tahimi</p>
                            <p className="rainbow-font-size-text_small rainbow-color_gray-3">janedoe@gmail.com</p>
                        </div>
                    </li>
                    <MenuDivider variant="space" />
                    <MenuItem
                        label="Edit Profile"
                        icon={<FontAwesomeIcon icon={faPencilAlt} />}
                        iconPosition="left" />
                    <MenuItem
                        label="Logout"
                        icon={<FontAwesomeIcon icon={faPowerOff} />}
                        iconPosition="left" />
                </AvatarMenu>
            </section>
            <ButtonIcon
                onClick={onToogleSidebar}
                className="react-rainbow-admin_header-hamburger-button"
                size="large"
                icon={<BarsIcon />} />
        </header>
    );
}

SectionHeading.propTypes = {
    onToogleSidebar: PropTypes.func,
};

SectionHeading.defaultProps = {
    onToogleSidebar: () => {},
};
