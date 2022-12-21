import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Row from 'react-bootstrap/Row';


function createData(PROPERTY, NAME, ADDRESS, ) {
    return {
        PROPERTY,
        NAME,
        ADDRESS,
     
    };
  }
  const rows = [
    createData( '207 Jeffs valley, Greenup,KY, 41144','Jini', '7050 Elue LN, Jackson, MI, 49203'),
 
  ];

  function createData2(PROPERTY, NAME, MORTGAGE_ORDER,LOAN_NUMBER,  ADDRESS,TYPE, ) {
    return {
        PROPERTY,
        NAME,
        MORTGAGE_ORDER,
        LOAN_NUMBER, 
        ADDRESS,
        
        TYPE,

     
    };
  }
  const rows2 = [
    createData2( '207 Jeffs valley, Greenup,KY, 41144','Jini', ' ',' ','7050 Elue LN, Jackson, MI, 49203','loaner',),
 
  ];



export default function ThirdNav1() {
  const today = new Date();
const numberOfDaysToAdd = 3;
const date = today.setDate(today.getDate() + numberOfDaysToAdd); 
const defaultValue = new Date(date).toISOString().split('T')[0]
  return (
    <div>
      <div className='center-align-form' >
    <Form >
    <h3 className='h3-sty'>Additional Information</h3>
    <div className=" for-colum-grid" >
      
      
      <Form.Group as={Col} controlId="formdate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control type="" readOnly defaultValue={defaultValue}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formdate">
        <Form.Label>End date</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
      <Form.Group as={Col} controlId="formdate">
        <Form.Label>Mailing Address</Form.Label>
        <select className='selectdropdown'>
          <option value="">JF7 valley 2675</option>
          
          </select>
      </Form.Group>
      

    </div>
    <h3  className='h3-sty'>Add Additional Interest</h3>
    <div className='three-column-grid'>
    

      <button className="def2" disabled >ADD ADDITIONAL INTEREST</button> 
      <Form.Group as={Col} controlId="formGridZip">
        <table></table>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridZip">
        <table></table>
      </Form.Group>

    </div>
    

    <div className='three-column-grid'>
 
      
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Property</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Select</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Name </Form.Label>
        <Form.Control />
      </Form.Group>
    </div>
    <div className='three-column-grid'>
 
      
    <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Address Line1</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>
</div>

<div className='three-column-grid'>
 
      
 <Form.Group as={Col} controlId="formGridZip">
     <Form.Label>State</Form.Label>
     <Form.Control />
   </Form.Group>

   <Form.Group as={Col} controlId="formGridZip">
     <Form.Label>Zip</Form.Label>
     <Form.Control />
   </Form.Group>

   
     <button className='def' disabled>ADD</button>
     
  
</div>


<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
     
          <TableRow>
            <TableCell>PROPERTY</TableCell>
            <TableCell align="right"> NAME</TableCell>
            <TableCell align="right">ADDRESS</TableCell>
  
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.PROPERTY}
              </TableCell>
              {/* <TableCell align="right">{row.PROPERTY}</TableCell> */}
              <TableCell align="right">{row.NAME}</TableCell>
              
              <TableCell align="right">{row.ADDRESS}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <br></br>
    <br></br>

<h3  className='h3-sty'>Add Loss Payee/Lender's Loss Payee/Mortagages</h3>
<div className='two-column-grid'>
      
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Type </Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Loss Payee</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>
    
      
    </div>

    <div className=" for-colum-grid" >
      
      
      <Form.Group as={Col} controlId="formdate">
        <Form.Label>Property</Form.Label>
        <select className='selectdropdown'>
          <option value="">Select</option>
          
          </select>
      </Form.Group>

      <Form.Group as={Col} controlId="formdate">
        <Form.Label>Name</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group as={Col} controlId="formdate">
        <Form.Label>Loan Number</Form.Label>
        <Form.Control />
      
      </Form.Group>
      

    </div>

    <div className='three-column-grid'>
 
      
 <Form.Group as={Col} controlId="formGridZip">
     <Form.Label>Address Line1</Form.Label>
     <Form.Control />
   </Form.Group>

   <Form.Group as={Col} controlId="formGridZip">
     <Form.Label>Address Line 2</Form.Label>
     <Form.Control />
   </Form.Group>

   <Form.Group as={Col} controlId="formGridZip">
     <Form.Label>City</Form.Label>
     <Form.Control />
   </Form.Group>
</div>

<div className='three-column-grid'>

   
<Form.Group as={Col} controlId="formGridZip">
  <Form.Label>State</Form.Label>
  <Form.Control />
</Form.Group>

<Form.Group as={Col} controlId="formGridZip">
  <Form.Label>Zip</Form.Label>
  <Form.Control />
</Form.Group>


  <button className='def' disabled>ADD</button>
  

</div>

<br></br>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
     
          <TableRow>
            <TableCell>PROPERTY</TableCell>
            <TableCell align="right"> NAME</TableCell>
            <TableCell align="right"> MORTGAGE ORDER</TableCell>
            <TableCell align="right">LOAN NUMBER</TableCell>
          
            <TableCell align="right">ADDRESS</TableCell>
            <TableCell align="right"> TYPE</TableCell>

  
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.PROPERTY}
              </TableCell>
              {/* <TableCell align="right">{row.PROPERTY}</TableCell> */}
              <TableCell align="right">{row.NAME}</TableCell>
              <TableCell align="right">{row.MORTGAGE_ORDER}</TableCell>
              <TableCell align="right">{row.LOAN_NUMBER}</TableCell>
              


              
              <TableCell align="right">{row.ADDRESS}</TableCell>
              <TableCell align="right">{row.TYPE}</TableCell>

             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <br></br>
    <br></br>
    <div className='btn-agency'>

<Button>SAVE</Button>

<Button>CONTINUE</Button>



{/* </span> */}

</div>
   



   
 



  </Form>
  </div>
  </div>
  )
}
