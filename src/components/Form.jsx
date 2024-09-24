import React from 'react'
import { useState } from 'react';

const Form = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [titleText, setTitleText] = useState("");
    const [contentText, setContentText] = useState("");

    // But what if there are multiple inputs (10 or more)? 
    // you can create a useState where its initial value is an object 

    const [data, setData] = useState({
        title: "",
        content: ""
    })

    const handleTitleChange = (event) => { //handles the onchange of the input text
        setTitle(event.target.value);
        setData({
            ...data, // use the spread operator so you can overwrite data and not disturb any data.
            title: event.target.value // sets the title to whatever the content of the input has
        })
    }

    const handleContentChange = (event) => { //handles the onchange of the input textarea
        setContent(event.target.value);
        setData({
            ...data, // use the spread operator so you can overwrite data and not disturb any data.
            content: event.target.value
        })
    }

    const handleSubmit = () => { //gets the value of the inputs and displays it in the page. 
        console.log(data);
        setContentText(data.content);
        setTitleText(data.title)
        setData({ // resets the input without refreshing the page
            title: "",
            content: ""
        })

    }

  return (
    <>
        <form>

            <h1 className='mx-2'>{titleText}</h1>
            <p className='mx-2'>{contentText}</p>

            <div className="form-group">
                <label className="mx-2" htmlFor="exampleFormControlInput1">Title :</label>
                <input onChange={(e) => handleTitleChange(e)} type="text" className="form-control mx-2" id="exampleFormControlInput1" placeholder="Title" value={data.title}/>
            </div>

            <div className="form-group">
                <label className="mx-2" htmlFor="exampleFormControlTextarea1">Content :</label>
                <textarea onChange={handleContentChange} className="form-control mx-2" id="exampleFormControlTextarea1" rows="3" placeholder='Content' value={data.content}></textarea>
            </div>

            <button type="button" className="btn btn-success my-3 mx-2" onClick={handleSubmit}>Save</button> 

        </form>
    </>
  )
}

export default Form