import React from 'react'
import './Container.css'

export default function Container(props) {
    const {
        direction,
        align,
        justify,
        gap,
        wrap,
        width,
        children
    } = props;

    return (
        <div className={`container ${direction} ${align} ${justify} ${wrap}`}
            style={
                { gap: `${gap || 0}px`, width: width, }}
        >
            {children}
        </div>
    )
}
