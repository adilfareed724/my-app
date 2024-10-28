import React, { useState } from "react";


export default function Foam(props) {
  const handelClearClick =()=>{
    let newtext = '';
    setText(newtext)
    
  }
  function handeluppercase() {
    let newtext = Text.toUpperCase();
    setText(newtext);
    props.showAlert("converted to uppercase", "success")
    
  }
  const handellowercasek =()=>{
    let newtext = Text.toLowerCase();
    setText(newtext)
    props.showAlert("converted to lowercase", "success")

  }
  const handleOnchange=(e) =>{ 
    setText(e.target.value)}
 
    
  const [Text, setText] = useState("");
  return (
    <>
      <div className="form-group mx-5" >
        <label for="exampleFormControlTextarea1 my-2 " >
        <h4 >Enter the Text</h4>
        </label>
        <textarea    
          className="form-control "
          id="exampleFormControlTextarea1"value={Text} onChange={handleOnchange}
          rows="8"
          ></textarea>
      <button type="submit" class="btn btn-primary mx-3 my-3 " onClick={handelClearClick}>Clear Text</button >
      <button type="submit" class="btn btn-primary mx-3 my-3" onClick={handeluppercase}>Convert touppercase</button>
      <button type="submit" class="btn btn-primary mx-3 my-3" onClick={handellowercasek}>convert tolowercase</button>
      </div>
      <div className="container ">
          <h4>Your Text Counter</h4>
          <p>{Text.split(" ").length} Words and {Text.length} Characters</p>
          <p>{0.008 * Text.split(" ").length} Minute read</p>
      </div>
    </>
  );
}
