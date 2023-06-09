import React, { useState } from 'react'

export default function TextForms(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Convertes to Uppercase", "success");
    }
    const handleLoClick = (event) => {
        // console.log("On change");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Convertes to Lowercase", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value)
        
    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space removed", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }
    const [text, setText] = useState("Enter text here2");
    //text = "new text"; // wrong  way to change the state
    // setText("new text"); //corrrect way to change the state
    return (
        <>
        <div className='container' style={{color: props.mode===`dark`?`white`:`#042743`}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode===`dark`?`#13466e`:`white`, color: props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
                </div>
                <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Clear Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy  Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode===`dark`?`white`:`#042743`}} >
                <h1>Your text summery</h1>
                <p>{text.split(/\+/).filter((Element)=>{return Element.length!== 0}).length} word and {text.length} character </p>
                <p>{0.000 * text.split(" ").filter((Element)=>{return Element.length!== 0}).length} Minutes read </p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>    
        </>
    )
}
