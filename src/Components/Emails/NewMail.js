import React, { useRef } from 'react';
import './NewMail.css';
import CloseIcon from '@material-ui/icons/Close';
import {useDispatch} from 'react-redux';
import { closeNewMail } from '../../features/mailSlice';
import { db } from '../../firebase';
import firebase from 'firebase';

function NewMail() {
    const dispatch = useDispatch();
    const to = useRef();
    const subject = useRef();
    const message = useRef();

    function closeMail() {
        dispatch(closeNewMail());
    }

    function handleSubmit(e) {
        e.preventDefault();

        db.collection('emails').add({
            to: to.current.value,
            subject: subject.current.value,
            message: message.current.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });

        dispatch(closeNewMail());
    }

    return (
        <div className='newMail'>
            <div className="newMail__header">
                <h4>New message</h4>
                <CloseIcon className="closeIcon" onClick={closeMail} />
            </div>
            <div className="newMail__form">
                <form>
                    <input 
                        type="mail" 
                        className="newMail__to"
                        placeholder="to"
                        ref={to}
                        required
                    />
                    <input 
                        type="text" 
                        className="newMail__subject"
                        placeholder="subject"
                        ref={subject}
                        required
                    />
                    <textarea 
                        className="newMail__message"
                        placeholder="message"
                        ref={message}
                        required
                    />
                    <div className="newMail__submit">
                        <button type="submit" className="newMail__button" onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewMail
