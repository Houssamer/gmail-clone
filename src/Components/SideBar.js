import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import TelegramIcon from '@material-ui/icons/Telegram';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhoneIcon from '@material-ui/icons/Phone';
import React, { useEffect } from 'react';
import './SideBar.css';
import Options from './Options';
import {useDispatch, useSelector} from 'react-redux';
import { openNewMail, selectCountMail, setCountMail } from '../features/mailSlice';
import { db } from '../firebase';

function SideBar() {

    const dispatch = useDispatch();
    const countMail =useSelector(selectCountMail);

    useEffect(() => {
        db.collection('emails').get()
            .then(snapshot => dispatch(setCountMail((snapshot.size))));
    }, [dispatch])

    function open() {
        dispatch(openNewMail());
    }

    return (
        <div className='sideBar'>
            <div className="sideBar__ComposeButton">
                <Button startIcon={<AddIcon />} className='sideBar__button' onClick={open}>Compose</Button>
            </div>
            <div className="sideBar__options">
                <Options title="Inbox" Icon={InboxIcon} number={countMail} selected/>
                <Options title="Starred" Icon={StarIcon} number="0" />
                <Options title="Snoozed" Icon={WatchLaterIcon} number="0" />
                <Options title="Important" Icon={LabelImportantIcon} number="0" />
                <Options title="Sent" Icon={TelegramIcon} number="0" />
                <Options title="Drafts" Icon={InsertDriveFileIcon} number="0" />
                <Options title="More" Icon={ExpandMoreIcon} number="0" />
            </div>
            <div className="sideBar__footer">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <VideocamIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default SideBar
