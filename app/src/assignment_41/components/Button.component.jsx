function Button(props) {
    return (
        <button class="button" style={props.styles}>
            {props.text}
        </button>
    )
}

export default Button;

