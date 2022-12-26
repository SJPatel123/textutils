import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearClick = () => {
        setText('');
    }
    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
    }
    // const wordCounter = () => {
    //     if(text === '' || /^\s*$/.test(text)){
    //         return 0;
    //     }
    //     else if(text.charAt(text.length - 1) === ' ' || /^.*\s+$/.test(text)){
    //         return text.split(' ').length - 1;
    //     }
    //     return text.split(' ').length;
    //     let wc = text.split(" ").length;
    //     text.split(" ").forEach((word) => {
    //         if(!word.length){
    //             wc -= 1;  
    //         }
    //     });

    //     return text.trim() === '' ? 0 : text.match(/\S+/g).length;
    // }
    // const characterCounter = () => {
    //     return text.replace(/\s+/g,' ').trim().length;
    // }
    // const minutesCounter = () => {
    //     return 0.008 * (text.trim() === '' ? 0 : text.match(/\S+/g).length);
    // }
    const [text, setText] = useState('Enter the text here');
    return (
        <>
            <div className="container">
                <h1 className={`my-3 text-${props.mode === 'light'?'dark':'light'}`}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control text-${props.mode === 'light'?'dark':'light'} bg-${props.mode === 'light'?'':'secondary'} text-${props.mode === 'light'?'dark':'light'}`} value={text} onChange={handleOnChange} id="myBox" rows="3"></textarea>
                </div>
                <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Textarea</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h2 className={`text-${props.mode === 'light'?'dark':'light'}`}>Your text summary</h2>
                <p className={`text-${props.mode === 'light'?'dark':'light'}`}>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words, {text.replace(/\s+/g,' ').trim().length} characters</p>
                <p className={`text-${props.mode === 'light'?'dark':'light'}`}>{0.008 * (text.trim() === '' ? 0 : text.match(/\S+/g).length)} Minutes read</p>
                <h3 className={`my-2 text-${props.mode === 'light'?'dark':'light'}`}>Preview</h3>
                <p className={`text-${props.mode === 'light'?'dark':'light'}`}>{text === ''?'Enter the text above':text}</p>
            </div>
        </>
    )
}