/*=================================================================================================
                                    Alejandro Jimenez Brundin
                                    brundindev@gmail.com
                                    https://brundindev.vercel.app
=================================================================================================*/
import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMacos,
  SiVuedotjs,
} from "react-icons/si";
import {
  DiJava,
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs />
      </Col>
    </Row>
  );
}

export default Toolstack;
/*=================================================================================================
                                    Alejandro Jimenez Brundin
                                    brundindev@gmail.com
                                    https://brundindev.vercel.app
=================================================================================================*/
