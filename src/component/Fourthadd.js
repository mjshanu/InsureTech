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

        <div>
          {/* <label>
            <h3>Submission Clearance</h3>Insured Name
          </label> */}
          {/* <br></br>
          <span style={{ paddingLeft: "20px" }}>
            <input type="text" placeholder="Syria" />
          </span> */}
        </div>

        <div>
          {/* <label>Legal Entity Name(Secondary)</label>
          <input type="text" placeholder="207 jeff valley KY,41144" />
          <Button>Search</Button>

          <label>Propery</label>
          <input type="text" placeholder="207 jeff valley KY,41144" />
          <br></br>
          <br></br> */}

          {/* <label>County</label>
          <input type="text" placeholder="Greenup County" /> */}
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

        <div>
          <span style={{ paddingLeft: "20px" }}>
            <lable>Flood Zone</lable>

            <select>
              <option value="default" disabled hidden></option>
              <option value="">Flood Zone A</option>
              <option value="">Flood Zone B</option>
            </select>

            <input type="text" />
          </span>
          <span style={{ paddingLeft: "20px" }}>
            <lable>BFE</lable>
            <input type="text" />

            <lable>LFE</lable>
            <input type="text" />
          </span>

          <span style={{ paddingLeft: "20px" }}>
            <lable>Elevation Diffrence</lable>
            <input type="text" />
            {/* </span> */}
            <br></br>
            {/* <span style={{paddingLeft: '20px'}}> */}
            <lable>HAG</lable>
            <input type="text" />

            <lable>LAG</lable>
            <input type="text" />
          </span>
          <span style={{ paddingLeft: "20px" }}>
            <lable>BFD</lable>
            <input type="text" />

            <lable>Year Build</lable>
            <input type="text" />
          </span>
        </div>
        <div>
          <span style={{ paddingLeft: "20px" }}>
            <lable>Replacement Cost</lable>
            <input type="text" />

            <br></br>
            <label>Property Build over Water</label>
            <span style={{ paddingLeft: "20px" }}>
              <br></br>
              <Button>YES</Button>
            </span>
            <span style={{ paddingLeft: "20px" }}>
              <Button>NO</Button>
            </span>

            <br></br>

            <lable>Number of Stories</lable>
            <input type="text" />
          </span>
          <br></br>

          <label>
            <h5>Loss Details</h5>Any Prior Losses
          </label>
          <span style={{ paddingLeft: "20px" }}>
            <Button>YES</Button>
          </span>
          <span style={{ paddingLeft: "20px" }}>
            <Button>NO</Button>
          </span>

          <br></br>

          <label>
            <h3>Competitive Data</h3>Competitive Premium
          </label>
          <span style={{ paddingLeft: "20px" }}>
            <input type="text" />

            <br></br>
            <label>Carrier</label>

            <input type="text" />
          </span>

          <span style={{ paddingLeft: "20px" }}>
            <label>Contetnt limit</label>
            <input type="text" />

            <br></br>
            <label>Building limits</label>

            <input type="text" />
            <br></br>

            <label>Effective Data</label>

            <input type="text" />
          </span>

          <br></br>

          <label>
            <h3>Requested Coverage and Deducttibles</h3>builind limit
          </label>
          <span style={{ paddingLeft: "20px" }}>
            <input type="text" />

            <br></br>
            <label>Build Deductible</label>

            <input type="text" />

            <br></br>
            <label>content limit</label>

            <input type="text" />

            <label>content Deductible</label>

            <input type="text" />

            <br></br>
            <label>ALE Limit</label>

            <input type="text" />

            <br></br>
            <label>ALE Deductible</label>

            <input type="text" />
            <br></br>
            <Button>SAVE</Button>
            <Button>CONTINUE</Button>
            <Button>MORE ACTIONS</Button>
          </span>
        </div>
      </Form>
    </div>
  );
}
