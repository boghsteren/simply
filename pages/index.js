import React, { useState } from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import "../style.css";
import {
  Header,
  Container,
  Divider,
  Transition,
  Visibility,
  Modal,
  Image,
  Responsive
} from "semantic-ui-react";
import Code from "../components/code";
import Projects from "../components/projects";
import Roles from "../components/roles";
import Privacy from "../components/privacy";
import Contact from "../components/contact";

export default () => {
  const [currentSection, updateCurrentSection] = useState("top");
  const width = () => (typeof window !== undefined ? 1000 : window.innerWidth);
  return (
    <div>
      <Head
        title="Home - Simply Digital"
        description="I am a seasoned digital generalist with a long track record."
        url="http://www.simply-digital.dk/"
      />
      <Nav currentSection={currentSection} />
      <Transition animation={"fade"} transitionOnMount duration={1000}>
        <div id="top">
          <Visibility
            once={false}
            onTopVisible={() => updateCurrentSection("top")}
          ></Visibility>

          <div>
            <Responsive getWidth={width} minWidth="600">
              <Image className="cover-image"></Image>
              <Container text>
                <div className="text-box">
                  <Header size="huge">
                    Digital strategy, business and development
                  </Header>
                </div>
              </Container>
            </Responsive>
            <Responsive getWidth={width} maxWidth="600">
              <Image className="cover-image-mobile"></Image>
              <Container text>
                <div className="text-box-mobile">
                  <Header size="huge">
                    Digital strategy, business and development
                  </Header>
                </div>
              </Container>
            </Responsive>
          </div>
          <Divider fitted />
          <div id="roles">
            <Visibility
              once={false}
              onOnScreen={() => updateCurrentSection("roles")}
            >
              <Roles></Roles>
            </Visibility>
          </div>
          <div id="projects">
            <Visibility
              once={false}
              onTopVisible={() => updateCurrentSection("projects")}
            >
              <Projects></Projects>
            </Visibility>
          </div>
          <div id="code">
            <Visibility
              once={false}
              onTopVisible={() => updateCurrentSection("code")}
            >
              <Code></Code>
            </Visibility>
          </div>
          <div id="contact">
            <Visibility
              once={false}
              onTopVisible={() => updateCurrentSection("contact")}
            >
              <Contact></Contact>
            </Visibility>
          </div>
          <div
            style={{
              margin: "20px",
              display: "flex",
              justifyContent: "space-around"
            }}
          >
            <div>
              <Modal
                closeIcon
                trigger={
                  <Header size="small" as="a" style={{ cursor: "pointer" }}>
                    Privacy
                  </Header>
                }
              >
                <Modal.Header>Privacy Policy</Modal.Header>
                <Modal.Content>
                  <Privacy></Privacy>
                </Modal.Content>
              </Modal>
            </div>
            <div>
              <Header size="small">Simply Digital (CVR 38465635)</Header>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};
