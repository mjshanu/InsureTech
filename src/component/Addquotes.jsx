import React from 'react'

export default function Addquotes() {
  return (
    <div>
<h1>create a new submission</h1>
<form >
     
        <label >
          Date of submission:
        </label>
        <input type="date"  />
         
        <label >
          Time of submission:
        </label>
        <input type="date" />
           
        <label>
          AM/PM:
        </label>
        <select>
          <option value="">AM</option>
          <option value="">PM</option>
        </select>
        <br></br>
        <br></br>
       <h1>Requested Contract and Products</h1>  
       <div >
        <label>contract</label>
        <br></br>
       <select>
          <option value="">select</option>
          
        </select>
        </div>
        <div>
        <br></br>
        <label>product</label>
        <br></br>
        <select>
          <option value="">select</option>
          
        </select>
        </div>
        <div>
        <br></br>
        <label>Marketing Referal</label>
        <br></br>
        <select>
          <option value="">None</option>
          
        </select>
</div>


        
      </form>

    </div>
  )
}
