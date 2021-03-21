import { Checkbox, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './EmailList.css';
import Section from './Section';
import Row from './Row';
import { db } from '../../firebase';

function EmailList() {
    const [emails, setEmails] = useState([]);
    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                email: doc.data()
            })))
        })
    }, []);
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settings__leftSide">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RefreshIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settings__rightSide">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section title="primary" Icon={InboxIcon} color="red" selected />
                <Section title="social" Icon={PeopleIcon} color="blue" />
                <Section title="promotion" Icon={LocalOfferIcon} color="green" />

            </div>
            <div className="emailList__emailRows">
                {emails.map(({email, id}) => (
                    <Row
                        key={id}
                        id={id}
                        to={email.to}
                        subject={email.subject}
                        description={email.message}
                        time={new Date(email.timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
            </div>
        </div>
    )
}

export default EmailList
