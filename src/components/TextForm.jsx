import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState();

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleClearText = () => {
        setText('');
    }

    const handleUppercase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowercase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCapitalize = () => {
        let newText = text
            .toLowerCase() // pehle sab lowercase me
            .split(" ") // words me tod do
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // har word ka first letter capital
            .join(" "); // wapas string me jodo
    
        setText(newText);
    }
    const handleCopy = () => {
        var text = document.getElementById("text");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
    }

    return (
        <>
            <div className="container">
                <h2>{props.header}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="text" value={text} onChange={handleOnChange} rows="5"></textarea>
                </div>

                <button className="btn btn-danger mx-1" onClick={handleClearText}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleUppercase}>Convert To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowercase}>Convert To Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleCapitalize}>Capitalize</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div>

            <div className="container">
                <h4>Your text summary</h4>
                <p>{text?.split(" ").length ?? 0} words {text?.length ?? 0} characters</p>
                <p>{parseFloat((0.008 * (text?.split(" ")?.length || 0)).toFixed(3))} Minutes to read</p>
            </div>
        </>
    );
}