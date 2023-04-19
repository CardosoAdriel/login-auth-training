import './Button.css'

export default function Button(props) {
    const {
        style,
        width,
        handleClick,
        children
    } = props

    return <button
        className={`button ${style}`}
        style={{ width: width }}
        onClick={handleClick}
    > {children} </button>
}