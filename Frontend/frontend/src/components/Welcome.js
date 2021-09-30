import React, { Component } from "react";

import { Card, Container } from "react-bootstrap";
import { Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <Container className="bg-light  BGI text-white  justify-content-center">
        <div className="text-danger">
          <marquee width="100%" direction="right" height="100px">
            WARNING : Please DO NOT share "Email & Password" with anyone.
          </marquee>
        </div>
        <div className="BGI justify-content-center"></div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <div className="row">
            <div className="col-sm-3">
              {" "}
              <Card className="bg-dark text-white border">
                <Card.Body>
                  <Card.Title>Already Register</Card.Title>
                  <Card.Text>
                    <div>
                      <Link to="/custlogin" className="nav-link">
                        Login Here
                      </Link>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-3 ">
              <Card className="bg-dark text-white border">
                <Card.Body>
                  <Card.Title>New User ?</Card.Title>
                  <Card.Text>
                    <div>
                      <Link
                        to="/custRegister"
                        className="nav-link text-justify"
                      >
                        Register Here
                      </Link>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <br />
          <br />
        </div>
      </Container>
    );
  }
}
export default Welcome;
