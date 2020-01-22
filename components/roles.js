import React from "react";
import {
  Container,
  Segment,
  Item,
  Divider,
  Button,
  Header
} from "semantic-ui-react";

const RoleItem = ({ title, company, period, description, logo }) => (
  <Item>
    <Item.Image src={logo} size="small"></Item.Image>
    <Item.Content>
      <Item.Header>{title}</Item.Header>
      <Item.Meta>{company}</Item.Meta>
      <Item.Meta>{period}</Item.Meta>
      <Item.Description>{description}</Item.Description>
      <Divider></Divider>
    </Item.Content>
  </Item>
);

const roles = [
  {
    title: "Head of Digital Product Management",
    company: "TV 2",
    period: "Jan 2019 – Current",
    description:
      "I manage the Digital Product Management team at TV 2, crafting and executing our product strategy across TV 2 PLAY, tv2.dk, mobile apps and all other digital platforms and initiatives. The six product managers under my purview interface with the rest of the organisation to build roadmaps and priorities for the development teams in our scaled agile setup.",
    logo: "/static/tv2.jpg"
  },
  {
    title: "Chief Product Officer",
    company: "Fromtu",
    period: "May 2017 – Jan 2018",
    description:
      "I served as the CPO for Fromtu, a digital trading platform setup by A.P. Møller Mærsk as a startup. I organised and hired the product delivery team of a product manager, designer, digital marketing expert, and three developers, while working with the CEO/CCO trying to establish market fit and the potential customer value. During my time at Fromtu, we built an effective agile delivery team and rapidly prototyped multiple SaaS product concepts, but ultimately failed to find market fit.",
    logo: "/static/fromtu-final.jpg"
  },
  {
    title: "Head of Product",
    company: "9 Spokes",
    period: "Jan 2016 – Jan 2017",
    description:
      "I joined 9 Spokes as it was scaling from early stage fintech startup with a couple of developers to more than 30 developers across data, integration and frontend. I recruited and managed a team of four product managers / business analysts who owned roadmaps and acted as product owners inside the development teams. During my time at 9 Spokes, we delivered on the aggressive timeline for implementation with Barclays UK, while also replatforming to a productized, multi tenant SaaS setup.",
    logo: "/static/9s-final.jpg"
  },
  {
    title: "Head of Product",
    company: "Lightbox",
    period: "Jan 2014 – Nov 2015",
    description:
      "I relocated to New Zealand to join Lightbox, a video streaming startup funded by Telecom NZ as an early employee and was a key part of the initial platform build, post launch clean up and scaling of the company. By the end of my tenure I managed a team of six, spanning across product managers, designers and data analysts steering the product development for both the internal scrum team and the external vendors. During my time at Lightbox we launched and hit our target of 70k customers.",
    logo: "/static/lb.png"
  },
  {
    title: "Head of On Demand / OTT",
    company: "YouSee",
    period: "Apr 2011 – Nov 2013",
    description:
      "I built a team of three product managers from scratch to manage the online and interactive media services offered by YouSee, including web-tv, VOD, on demand music and digital set top boxes. My team owned the product roadmaps and coordinated efforts between development teams and the rest of the organisation during the transition from traditional IT delivery towards agile practices. During my time at YouSee I helped double user adoption of the bundled media services my team managed.",
    logo: "/static/yousee-final.jpg"
  }
];

export default () => (
  <div style={{ backgroundColor: "#FCD744" }}>
    <Container style={{ paddingBottom: "50px", paddingTop: "50px" }}>
      <Header textAlign="center" size="huge">
        FORMAL ROLES
      </Header>
      <Divider hidden></Divider>
      <Segment raised padded>
        <Item.Group>
          {roles.map(role => (
            <RoleItem {...role} key={role.period}></RoleItem>
          ))}
        </Item.Group>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="big"
            basic
            as="a"
            href="https://www.linkedin.com/in/jakobbs/"
          >
            Find me on LinkedIn
          </Button>
        </div>
      </Segment>
    </Container>
  </div>
);
