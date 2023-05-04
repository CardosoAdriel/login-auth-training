import React from 'react'
import './Input.css'

export default function Input(props) {
    const { type, placeholder, width, value, handleChange } = props
    return (
        <input className='input'
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            style={{ width: width }}
            value={value || ''}
            autoComplete='off'
        />
    )
}
