import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/p1.png";
import projImg2 from "../assets/img/p2.png";
import projImg3 from "../assets/img/p2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import nothing from "../assets/img/empty.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Management system",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "personal portfolio",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Training Ai model",
      description: "Machine and Deep learning",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore my collection of ideas brought to life through code
                    and design. From sleek front-end interfaces to full-scale
                    applications, each project reflects my journey of learning,
                    creativity, and problem-solving.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Container
                          className="d-flex justify-content-center align-items-center"
                          style={{ height: "250px" }}
                        >
                          <Row>
                            <Col>
                              <Card
                                className="text-center bg-dark text-light p-4"
                                style={{ width: "18rem", borderRadius: "8px" }}
                              >
                                {/* Adjust Image Size */}
                                <img
                                  src={nothing}
                                  alt="Empty"
                                  className="mx-auto mb-3"
                                  style={{
                                    width: "200px",
                                    height: "100px",
                                    
                                  }}
                                />
                                <Card.Text>Nothing here yet...</Card.Text>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Container
                          className="d-flex justify-content-center align-items-center"
                          style={{ height: "250px" }}
                        >
                          <Row>
                            <Col>
                              <Card
                                className="text-center bg-dark text-light p-4"
                                style={{ width: "18rem", borderRadius: "8px" }}
                              >
                                {/* Adjust Image Size */}
                                <img
                                  src={nothing}
                                  alt="Empty"
                                  className="mx-auto mb-3"
                                  style={{
                                    width: "200px",
                                    height: "100px",
                                    
                                  }}
                                />
                                <Card.Text>Nothing here yet...</Card.Text>
                              </Card>
                            </Col>
                          </Row>
                        </Container>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
