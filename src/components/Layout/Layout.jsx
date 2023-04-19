import './Layout.css';

export default function Layout({ children }) {

    return (
        <main className="layout">
            {children}
        </main>
    )
}