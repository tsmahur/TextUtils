// import React, { useState } from 'react'

export default function About(props) {

   // const [myStyle, setMyStyle] = useState({
   //    color: 'black',
   //    backgroundColor: 'white'
   // });

   // const [btnText, setBtnText] = useState("Enable Dark Mode");

   // const modeToggleSwitch = () => {
   //    if (myStyle.color === 'white') {
   //       setMyStyle({
   //          color: 'black',
   //          backgroundColor: 'white'
   //       })
   //       setBtnText("Enable Dark Mode");
   //    }
   //    else {
   //       setMyStyle({
   //          color: 'white',
   //          backgroundColor: 'black',
   //          border: '1px solid white'
   //       })
   //       setBtnText("Disable Dark Mode");
   //    }
   // }
   

   props.activeLink("about","TextUtils - About Us")
   
   return (
      <>
      {/* <div className="container" style={myStyle}> */}
      <div className="container" style={{color:props.mode==='dark'?'#e0dddd':'black'}}>

         <h1 className="my-3 customInlineDisplay" >About Us</h1>

         <br/>
         This TextUtils is developed by Abc .
         <br/>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ullam illo laboriosam sit cumque? Adipisci, vitae reiciendis neque accusamus atque esse iste dolor ut sint est explicabo consequatur nobis recusandae ab quos in hic.
         {/* <div className="justify-content-end">
               <button type="buttton" className="btn btn-outline-dark" style={myStyle} onClick={modeToggleSwitch}>{btnText}</button>
            </div> */}
      </div>
      </>
   )
}
