import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

import Row from 'react-bootstrap/Row';


export default function SixNav1() {
    const today = new Date();
    const numberOfDaysToAdd = 3;
    const date = today.setDate(today.getDate() + numberOfDaysToAdd);
    const defaultValue = new Date(date).toISOString().split('T')[0]
    return (
        <div>
            <div className='center-align-form' >
                <Form >
                    <div className=" two-colum-grid" >


                        <Form.Group as={Col} controlId="formdate">
                        <div className='btn-agency'>
                            <button className='def' disabled>VIEW COMPARE QUOTE</button>
                        </div>
                        </Form.Group>




                    </div>
                    <br></br>
                    <br></br>
                    <div className='two-column-grid'>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Quote Contract</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Product</Form.Label>
                            <Form.Control />
                        </Form.Group>



                    </div>
                    <div className='three-column-grid'>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Inspection Fee</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <table></table>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Location Premium</Form.Label>
                            <Form.Control />
                        </Form.Group>



                    </div>
                    <div className='for-colum-grid'>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>A&A Limit</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Deducible</Form.Label>
                            <Form.Control />
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Rate</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label> Premium</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Content Limit</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Deducible</Form.Label>
                            <Form.Control />
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Rate</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label> Premium</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>ALE Limit</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>ALE Deducible</Form.Label>
                            <Form.Control />
                        </Form.Group>


                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Rate</Form.Label>
                            <Form.Control />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label> Premium</Form.Label>
                            <Form.Control />
                        </Form.Group>







                    </div>

                    <div className='two-colum-grid'>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label> Premium</Form.Label>
                            <Form.Control />
                        </Form.Group>

                    </div>
                    <div className='two-colum-grid'>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label> Policy Fees</Form.Label>
                            <Form.Control />
                        </Form.Group>

                    </div>
                    <div className='two-colum-grid'>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Broker Fees</Form.Label>
                            <Form.Control />
                        </Form.Group>

                    </div>
                    <div className='two-colum-grid'>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Inspector Fees</Form.Label>
                            <Form.Control />
                        </Form.Group>

                    </div>
                    <div className='two-colum-grid'>
                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Sum Total</Form.Label>
                            <Form.Control />
                        </Form.Group>

                    </div>
                    <br></br>

                    <div className='three-column-grid'>
                    <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Surplus Lines Tax</Form.Label>
                            
                        </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        
                        <Form.Control />
                    </Form.Group>
                      
                        <Form.Group as={Col} controlId="formGridZip">
                            
                            <Form.Control />
                        </Form.Group>

                    </div>
                    <div className='three-column-grid'>
                    <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Status surcharge</Form.Label>
                            
                        </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        
                        <Form.Control />
                    </Form.Group>
                      
                        <Form.Group as={Col} controlId="formGridZip">
                            
                            <Form.Control />
                        </Form.Group>

                    </div>
                    <div className='three-column-grid'>
                    <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Municipal Tax</Form.Label>
                            
                        </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        
                        <Form.Control />
                    </Form.Group>
                      
                        <Form.Group as={Col} controlId="formGridZip">
                            
                            <Form.Control />
                        </Form.Group>

                    </div>
                    <div className='three-column-grid'>
                    <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Total premium</Form.Label>
                            
                        </Form.Group>

                    {/* <Form.Group as={Col} controlId="formGridZip">
                        
                        <Form.Control />
                    </Form.Group> */}
                      
                        <Form.Group as={Col} controlId="formGridZip">
                            
                            <Form.Control />
                        </Form.Group>

                    </div>
                    <div className='three-column-grid'>
                    <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Commission</Form.Label>
                            
                        </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        
                        <Form.Control />
                    </Form.Group>
                      
                        <Form.Group as={Col} controlId="formGridZip">
                            
                            <Form.Control />
                        </Form.Group>

                    </div>
                    <div className='three-column-grid'>
                    <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Net premium</Form.Label>
                            
                        </Form.Group>

                    {/* <Form.Group as={Col} controlId="formGridZip">
                        
                        <Form.Control />
                    </Form.Group> */}
                      
                        <Form.Group as={Col} controlId="formGridZip">
                            
                            <Form.Control />
                        </Form.Group>

                    </div>
               <div className='btn-agency'>

                    
                    <Link to="/pagefive">
                    <Button className='btn-new-sty'>
                    BACK
                    </Button>
                        
                   
                    </Link>
                    <Link to="/">
                    <Button className='btn-new-sty'>
                    Home
                    </Button>
                    </Link>
                  
                    <Button className='btn-new-sty'>CONTINUE</Button>
                   
                    <Button className='btn-new-sty'>MORE ACTIONS</Button>
                </div>



  
  
  

                    
  </Form>
  </div>
            </div>
  )
}
