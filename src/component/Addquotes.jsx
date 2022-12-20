import React from 'react'


export default function Addquotes() {
  return (
    <div>
<h1>create a new submission</h1>
<form  >
     
        <label  >
          Date of submission:
        </label>
        <input type="date"  />
         
        <label >
          Time of submission:
        </label>
        <input type="date" />
           
        <label >
          AM/PM:
        </label>
        <select>
          <option value="">AM</option>
          <option value="">PM</option>
        </select>
         
        
      </form>

    </div>
  )
}
