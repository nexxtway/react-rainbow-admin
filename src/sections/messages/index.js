/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { Input } from 'react-rainbow-components/components';
import {
    SearchIcon,
    ArrowUp,
    Attach,
    Emoji,
    Microphone,
    PhotoCamera,
    Picture,
} from '../../components/icons';
import Contacts from './contacts';
import filter from './filter';
import ChatMessages from './chatMessages';
import SelectedContact from './selectedContact';
import './styles.css';

const contacts = [
    {
        name: 'Saray',
        lastSeenDate: '8:30 am',
        lastMessage: 'A rainbow i a meteorological phenomenon that is A rainbow i a meteorological phenomenon that is something',
        photoUrl: '/assets/images/user2.jpg',
        isOnline: true,
    },
    {
        name: 'Leo',
        lastSeenDate: '5:30 pm',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
        photoUrl: '/assets/images/user1.jpg',
        isOnline: true,
    },
    {
        name: 'Rey',
        lastSeenDate: '10:15 pm',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
        photoUrl: '/assets/images/user3.jpg',
    },
    {
        name: 'Jose',
        lastSeenDate: '8:45 am',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
        isOnline: true,
    },
    {
        name: 'Juan',
        lastSeenDate: 'yesterday',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
    },
    {
        name: 'Tahimi',
        lastSeenDate: 'yesterday',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
    },
    {
        name: 'Pepe',
        lastSeenDate: 'yesterday',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
    },
];

const messages = [
    {
        photoUrl: '/assets/images/user2.jpg',
        text: 'I have a problem with a topup',
        sentDate: '1:06 PM',
    },
    {
        photoUrl: '/assets/images/user4.jpg',
        text: 'Verify the account',
        isUser: true,
        isChecked: true,
        sentDate: '1:07 PM',
    },
    {
        photoUrl: '/assets/images/user2.jpg',
        text: 'Already all is ok, thanks',
        sentDate: '1:19 PM',
    },
    {
        photoUrl: '/assets/images/user4.jpg',
        text: 'ok',
        isUser: true,
        sentDate: '1:22 PM',
    },
];

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            selectedContactIndex: 0,
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    getContacts() {
        const { searchTerm } = this.state;
        return filter(searchTerm, contacts);
    }

    getSelectedContact() {
        const { selectedContactIndex } = this.state;
        return contacts[selectedContactIndex];
    }

    handleOnChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    handleOnClick(selectedIndex) {
        this.setState({ selectedContactIndex: selectedIndex });
    }

    render() {
        const { searchTerm, selectedContactIndex } = this.state;
        const {
            photoUrl,
            name,
            isOnline,
        } = this.getSelectedContact();
        return (
            <div className="react-rainbow-admin-messages">
                <div className="react-rainbow-admin-messages_contacts-container">
                    <Input
                        className="react-rainbow-admin-messages_contacts-search"
                        label="Find contact"
                        type="search"
                        hideLabel
                        placeholder="Find contact"
                        value={searchTerm}
                        onChange={this.handleOnChange}
                        icon={<SearchIcon />} />
                    <div className="react-rainbow-admin-messages_contacts">
                        <Contacts
                            contacts={this.getContacts()}
                            onClick={this.handleOnClick}
                            selectedContactIndex={selectedContactIndex} />
                    </div>
                </div>
                <div className="react-rainbow-admin-messages_body">
                    <SelectedContact
                        photoUrl={photoUrl}
                        name={name}
                        isOnline={isOnline} />
                    <span className="react-rainbow-admin-messages_body--divider" />
                    <div className="react-rainbow-admin-messages_body-messages">
                        <ChatMessages messages={messages} />
                    </div>
                    <div className="react-rainbow-admin-messages_input-container">
                        <div className="react-rainbow-admin-messages_input-options">
                            <div className="react-rainbow-admin-messages_input-options-icon-container">
                                <Emoji />
                            </div>
                            <div className="react-rainbow-admin-messages_input-options-icon-container">
                                <Attach />
                            </div>
                            <div className="react-rainbow-admin-messages_input-options-icon-container">
                                <Picture />
                            </div>
                            <div className="react-rainbow-admin-messages_input-options-icon-container">
                                <PhotoCamera />
                            </div>
                            <div className="react-rainbow-admin-messages_input-options-icon-container">
                                <Microphone />
                            </div>
                        </div>
                        <Input
                            className="react-rainbow-admin-messages_input"
                            label="Say something"
                            hideLabel
                            placeholder="Say something"
                            icon={<ArrowUp />}
                            iconPosition="right" />
                    </div>
                </div>
            </div>
        );
    }
}
