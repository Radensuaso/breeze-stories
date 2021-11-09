import { Row, Col, Image, Form, FloatingLabel, Button } from "react-bootstrap";
import { useState } from "react";

export default function RegisterPage() {
  const [registerInfo, setRegisterInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="login-register-page mb-5">
      <Row className="px-3 justify-content-center">
        <Col
          xs={12}
          sm={10}
          md={8}
          lg={6}
          className="general-container login-register-fields p-5 d-flex flex-column"
        >
          <Image
            className="mb-4 align-self-center"
            src="/breezeStories.png"
            fluid
            roundedCircle
            style={{ maxHeight: "20rem", maxWidth: "20rem" }}
          />
          <h2 className="text-center mb-4">Register</h2>
          <Form>
            <FloatingLabel label="Full name">
              <Form.Control
                className="mb-2"
                size="lg"
                type="text"
                placeholder="Large text"
              />
            </FloatingLabel>
            <FloatingLabel label="Email">
              <Form.Control
                className="mb-2"
                size="lg"
                type="email"
                placeholder="Large text"
              />
            </FloatingLabel>
            <FloatingLabel label="Password">
              <Form.Control
                className="mb-2"
                size="lg"
                type="password"
                placeholder="Large text"
              />
            </FloatingLabel>
            <FloatingLabel label="Repeat password">
              <Form.Control
                className="mb-2"
                size="lg"
                type="password"
                placeholder="Large text"
              />
            </FloatingLabel>
            <div className="d-grid" style={{ maxHeight: "58px" }}>
              <Button
                className="background-gradient"
                variant="outline-dark"
                type="submit"
              >
                Register
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
