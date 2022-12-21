import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';


export default function Addquotes() {
  const today = new Date();
const numberOfDaysToAdd = 3;
const date = today.setDate(today.getDate() + numberOfDaysToAdd); 
const defaultValue = new Date(date).toISOString().split('T')[0]
  return (
    <div>
      <div className='center-align-form' >
    <Form >
    <h3 className='h3-sty'>Create a New Submission</h3>
    <div className=" for-colum-grid" >
      
      
      <Form.Group as={Col} controlId="formdate">
        <Form.Label>Date of submission</Form.Label>
        <Form.Control type="" readOnly defaultValue={defaultValue}/>
      </Form.Group>

      <Form.Group as={Col} controlId="formdate">
        <Form.Label>Time of submission</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
      <Form.Group as={Col} controlId="formdate">
        <Form.Label>AM/PM</Form.Label>
        <select className='selectdropdown'>
          <option value="">AM</option>
          <option value="">PM</option>
          </select>
      </Form.Group>
      <Form.Group as={Col} controlId="formdate" className='urgentcheckbox'>
      <Form.Label>urgent</Form.Label>
      <input type="checkbox" id="urgent" name="urgentcheck" value="1"></input>
      </Form.Group>

    </div>
    <h3  className='h3-sty'>Requested Contract and Product</h3>
    <div className='three-column-grid'>
      
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Contract</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Select</option>
          <option value="232">232</option>
          <option value="946">946</option>
          <option value="966">966</option>
          <option value="1136">1136</option>
          <option value="PHLY">PHLY</option>
          <option value="UW Serivice">UW SERVICE BROKER</option>
        </Form.Select>
      </Form.Group>
      <br></br>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Product</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Select</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Marketing refferal</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Select</option>
          <option>...</option>
        </Form.Select>
      </Form.Group>
    </div>
<div className='btn-agency'>
<Form.Label>Agency type</Form.Label>
<div className='btn-outer'>
<Button  type="submit">
      Wholesaler/Broker
    </Button>
    <Button  type="submit">
      Retail
    </Button>
    </div>

</div>
<h3  className='h3-sty'>Agency information</h3>
    <div>
    

    <div className='three-column-grid agncy-sty-rev1'>
      

    <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Agency Name</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Address Line 1</Form.Label>
        <Form.Control />
      </Form.Group>
      <div className='btn-outer-agency'>
      <Button  type="submit">
      Submit
    </Button>
    </div>
   </div>
    </div>
    

    <h3  className='agncy-sty-revrs'>Contact information</h3>
    <div className='two-column-grid'>
      
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Submitters Name</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Email</Form.Label>
        <Form.Control />
      </Form.Group>
      
    </div>
    <div className='two-column-grid'>
      
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Phone</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Label>Email</Form.Label>
        <Form.Control />
      </Form.Group>
      
    </div>
    
    <div className='btn-agency'>
<Form.Label>Inssured information</Form.Label>
<div className='btn-outer'>
<Button  type="submit">
      Individual
    </Button>
    <Button  type="submit">
      Legal
    </Button>
    </div>
   

</div>
<h3  className='h3-sty'>Property issured information</h3>
    <div className="three-column-grid" >
      
      
      <Form.Group as={Col} controlId="formdate">
        <Form.Label>Date of submission</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group as={Col} controlId="formdate">
        <Form.Label>Time of submission</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
      <Form.Group as={Col} controlId="formdate">
        <Form.Label>AM/PM</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
     
      

    </div>
    <div className="three-column-grid" >
      
      
      <Form.Group as={Col} controlId="formdate">
        <Form.Label>Date of submission</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group as={Col} controlId="formdate">
        <Form.Label>Time of submission</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
      <Form.Group as={Col} controlId="formdate">
        <Form.Label>AM/PM</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
     
      

    </div>
<br></br>
    <br></br>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </div>
  </div>
  )
}
