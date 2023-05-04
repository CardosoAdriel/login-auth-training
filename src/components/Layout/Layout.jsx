import React from 'react'
import './Layout.css'
import useAuth from '../../hooks/useAuth'

export default function Layout({ children }) {
    const { signed } = useAuth()

    const styleLoged = signed
        ? { backgroundColor: `var(--very-light-grayish-cyan)` }
        : {}
    return (
        <main className='layout' style={styleLoged}>
            {children}
        </main>
    )
}
