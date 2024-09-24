import React, { useState } from 'react'

const LikeCounter = () => {

    const [count, setCount] = useState(0);
    const [isLiked, setLike] = useState(false);

    const handleClick = () => {
        if (!isLiked){ // executes if value of isLiked = false
            setCount(count + 1)
            setLike(true)
        } else { // executes if value of isLiked = true
            setCount(count - 1)
            setLike(false)
        }
        
    }


  return (
    <>
        <h1>Count : {count}</h1>
        {isLiked ? // ternary operator -- changes when a button is clicked
            <button type="button" className="btn btn-danger my-3 mx-2" onClick={handleClick}>Dislike</button> :
            <button type="button" className="btn btn-info my-3 mx-2" onClick={handleClick}>Like</button>
        }

    </>
  )
}

export default LikeCounter