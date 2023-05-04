import React from 'react'
import './Form.css'

export default function Form(props) {
    const { width, handleSubmit, children } = props
    return (
        <form className={`form `} onSubmit={handleSubmit} style={{ width: width }}>
            {children}
        </form>
    )
}
