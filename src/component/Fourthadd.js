import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function Fourthadd() {
  return (
    <div className="center-align-form">
      <Form>
        <div className="three-column-grid agncy-sty-rev1">
          <Form.Group as={Col} controlId="formGridZip">
            <h3 className="h3-sty"> Sapiens Clearance</h3>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <br></br>
            <h6> Customer ID:127646</h6>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <br></br>
            {/* <span style={{ paddingLeft: "100px" }}> */}
            <button className="defbut">Edit</button>
            {/* </span> */}
          </Form.Group>
        </div>

        <div className="two-column-grid agncy-sty-rev1">
          <Form.Group as={Col} controlId="formGridZip">
            <div></div>
            <lable>Legal Entity Name </lable>
            <Form.Control type="text" placeholder="Syria" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <br></br>
            {/* <span style={{ paddingLeft: "100px" }}> */}
            <button className="defbut">Search</button>
            {/* </span> */}
          </Form.Group>
        </div>

        <div>
          <div>
            <label>Mailing Address</label>
            {/* <br></br> */}

            <Form.Control type="text" placeholder="207 jeff valley KY,41144" />
          </div>
          <h3 className="h3-sty">Submission Clearance</h3>
          <div className="three-column-grid agncy-sty-rev1">
            <Form.Group as={Col} controlId="formGridState">
                <br>
                </br>
              <label>Insured Name</label>
              <Form.Control type="text" placeholder="Syria" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <br></br>
              <h6> Legan Entity Name(Secondary)</h6>
              <Form.Control type="text" placeholder="Syria" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <br></br>
              <br></br>
              {/* <span style={{ paddingLeft: "100px" }}> */}
              <button className="defbut">Search</button>
              {/* </span> */}
            </Form.Group>
          </div>
        </div>

      

      
        <h1></h1>
        <div>
          <label>Sharepoint Clearance</label>
          <span style={{ paddingLeft: "20px" }}>
            <Button>YES</Button>
          </span>
          <span style={{ paddingLeft: "20px" }}>
            <Button>NO</Button>
          </span>
        </div>

        <h5>Insured Information</h5>

        {/*  */}
      </Form>
    </div>
  );
}
