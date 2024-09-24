import React, { useState } from 'react'



const Message = () => {

    const handleClick = () => {
        console.log("Button clicked!")
        setShow(!isShowing);

        if (isShowing){
            setMessage("Hello!");
        } else {
            setMessage("")
        }
        
    }

    const [message, setMessage] = useState("");
    const [isShowing, setShow] = useState(false);

  return (
    <>
        <h1>{message}</h1>
        <button type="button" className="btn btn-danger my-3 mx-2" onClick={handleClick}>Click for a Message!</button>
    </>
    
  )
}

export default Message