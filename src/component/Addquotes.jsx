import React from 'react'


export default function Addquotes() {
  return (
    <div>
<h1>create a new submission</h1>
<form  >
  <div className="nl">
     
        <label style={{paddingLeft: '20px'}}  >
          Date of submission:
        </label>
        <input type="date"  />
         
        <label style={{paddingLeft: '50px'}} >
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
        <br></br>
        <br></br>

        </div>
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
<h5>Agency Type</h5>

<div>
  {/* <label>Agency Mapping</label> */}
  <span style={{paddingLeft: '20px'}}>
  <button>
  Wholesaler/Broker
      </button>
      </span>
      <span style={{paddingLeft: '20px'}}>
      <button>
       Retail Agent 
      </button>
      </span>
</div>
<div>
<h1>Agency Information</h1>
<label>Agency Name</label>
<input type="text"/>
<label>Address Line1</label>
<input type="text"/>
<button>
       Search
      </button>

</div>
<div><h1>Contact Information</h1>
<lable>Subscriber's name</lable>
<input type="text"/>
<br></br>
<br></br>
<lable>Email</lable>
<input type="text"/>
<span style={{paddingLeft: '20px'}}>
<lable>Phone</lable>
<input type="text"/>
</span>
<span style={{paddingLeft: '20px'}}>
<lable>EXT</lable>
<input type="text"/>
</span>

</div>
<h5>Insured Information</h5>

<div>
  <label>Insured Type</label>
  <span style={{paddingLeft: '20px'}}>
  <button>
       Individual
      </button>
      </span>
      <span style={{paddingLeft: '20px'}}>
      <button>
       Legal Entity
      </button>
      </span>
</div>
<div><h1>Property Insured Information</h1>
<span style={{paddingLeft: '20px'}}>
<lable>Address Line 1</lable>
<input type="text"/>
</span>
<span style={{paddingLeft: '20px'}}>
<lable>Building Identifier</lable>
<input type="text"/>

<lable>Country</lable>
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
