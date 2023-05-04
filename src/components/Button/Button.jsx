import React from 'react'
import './Button.css'

export default function Button(props) {
    const { style, width, children, handleClick } = props
    return (
        <button className={`button ${style}`}
            style={{ width: width }}
            onClick={handleClick}
        > {children} </button>
    )
}
