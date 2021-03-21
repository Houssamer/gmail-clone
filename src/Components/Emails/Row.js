import { Checkbox, IconButton } from '@material-ui/core';
import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import './Row.css';
import { useHistory } from 'react-router';
import { setSelectedMail } from '../../features/mailSlice';
import { useDispatch } from 'react-redux';

function Row({id, to, subject, description, time}) {
    const history = useHistory();
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(setSelectedMail({
            id,
            to,
            subject,
            description,
            time
        }));
        history.push('/mail');
    }

    return (
        <div className='row' onClick={() => handleClick()}>
            <div className="row__leftSide">
                <Checkbox />
                <IconButton>
                    <StarBorderIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>

                <h4>{to}</h4>
            </div>
            <div className="row__middle">
                <h4>{subject} </h4>
                <h5> -{description}</h5>
            </div>
            <div className="row__rightSide">
                <h5>{time}</h5>
            </div>
        </div>
    )
}

export default Row
