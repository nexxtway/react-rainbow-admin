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
import Texts from './texts';
import './styles.css';

const contacts = [
    {
        name: 'Saray',
        lastDateSeen: '8:30 am',
        lastMessage: 'A rainbow i a meteorological phenomenon that is A rainbow i a meteorological phenomenon that is something',
        avatarSrc: '/assets/images/user2.jpg',
        isActive: true,
    },
    {
        name: 'Leo',
        lastDateSeen: '5:30 pm',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
        avatarSrc: '/assets/images/user1.jpg',
    },
    {
        name: 'Rey',
        lastDateSeen: '10:15 pm',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
        avatarSrc: '/assets/images/user3.jpg',
    },
    {
        name: 'Jose',
        lastDateSeen: '8:45 am',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
    },
    {
        name: 'Juan',
        lastDateSeen: 'yesterday',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
    },
    {
        name: 'Tahimi',
        lastDateSeen: 'yesterday',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
    },
    {
        name: 'Pepe',
        lastDateSeen: 'yesterday',
        lastMessage: 'A rainbow i a meteorological phenomenon that is something',
    },
];

const texts = [
    {
        avatarSrc: '/assets/images/user2.jpg',
        message: 'I have a problem with a topup',
        dateSend: '1:06 PM',
    },
    {
        avatarSrc: '/assets/images/user4.jpg',
        message: 'Verify the account',
        isUser: true,
        checked: true,
        dateSend: '1:07 PM',
    },
    {
        avatarSrc: '/assets/images/user2.jpg',
        message: 'Already all is ok, thanks',
        dateSend: '1:19 PM',
    },
    {
        avatarSrc: '/assets/images/user4.jpg',
        message: 'ok',
        isUser: true,
        dateSend: '1:22 PM',
    },
];

export default class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    getContacts() {
        const { searchTerm } = this.state;
        return filter(searchTerm, contacts);
    }

    handleOnChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    render() {
        const { searchTerm } = this.state;
        return (
            <div className="react-rainbow-admin-messages">
                <div className="react-rainbow-admin-messages_contacts-container">
                    <Input
                        className="react-rainbow-admin-messages_contacts-search"
                        label="Find contact"
                        type="search"
                        hideLabel
                        placeholder="Find contact"
                        aria-label="Find contact"
                        value={searchTerm}
                        onChange={this.handleOnChange}
                        icon={<SearchIcon />} />
                    <div className="react-rainbow-admin-messages_contacts">
                        <Contacts contacts={this.getContacts()} />
                    </div>
                </div>
                <div className="react-rainbow-admin-messages_body">
                    <div className="react-rainbow-admin-messages_body-messages">
                        <Texts texts={texts} />
                    </div>
                    <div className="react-rainbow-admin-messages_input-container">
                        <div className="react-rainbow-admin-messages_input-options">
                            <Emoji />
                            <Attach />
                            <Picture />
                            <PhotoCamera />
                            <Microphone />
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
