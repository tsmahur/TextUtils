import React, { useState } from 'react'

function Forms(props) {

   const [name, setName] = useState("");
   const [address, setAddress] = useState("");
   const handleNameOnChange = (event) => {
      setName(event.target.value)
      // setAddress(event.target.value)
   }
   const handleAddressOnChange = (event) => {
      setAddress(event.target.value)
   }
   const handleSubmit = (event) => {
      alert(`Name : ${name} , Addresss : ${address}`)
      event.preventDefault()
   }


   props.activeLink("form","TextUtils - Form")
   return (
      <div>
         <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={name} onChange={handleNameOnChange}/>
            <br />
            <label>Address</label>
            <input type="text" value={address} onChange={handleAddressOnChange}/>
            <br />
            <button type="submit">Submit</button>
         </form>
      </div>
   )
}

export default Forms
