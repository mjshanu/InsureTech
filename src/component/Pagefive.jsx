import React ,{ useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Modal from 'react-modal';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
export default function Pagefive() {
    const [isModalOpenEdit, setModalIsOpenEdit] = useState(false);
   const closeModaledit =()=>{
    setModalIsOpenEdit(false);
   }
  function editProperty()
  {
    setModalIsOpenEdit(true);
  }
  return (
    <div>
     

      <h1>EDIT</h1>
      <div className='center-align-form' >
    <Form >
        
    <h3 className='h3-sty'>Mandatory information</h3>
    <h6>Property Details</h6>
    <Link to="/">
    <Button className='btn-new-sty'>
      Home Page
    </Button>
    </Link>
    <Link to="/Addquotes">
    <Button className='btn-new-sty'>
      Back
    </Button>
    </Link>
    <Button onClick={editProperty}>EDIT</Button>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead> 
          <TableRow>
            
            <TableCell></TableCell>
            <TableCell align="right"></TableCell>
            
           
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow
             
            >
              <TableCell component="th" scope="row">
               Year of build :2021
              </TableCell>
              <TableCell align="right">Flood Zone :AE</TableCell>
             
            </TableRow>
            <TableRow
             
             >
               <TableCell component="th" scope="row">
                Replacementcost:$ 8,789
               </TableCell>
               <TableCell align="right">BFE:None</TableCell>
              
             </TableRow>
             <TableRow
             
             >
               <TableCell component="th" scope="row">
                Foundation:slab
               </TableCell>
               <TableCell align="right">LFE 6</TableCell>
              
             </TableRow>
             <TableRow
             
             >
               <TableCell component="th" scope="row">
               Property build over water:No
               </TableCell>
               <TableCell align="right">Elevation Difference:None</TableCell>
              
             </TableRow>
             <TableRow
             
             >
               <TableCell component="th" scope="row">
              No of stories:45
               </TableCell>
               <TableCell align="right">BFD:None</TableCell>
              
             </TableRow>
             <TableRow
             
             >
               <TableCell component="th" scope="row">
             
               </TableCell>
               <TableCell align="right">HAG:None</TableCell>
              
             </TableRow>
             <TableRow
             
             >
               <TableCell component="th" scope="row">
             Tenant:None
               </TableCell>
               <TableCell align="right">LAG:None</TableCell>
              
             </TableRow>
             <TableRow
             
             >
               <TableCell component="th" scope="row">
             Occupancy:None
               </TableCell>
               <TableCell align="right">Occupancy type:Condominium unit</TableCell>
               
             </TableRow>
       
        </TableBody>
      </Table>
    </TableContainer>
    
    <h6>Coverage and Deductibles</h6>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead> 
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="right"></TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow
             
            >
              <TableCell component="th" scope="row">
                A&A Limit:None
              </TableCell>
              <TableCell align="right">A&A Deductible:None</TableCell>
              
            </TableRow>
            <TableRow
             
             >
               <TableCell component="th" scope="row">
                 Content Limit:2021
               </TableCell>
               <TableCell align="right">Content Deductible:None</TableCell>
               
             </TableRow>
             
           
        </TableBody>
      </Table>
    </TableContainer>
    <Modal
        isOpen={isModalOpenEdit}
       
        onRequestClose={closeModaledit}
        
        contentLabel="Example Modal"
      >
      
       
        <div>
        <button className='btn-new-sty' onClick={closeModaledit}>close</button>
        <Form >
    <h3 className='h3-sty'>Edit property details</h3>
   
    <div className='two-column-grid'>
   
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Year Build</Form.Label>
        <Form.Control value='2021'/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Flood Zone</Form.Label>
        <Form.Control value="AE"/>
      </Form.Group>
      
    </div>
    <div className='two-column-grid'>
      
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Replacement cost</Form.Label>
        <Form.Control value='$ 8789'/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>BFE</Form.Label>
        <Form.Control />
      </Form.Group>
      
    </div>
    <div className='two-column-grid'>
      
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Tenant</Form.Label>
      <div>
        <button className='btn-new-sty'>Slab</button>
        <button className='btn-new-sty'>Basement</button>
        <button className='btn-new-sty'>Enclosure</button>
        <button className='btn-new-sty'>Crawl space</button>
        </div>
      </Form.Group>


 <Form.Group as={Col} controlId="formGridState">
      <Form.Label>LFE</Form.Label>
        <Form.Control />
      </Form.Group>
      
      
    </div>
    <div className='two-column-grid'>
      
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>property build over water</Form.Label>
      <div>
        <button className='btn-new-sty'>Yes</button>
        <button className='btn-new-sty'>NO</button>
        </div>
      </Form.Group>


 <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Elevation difference</Form.Label>
        <Form.Control />
      </Form.Group>
      
      
    </div>
    <div className='two-column-grid'>
      
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>No of Stories</Form.Label>
        <Form.Control value='45'/>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>BFD</Form.Label>
        <Form.Control value=""/>
      </Form.Group>
      
    </div>
    <div className='two-column-grid'>
      
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Tenant</Form.Label>
      <div>
        <button className='btn-new-sty'>Yes</button>
        <button className='btn-new-sty'>NO</button>
        </div>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>BFD</Form.Label>
        <Form.Control value=""/>
      </Form.Group>
      
    </div>
    <div className='two-column-grid'>
      
   
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Occupancy </Form.Label>
        <Form.Select defaultValue="Residential">
          <option value="Residential">Residential</option>
          <option>Residential1</option>
        </Form.Select>
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Occupancy Type</Form.Label>
        <Form.Select defaultValue="Condominium unit">
          <option value="condominium unit">condominium unit</option>
          
        </Form.Select>
      </Form.Group>
      
    </div>
        
        <button className='btn-new-sty' onClick={closeModaledit}>close</button>
        </Form>
        </div>
   
          
      </Modal>
      
  </Form>
  </div>
  </div>
  )
}
