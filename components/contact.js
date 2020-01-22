import React from "react";
import { Header, Container, Divider, Segment } from "semantic-ui-react";

export default () => (
  <div className="section" style={{ backgroundColor: "#BCD6F2" }}>
    <Container style={{ paddingTop: "20%" }}>
      <Header textAlign="center" size="huge">
        GET IN TOUCH
      </Header>
      <Divider hidden></Divider>
      <Header textAlign="center">jakob@simply-digital.dk</Header>
    </Container>
  </div>
);
