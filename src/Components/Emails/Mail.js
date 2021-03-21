import React from 'react';
import './Mail.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import DeleteIcon from '@material-ui/icons/Delete';
import MailIcon from '@material-ui/icons/Mail';
import InfoIcon from '@material-ui/icons/Info';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { selectMailSelected } from '../../features/mailSlice';

function Mail() {
    const history = useHistory();
    const selectedMail = useSelector(selectMailSelected);

    return (
        <div className='mail'>
            <div className="mail__header">
                <div className="mail__header__leftSide">
                    <IconButton>
                        <ArrowBackIcon onClick={() => history.push('/')} />
                    </IconButton>
                    <IconButton>
                        <MoveToInboxIcon />
                    </IconButton>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <MailIcon />
                    </IconButton>
                    <IconButton>
                        <InfoIcon />
                     </IconButton>
                    <IconButton>
                        <WatchLaterIcon />
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon />
                    </IconButton>
                    <IconButton>
                        <LabelImportantIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="mail__header__rightSide">
                    <IconButton>
                        <UnfoldMoreIcon />
                    </IconButton>
                    <IconButton>
                        <PrintIcon />
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon />
                    </IconButton>
                </div>
            </div>
            <div className="mail__content">
                <div className="mail__content__header">
                    <div className="mail__content__header__leftSide">
                        <h2>{selectedMail?.subject}</h2>
                        <LabelImportantIcon className="mail__content__header__important" />
                        <h5>{selectedMail?.to}</h5>
                    </div>
                    <div className="mail__content__header_rightSide">
                        <h6>{selectedMail?.time}</h6>
                    </div>
                </div>
                <div className="mail__content__message">
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
