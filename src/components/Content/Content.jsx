

export default function Content(props) {
    const {
        width,
        display,
        direction,
        gap,
        children
    } = props;
    return (
        <section
            style={{
                width: width,
                display: display,
                flexDirection: direction,
                gap: gap
            }}
        >
            {children}
        </section>
    )
}