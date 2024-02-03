import "./formstyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="forms">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Your Order</label>
            <input type="text"></input>
            <label>Instructions(if required)</label>
            <textarea rows="6" placeholder="Type your instructions here(if any)"/>
            <button className="btn">Submit</button>
        </form>
      
    </div>
  )
}

export default Form;
