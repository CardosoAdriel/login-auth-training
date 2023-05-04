import React from 'react'
import './Text.css'

export default function Text(props) {
    const { element, className, color, value, to } = props;
    const Element = element;
    return (
        <Element className={`${className} ${color}`} href={to}> {value} </Element>
    )
}
