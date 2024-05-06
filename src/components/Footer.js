import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer
      className="footer text-light py-4"
      style={{
        background: "linear-gradient(to right, #1a1a1a, #333333)",
        boxShadow: "0px -4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col>
            <h3 className="font-weight-bold" style={{ fontSize: "24px" }}>
              TicketHub
            </h3>

            <p className="mt-3">
              Discover and book your favorite music events!
            </p>
          </Col>
          <Col className="text-center">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fa fa-envelope me-2"></i> contact@tickethub.com
              </li>
              <li>
                <i className="fa fa-phone me-2"></i> 678-456-7890
              </li>
            </ul>
          </Col>
          <Col className="text-end">
            <Button variant="light" className="me-3">
              <i className="fa fa-facebook-f"></i>
            </Button>
            <Button variant="light" className="me-3">
              <i className="fa fa-twitter"></i>
            </Button>
            <Button variant="light">
              <i className="fa fa-instagram"></i>
            </Button>
          </Col>
        </Row>
        <hr style={{ borderTop: "1px solid #555" }} />
        <Row>
          <Col className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Brandon Duong All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
