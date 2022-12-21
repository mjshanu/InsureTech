import React from 'react'


export default function ThirdNav() {
  return (
    <div>
<h1>Additional Information</h1>
<form  >
  <div className="nl">
     
        <label style={{paddingLeft: '20px'}}  >
          Start Date
        </label>
        <input type="date"  />
         
        <label style={{paddingLeft: '50px'}} >
          End Date
        </label>
        <input type="date" />
           
        <label >
          Mailing Address
        </label>
        <select>
          <option value="">247 Greenvalley KY</option>
          <option value="">247 Greenvalley KY</option>
        </select>
        <br></br>
        <br></br>

        </div>
       <h1>Add Additional Interest</h1>  
       <div >
       <span style={{paddingLeft: '20px'}}>
      <button>
       Add Additional Interest 
      </button>
      </span>
        
        </div>
       
        
        <div>
        <br></br>
        <label>Property</label>
        
        <select>
          <option value="">None</option>
          
        </select>
        <label>Name</label>
<input type="text"/>
</div>
<div>

<label>Address Line1</label>
<input type="text"/>
<label>Address Line2</label>
<input type="text"/>
<label>City</label>
<input type="text"/>
</div>

<div>
<label>State</label>
<input type="text"/>
<label>Zip</label>
<input type="text"/>
<button>
       Search
      </button>

</div>



<br></br>
<div>
<label>Property</label>
<input type="text"/>
<label>Name</label>
<input type="text"/>
<label>Address</label>
<input type="text"/>

</div>
<div><h1>Add Loss Payee/Lender's Payee/Mortgages</h1>
<div>
<label>Type</label>
        
        <select>
          <option value="">Loss Payee</option>
          
        </select>

        </div>
        <div>
<label>Property</label>
        
        <select>
          <option value="">None</option>
          
        </select>
        <lable>Name</lable>
<input type="text"/>

<lable>Loan Number</lable>
<input type="text"/>
        
        </div>
        


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

<br></br>
<br></br>
<lable>State</lable>
<input type="text"/>
<span style={{paddingLeft: '20px'}}>
<lable>Zip</lable>
<input type="text"/>
</span>
<span style={{paddingLeft: '20px'}}>
<button>
       Search
      </button>
</span>

<br></br>
<br></br>
<lable>Property</lable>
<input type="text"/>
<span style={{paddingLeft: '20px'}}>
<lable>Name</lable>
<input type="text"/>
</span>
<span style={{paddingLeft: '20px'}}>
<lable>Mortgage Orer</lable>
<input type="text"/>
<lable>Loan Number</lable>
<input type="text"/>
<lable>Address</lable>
<input type="text"/>
<lable>Type</lable>
<input type="text"/>
<button>Submit</button>
</span>

</div>


<div>
<br></br>
<button>Save</button>
<button >Continue</button>

</div>
      </form>

    </div>
  )
}
