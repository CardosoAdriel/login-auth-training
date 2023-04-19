import './Input.css'

export default function Input(props) {
    const {
        type,
        placeholder,
        width,
        value,
        handleChange
    } = props

    return (
        <input className='input'
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            style={{ width: width }}
        />
    )
}