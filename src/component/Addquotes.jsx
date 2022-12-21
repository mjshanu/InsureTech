import React ,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';
import Modal from 'react-modal';
import Wholesalername from './Wholesalername';
import Pagefive from './Pagefive';
import { Link } from "react-router-dom";
export default function Addquotes() {
  const [isOpened, setIsOpened] = useState(false);
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [isretailOpened, setIsretailOpened] = useState(false);
  const [isindividualOpened, setIindividualOpened] = useState(false);
  const [isModalmoreactionOpen, setModalmoreactionIsOpen] = useState(false);
	

  const today = new Date();
const numberOfDaysToAdd = 3;
const date = today.setDate(today.getDate() + numberOfDaysToAdd); 
const defaultValue = new Date(date).toISOString().split('T')[0];
function agencytype() {
  setIsOpened(wasOpened => !wasOpened);
}
function retailform() {
  setIsOpened(false);
  setIsretailOpened(wasOpened => !wasOpened);
}

function Addindividual() {
  setIindividualOpened(wasOpened => !wasOpened);
}
function closeModal()
{
  setModalIsOpen(false);
}
function moreactions()
{
  setModalmoreactionIsOpen(true);
}
function closeModalmore()
{
  setModalmoreactionIsOpen(false);
}
  return (
    <div>
     {/* first modal*/}
      <Modal
        isOpen={isModalOpen}
       
        onRequestClose={closeModal}
        
        contentLabel="Example Modal"
      >
        <h2>Wholesalers</h2>
        <button onClick={closeModal}>close</button>
        <div></div>
   <Wholesalername/>
          
      </Modal>
       {/* moreaction*/}
       <Modal
        isOpen={isModalmoreactionOpen}
       
        onRequestClose={closeModalmore}
        
        contentLabel="Example Modal"
      >
       <Button >
      Copy
    </Button>
    <br></br>
        <button onClick={closeModalmore}>close</button>
        <div></div>
   
          
      </Modal>

      <h1 className='m-t-20'>Add Quotes</h1>
      <div className='center-align-form' >
    <Form >
    <h3 className='h3-sty'>create a new submission</h3>
    <div className="for-colum-grid" >

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
    <h3  className='h3-sty'>Requested contract and product</h3>
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
<div className='btn-outer btn-outer1' >
<Button  onClick={agencytype}>
Wholesaler/broker 
    </Button>
    <Button  onClick={retailform}>
      Retail
    </Button>
    </div>
    

</div>

{isOpened && (
       <div className='btn-agency'>
       <Form.Label>Type of account</Form.Label>
       <div className='btn-outer btn-outer2'>
       <Button  onClick={agencytype}>
             Account current 
           </Button>
           <Button  type="submit">
             Non account current
           </Button>
           </div>
           
       
       </div>
      )}
      {isretailOpened && (
        
       <div>
    <h3  className='h3-sty'>Agency information</h3>

       <div className='three-column-grid agncy-sty-rev1'>
         
   
       <Form.Group as={Col} controlId="formGridZip">
           <Form.Label>Agency Name</Form.Label>
           <Form.Control />
         </Form.Group>
   
         <Form.Group as={Col} controlId="formGridZip">
           <Form.Label>Address line</Form.Label>
           <Form.Control />
         </Form.Group>
         <div className='btn-outer-agency' >
         <Button  >
         Search
       </Button>
       </div>
      </div>
       </div>
   
      )}
       
<h3  className='h3-sty'>Wholesaler information</h3>
    <div>
    

    <div className='three-column-grid agncy-sty-rev1'>
      

    <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Wholesaler Name</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Address</Form.Label>
        <Form.Control />
      </Form.Group>
      <div className='btn-outer-agency'  onClick={() =>setModalIsOpen(true)}>
      <Button  >
      Search
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
<Button onClick={Addindividual} >
      Individual
    </Button>
    <Button  >
      Legal
    </Button>
    </div>
   

</div>
{isindividualOpened && (
        
        <div>
  
 
        <div className='three-column-grid agncy-sty-rev1'>
          
    
        <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>First Name</Form.Label>
            <Form.Control />
          </Form.Group>
    
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control />
            
          </Form.Group>
          <div className='btn-outer-agency' >
          <Button  >
          Add Another
        </Button>
        </div>
       </div>
        </div>
    
       )}
<h3  className='h3-sty'>Property issured information</h3>
    <div className="three-column-grid" >
      
      
      <Form.Group as={Col} controlId="formdate">
      <Form.Label>Adress </Form.Label>
            <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formdate">
      <Form.Label>Building </Form.Label>
            <Form.Control />
      </Form.Group>
      <Form.Group as={Col} controlId="formdate">
      <Form.Label>Country </Form.Label>
            <Form.Control />
      </Form.Group>
     
      

    </div>
    <div className="three-column-grid m-b-20" >
      
      
      <Form.Group as={Col} controlId="formdate">
      <Form.Label>City </Form.Label>
            <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formdate">
      <Form.Label>State </Form.Label>
            <Form.Control />
      </Form.Group>
      <Form.Group as={Col} controlId="formdate">
      <Form.Label>Zip </Form.Label>
            <Form.Control />
      </Form.Group>
     
      

    </div>
<br></br>
    <br></br>
    <Link to="/pagefive">
    <Button variant="primary">
      Submit
    </Button>
    </Link>
    <Button className='m-l-15' variant="primary" onClick={moreactions}  >
      More Actions
    </Button>
  </Form>
  </div>
  </div>
  )
}
