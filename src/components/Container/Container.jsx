import './Container.css'

export default function Container(props) {
    const {
        direction,
        align,
        justify,
        wrap,
        gap,
        width,
        children
    } = props

    return (
        <section className={`
                container
                ${direction}
                ${align}
                ${justify}
                ${wrap}
            `}
            style={{ gap: gap, width: width }}
        >
            {children}
        </section>
    )
}