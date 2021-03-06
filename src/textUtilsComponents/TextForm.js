import React, { useState } from 'react' //imr
// import React, { useState,useEffect } from 'react'
// import {StyleSheet} from 'react';



export default function TextForm(props) {  //rfc

   const [text, setText] = useState(""); //hooks [stateVariable, setStateFunction]
   // text="some modified test" //wrong way to change state
   // setText("some modified text") //correct way to change state

   const [modifiedText, setModifiedText] = useState("");

   const upperCaseClick = () => {
      setModifiedText(text.toUpperCase())
      props.showAlert("Text is converted to UPPERCASE","success")
      // console.log("text :"+text)
      // console.log("modifiedText :"+modifiedText) // not updating old value comming here, but actually changing
      // console.log(modifiedText.split(" ").length)
      // console.log(modifiedText.split(" "))
   }

   const lowerCaseClick = () => {
      setModifiedText(text.toLowerCase())
      props.showAlert("Text is converted to lowercase","success")
   }

   const clearText = () => {
      setModifiedText("")
      setText("")
      props.showAlert("Text is cleared","success")
   }

   const copyModifiedText = () => {
      var content = document.getElementById("myBoxModified") //old
      content.select() //select at UI
      // navigator.clipboard.writeText(content.value)
      navigator.clipboard.writeText(modifiedText)
      props.showAlert("Modified Text is copied to Clipboard","success")
   }

   const removeExtraSpace=()=>{
      setModifiedText(text.replaceAll(/[ ]+/ig," "))
      props.showAlert("Extra spaces are removed from Text","success")
   }

   const handleOnChange = (event) => {
      setText(event.target.value)
   }

//    // trigger on component mount
//   useEffect(() => {
//    props.title("TextUtils - Home");
//    props.activeLink("home");
//  }, []);

props.activeLink("home","TextUtils - Home")

   return (
      <>
         <div className="container" style={{color:props.mode==='dark'?'#e0dddd':'black'}}>
            <h2 >{props.heading}</h2>
            <div className="mb-3">
               <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleOnChange}
               style={{backgroundColor:props.mode==='dark'?'#3f4c58':'white',color:props.mode==='dark'?'#e0dddd':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-3 my-1" onClick={upperCaseClick} disabled={text.length===0}>UpperCase</button>
            <button className="btn btn-primary mx-3 my-1" onClick={lowerCaseClick} disabled={text.length===0}>LowerCase</button>
            <button className="btn btn-primary mx-3 my-1" onClick={clearText} disabled={text.length===0}>Clear</button>
            <button className="btn btn-primary mx-3 my-1" onClick={copyModifiedText} disabled={text.length===0}>Copy Modified</button>
            <button className="btn btn-primary mx-3 my-1" onClick={removeExtraSpace} disabled={text.length===0}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-3 my-1"  disabled={text.length===0}>Capitalize</button>
            <button className="btn btn-primary mx-3 my-1"  disabled={text.length===0}>Orignal</button>
            {/* <button className="btn btn-primary mx-3 my-1"  disabled={text.length===0}>Undo</button>
            <button className="btn btn-primary mx-3 my-1"  disabled={text.length===0}>Redo</button> */}
         </div>
         <div className="container my-3 " style={{color:props.mode==='dark'?'#e0dddd':'black'}}>
            <h2 className="customInlineDisplay mb-3">Modified Text</h2>
            <div className="customInlineDisplay mx-3"> ( Summary : Total {modifiedText.length} characters &amp; {modifiedText === "" ? 0 : modifiedText.split(/\s/).filter((txt)=>{return txt.length!==0}).length} words )</div>
               <textarea className="form-control" id="myBoxModified" rows="5" value={modifiedText === "" ? "Enter something to Preview" : modifiedText} 
                style={{backgroundColor:props.mode==='dark'?'#3f4c58':'white',color:props.mode==='dark'?'#e0dddd':'black'}} readOnly></textarea>
         </div>

      </>

   )
}
