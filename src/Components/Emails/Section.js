import React from 'react'
import './Section.css'

function Section({title, Icon, color, selected}) {
    const style = {
        borderBottom: `3px solid ${color}`,
        color: selected && color,
    }
    return (
        <div className={`section ${selected && "section--selected"}`} style={style}>
            <Icon />
            <h4>{title}</h4>
        </div>
    )
}

export default Section
