import React from 'react';
import './Options.css'

function Options({title, Icon, number, selected}) {
    return (
        <div className={`options ${selected && "selected"}`}>
            <Icon />
            <h4>{title}</h4>
            <p>{number}</p>
        </div>
    )
}

export default Options
