import React from 'react'

export default function Secondadd() {
  return (
    <div>
<h1> Property Insured</h1>
<form >
            

<div>
  <label>Tenant</label>
  <br></br>
  <span style={{paddingLeft: '20px'}}>
  <button>
       Yes
      </button>
      </span>
      <span style={{paddingLeft: '20px'}}>
      <button>
       NO
      </button>
      </span>
</div>
<div>

<label>Occupancy</label>
<input type="text" placeholder="Residential" />




<label>
          Occupancy Type:
        </label>
        <select>
    
        <option value="default" disabled hidden>
          Select
        </option>
          <option value="">Type A</option>
          <option value="">type B</option>
        </select>
        <br></br>
        <br></br>


</div>
<h1></h1>
<div>
  <label>Tenant</label>
  <span style={{paddingLeft: '20px'}}>
  <button>
       YES
      </button>
      </span>
      <span style={{paddingLeft: '20px'}}>
      <button>
      NO
      </button>
      </span>
</div>

<div><h1></h1>
<lable>Homeowner Carrier</lable>
<input type="text"/>
<br></br>
<br></br>
<lable>Primary Flood Carrier</lable>
<input type="text"/>
{/* <span style={{paddingLeft: '20px'}}>
<lable>phone</lable>
<input type="text"/>
</span> */}

<div>
  <label>Foundation</label>
  <span style={{paddingLeft: '20px'}}>
        <button>
       Slab
      </button>
      </span>
      <span style={{paddingLeft: '20px'}}>
      <button>
       Basement
      </button>
      </span>
      <span style={{paddingLeft: '20px'}}>
        <button>
       Enclosure
      </button>
      </span>
      <span style={{paddingLeft: '20px'}}>
      <button>
       pillings
      </button>
      </span> <span style={{paddingLeft: '20px'}}>
        <button>
       Crawlspace
      </button>
      </span>
     
</div>

</div>
<h5>Insured Information</h5>


<div>
<span style={{paddingLeft: '20px'}}>
<lable>Flood Zone</lable>

<select> 
<option value="default" disabled hidden>
          
        </option>
          <option value="">Flood Zone A</option>
          <option value="">Flood Zone B</option>
        </select>

<input type="text"/>
</span>
<span style={{paddingLeft: '20px'}}>
<lable>BFE</lable>
<input type="text"/>

<lable>LFE</lable>
<input type="text"/>
</span>

<span style={{paddingLeft: '20px'}}>
<lable>Elevation Diffrence</lable>
<input type="text"/>
{/* </span> */}
<br></br>
{/* <span style={{paddingLeft: '20px'}}> */}
<lable>HAG</lable>
<input type="text"/>

<lable>LAG</lable>
<input type="text"/>
</span>
<span style={{paddingLeft: '20px'}}>
<lable>BFD</lable>
<input type="text"/>

<lable>Year Build</lable>
<input type="text"/>
</span>
</div>
<div>
<span style={{paddingLeft: '20px'}}>
<lable>Replacement Cost</lable>
<input type="text"/>

<br></br>
<label>Property Build over Water</label>
  <span style={{paddingLeft: '20px'}}>
    <br></br>
  <button>
       YES
      </button>
      </span>
      <span style={{paddingLeft: '20px'}}>
      <button>
      NO
      </button>
      </span>

      <br></br>

      <lable>Number of Stories</lable>
<input type="text"/>
</span>
<br></br>

<label><h5>Loss Details</h5>Any Prior Losses</label>
  <span style={{paddingLeft: '20px'}}>
  <button>
       YES
      </button>
      </span>
      <span style={{paddingLeft: '20px'}}>
      <button>
      NO
      </button>
      </span>

<br></br>

<label><h3>Competitive Data</h3>Competitive Premium</label>
  <span style={{paddingLeft: '20px'}}>
<input type="text"/>

<br></br>
<label>Carrier</label>

<input type="text"/>
</span>

<span style={{paddingLeft: '20px'}}>
<label>Contetnt limit</label>
<input type="text"/>

<br></br>
<label>Building limits</label>

<input type="text"/>
<br></br>

<label>Effective Data</label>

<input type="text"/>
</span>

<br></br>

<label><h3>Requested Coverage and Deducttibles</h3>builind limit</label>
  <span style={{paddingLeft: '20px'}}>
<input type="text"/>

<br></br>
<label>Build Deductible</label>

<input type="text"/>

<br></br>
<label>content limit</label>

<input type="text"/>


<label>content Deductible</label>

<input type="text"/>

<br></br>
<label>ALE Limit</label>

<input type="text"/>

<br></br>
<label>ALE Deductible</label>

<input type="text"/>
<br></br>
<button>SAVE</button>
<button>CONTINUE</button>
<button>MORE ACTIONS</button>
</span>

</div>
      </form>

    </div>
  )
}
