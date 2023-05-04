import React from 'react'
import './Content.css'

export default function Content(props) {
    const { width, display, direction, gap, children } = props

    const styles = {
        width: width,
        display: display,
        flexDirection: direction,
        gap: gap
    }
    return (
        <section className='content' style={styles}>
            {children}
        </section>
    )
}
