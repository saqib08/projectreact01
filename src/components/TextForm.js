// import React from 'react';
import React, { useState } from "react";

export default function TextForm(Props) {

  const handleUpClick = () => {
    // console.log("Up Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    // console.log("Up Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClearClick = () => {
    // console.log("Up Clicked" + text);
    let newText = "";
    setText(newText)
  }
  const handleOnChange = (event) => {
    // console.log("On Clicked");
    setText(event.target.value)
  }
  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container my-4">
        <h1>{Props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Convert to lowercase</button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p> {text.split(" ").length} Word and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
        <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
      </div>
    </>
  );
}


