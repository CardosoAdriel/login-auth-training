
export default function Form(props) {
    const {
        width,
        handleSubmit,
        children
    } = props
    return (
        <form
            onSubmit={handleSubmit}
            style={{ width: width }}
        >
            {children}
        </form>
    )
}