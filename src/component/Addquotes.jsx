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
<h5>Agency Information</h5>

<div>
  <label>Agency Mapping</label>
  <span style={{paddingLeft: '20px'}}>
  <button>
       Agency
      </button>
      </span>
      <span style={{paddingLeft: '20px'}}>
      <button>
       Agency
      </button>
      </span>
</div>
<div>
<h1>Agency Information</h1>
<label>Agency</label>
<input type="text"/>
<label>Agency</label>
<input type="text"/>
<button>
       Search
      </button>

</div>
<div><h1>Contact Information</h1>
<lable>Secondary name</lable>
<input type="text"/>
<br></br>
<br></br>
<lable>email</lable>
<input type="text"/>
<span style={{paddingLeft: '20px'}}>
<lable>phone</lable>
<input type="text"/>
</span>


</div>
<h5>Insured Information</h5>

<div>
  <label>Agency Mapping</label>
  <span style={{paddingLeft: '20px'}}>
  <button>
       Individual
      </button>
      </span>
      <span style={{paddingLeft: '20px'}}>
      <button>
       Legal family
      </button>
      </span>
</div>
<div><h1>Property Insured Information</h1>
<span style={{paddingLeft: '20px'}}>
<lable>Address</lable>
<input type="text"/>
</span>
<span style={{paddingLeft: '20px'}}>
<lable>Building</lable>
<input type="text"/>

<lable>phone</lable>
<input type="text"/>
</span>
<br></br>
<span style={{paddingLeft: '20px'}}>
<lable>City</lable>
<input type="text"/>
</span>
<span style={{paddingLeft: '20px'}}>
<lable>State</lable>
<input type="text"/>

<lable>Zip</lable>
<input type="text"/>
</span>
<br></br>
<button>Submit</button>

</div>
      </form>

    </div>
  )
}
