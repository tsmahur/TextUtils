import React from 'react'  //rfce

function Alert(props) {
   const capitalize=(word)=>{
      const lower=word.toLowerCase()
      return lower.charAt(0).toUpperCase()+lower.slice(1)
   }
   return (
      <div style={{zIndex:2,opacity:0.8,position:'absolute',bottom:'0px'}} >
      {props.alert && <div>
         <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}!</strong> {props.alert.msg}.
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>
      </div>}
      </div>
   )
}

export default Alert