/*=================================================================================================
                                    Alejandro Jimenez Brundin
                                    brundindev@gmail.com
                                    https://brundindev.vercel.app
=================================================================================================*/
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import impulsedata_example from "../../Assets/Projects/impulsedata_example.png";
import passwd_example from "../../Assets/Projects/passwd_example.png";
import plataformacursosonline_example from "../../Assets/Projects/plataformacursosonline_example.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong> Recientes
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passwd_example}
              isBlog={false}
              title="Passwd"
              description="Gestor de contraseñas seguro desarrollado con tecnologías web modernas. Permite almacenar, generar y gestionar contraseñas de forma segura mediante encriptación avanzada. Incluye funcionalidades como autenticación de doble factor y sincronización entre dispositivos."
              ghLink="https://github.com/brundindev/passwd"
              demoLink="https://passwd.brundindev.es"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={impulsedata_example}
              isBlog={false}
              title="ImpulseData"
              description="Plataforma de análisis de datos y visualización para empresas desarrollada con React y Node.js. Facilita la transformación de datos complejos en insights accionables mediante dashboards interactivos y reportes personalizados, mejorando la toma de decisiones."
              ghLink="https://github.com/brundindev/ImpulseData"
              demoLink="https://impulsedata.brundindev.es"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plataformacursosonline_example}
              isBlog={false}
              title="Plataforma Cursos Online"
              description="Plataforma integral de gestión de cursos en línea desarrollada con Spring Boot y Thymeleaf. Permite la administración de usuarios con roles diferenciados, edición de perfiles y control de acceso basado en autorizaciones. Incorpora autenticación segura con Spring Security y almacenamiento de datos mediante JPA e H2."
              ghLink="https://github.com/brundindev/plataformacursosonline"
              demoLink="https://cursos.brundindev.es"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
/*=================================================================================================
                                    Alejandro Jimenez Brundin
                                    brundindev@gmail.com
                                    https://brundindev.vercel.app
=================================================================================================*/
