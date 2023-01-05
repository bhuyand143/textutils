import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        // console.log('On Change!')
        setText(event.target.value)
    }
    const handleUpclick = () => {
        // console.log('UpperCase was clicked!')
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoclick =()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleClclick=()=>{
        setText('');
        props.showAlert("Text Cleared!","success");
    }
    const handleCopy=()=>{
        let text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to the Clipboard!","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);// regular expression is used here
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!","success");
    }
    //Speak funcntionality
    // const speak = () => {
    //     let msg = new SpeechSynthesisUtterance();
    //     msg.text = text;
    //     window.speechSynthesis.speak(msg);
    // }
    const [text, setText] = useState('');//set text as Enter text here and setText function will be used to maintain changes in text

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoclick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClclick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2">Speak</button> */}
            </div>
            <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008*text.split(' ').length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the textbox above to preview here!"}</p>
            </div>
        </>
    )
}

