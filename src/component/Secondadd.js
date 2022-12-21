import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Secondadd() {
  return (
    <div className="center-align-form">
      <h3 className="h3-sty"> Property Insured</h3>

      <Form>
        <div className="for-colum-grid">
          <Form.Group as={Col} controlId="formdate">
            <Form.Label>Occupancy</Form.Label>
            <Form.Control placeholder="Residential" />
          </Form.Group>

          <Form.Group as={Col} controlId="formdate">
            <div className="btn-agency">
              <Form.Label>Tenant</Form.Label>
              <div className="btn-outer">
                <Button type="submit">YES</Button>
                <Button type="submit">NO</Button>
              </div>
            </div>
          </Form.Group>

          <Form.Group as={Col} controlId="formdate">
            <Form.Label>Primary Flood Carrier</Form.Label>
            <Form.Control />
          </Form.Group>
        </div>
        <div className="two-column-grid">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Occupancy Type:</Form.Label>
            <Form.Select>
              <option value="default" disabled hidden>
                Select
              </option>
              <option value="">Type A</option>
              <option value="">type B</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Homeowner Carrier</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </div>

        <div className="btn-agency">
          <div>
            <Form.Label>Foundation</Form.Label>
            <span style={{ paddingLeft: "20px" }}>
              <Button>Slab</Button>
            </span>
            <span style={{ paddingLeft: "20px" }}>
              <Button>Basement</Button>
            </span>
            <span style={{ paddingLeft: "20px" }}>
              <Button>Enclosure</Button>
            </span>
            <span style={{ paddingLeft: "20px" }}>
              <Button>pillings</Button>
            </span>{" "}
            <span style={{ paddingLeft: "20px" }}>
              <Button>Crawlspace</Button>
            </span>
          </div>
        </div>

        <div className="for-colum-grid">
          {/* <span style={{ paddingLeft: "20px" }}> */}
          <Form.Group as={Col} controlId="formdate">
            <lable>Flood Zone</lable>

            <Form.Select>
              <option value="default" disabled hidden></option>
              <option value="">Flood Zone A</option>
              <option value="">Flood Zone B</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formdate">
            <lable>BFE</lable>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formdate">
            <lable>LFE</lable>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col} controlId="formdate">
            <lable>Elevation Diffrence</lable>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formdate">
            <lable>HAG</lable>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col} controlId="formdate">
            <lable>LAG</lable>
            <Form.Control type="text" />
          </Form.Group>
          {/* </span> */}
          {/* <span style={{ paddingLeft: "20px" }}> */}
          <Form.Group as={Col} controlId="formdate">
            <lable>BFD</lable>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col} controlId="formdate">
            <lable>Year Build</lable>
            <Form.Control type="text" placeholder="YYYY" />
          </Form.Group>
          {/* </span> */}
        </div>
        <div>
          {/* <span style={{ paddingLeft: "20px" }}> */}
          <lable>Replacement Cost </lable>
          <Form.Control type="text" />

          <br></br>

          <div className="btn-agency">
            <Form.Label>Property Build over Water</Form.Label>
            {/* <span style={{ paddingLeft: "20px" }}> */}
            {/* <br></br> */}
            <Button>YES</Button>
            {/* </span> */}
            {/* <span style={{ paddingLeft: "20px" }}> */}
            <Button>NO</Button>
            {/* </span> */}

            {/* <br></br> */}
          </div>
          <lable>Number of Stories</lable>
          <Form.Control type="text" />
          {/* </span> */}
          <br></br>
          <div className="btn-agency">
            <Form.Label>
              <h5>Loss Details</h5>Any Prior Losses
            </Form.Label>
            {/* <span style={{ paddingLeft: "20px" }}> */}
            <Button>YES</Button>
            {/* </span> */}
            {/* <span style={{ paddingLeft: "20px" }}> */}
            <Button>NO</Button>
            {/* </span> */}

            <br></br>
          </div>
          <div className="two-column-grid">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>
                <h3>Competitive Data</h3>
                Competitive Premium
                {/* <Form.Control /> */}
              </Form.Label>

              {/* <span style={{ paddingLeft: "20px" }}> */}
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <br></br>
              <br></br>

              <Form.Label>Carrier</Form.Label>

              {/* <Form.Control /> */}
              <Form.Control />
            </Form.Group>
          </div>
          {/* </Form.Group> */}



          
          <div className='three-column-grid agncy-sty-rev1'>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Building limits</Form.Label>

              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Content limit</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Effective Date</Form.Label>

              <Form.Control type="date" />
              <br>
              </br>

              {/* </span> */}
            </Form.Group>
          </div>


          <h3  className='agncy-sty-revrs'>Requested Coverage and Deducttibles</h3>
    <div className='two-column-grid'>
      
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Building limit</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Build Deductible</Form.Label>
        <Form.Control />
      </Form.Group>
      
    </div>


    <div className='two-column-grid'>
      
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>content limit</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>content Deductible</Form.Label>
        {/* <Form.Label>Email</Form.Label> */}
        <Form.Control />
      </Form.Group>
      
    </div>




    <div className='two-column-grid'>
      
      <Form.Group as={Col} controlId="formGridState">
      <Form.Label>ALE limit</Form.Label>
        <Form.Control />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>ALE Deductible</Form.Label>
        {/* <Form.Label>Email</Form.Label> */}
        <Form.Control />
      </Form.Group>
      
    </div>













         
    <div className='btn-agency'>
          {/* <Button>SAVE</Button> */}
          <Link to="/Fourthadd">
          <Button>CONTINUE</Button>
          </Link>
          <Button>MORE ACTIONS</Button>
          <Button>BACK</Button>
          <Button>HOME</Button>
          {/* </span> */}
          </div>
        </div>
      </Form>
    </div>
  );
}
