const Text = ({text, textsize, textcolor, textunderline}) => {
    const myStyle = {
        textAlign: 'center',
        color: textcolor,
        fontSize: `${textsize}px`,
        textDecoration: textunderline === true ? 'underline' : 'none'
    }
    return (
        <p style={myStyle}>{text}</p>
    )
}

export default Text