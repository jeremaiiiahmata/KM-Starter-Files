const Button = ({name, message, emoji}) => {

return(
    <>
        <button type="button" className="btn btn-primary my-3 mx-2">{message}, {name}! {emoji}</button>
    </>
)

}

export default Button;