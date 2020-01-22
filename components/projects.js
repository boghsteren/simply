import React from "react";
import {
  Header,
  Container,
  Icon,
  List,
  Divider,
  Segment
} from "semantic-ui-react";

const ProjectListItem = ({ icon, description }) => (
  <List.Item>
    <List.Icon>
      <Icon name={icon} />
    </List.Icon>
    <List.Content>{description}</List.Content>
  </List.Item>
);

const projects = [
  {
    year: "2019",
    items: [
      {
        icon: "code",
        description: "Shopify multistore management portal for byBiehl A/S"
      }
    ]
  },
  {
    year: "2018",
    items: [
      {
        icon: "code",
        description: "Events marketplace for Goodwings"
      },
      {
        icon: "idea",
        description: "Business proces analysis for Cultours"
      },
      {
        icon: "code",
        description: "Case management system for Barn i Trivsel"
      },
      {
        icon: "idea",
        description: "Corporate Digital and Technical Strategy for TV 2 A/S"
      },
      {
        icon: "idea",
        description: "Innovation Workshop for Wall Street Journal / Prehype"
      },
      {
        icon: "idea",
        description: "Platform architecture advisory for Locomotion"
      },
      {
        icon: "code",
        description:
          "Website performance and SEO optimisation (Wordpress) for Plantepusherne.dk"
      },
      {
        icon: "idea",
        description: "Business tooling and IT strategy for Balder Travel"
      }
    ]
  },
  {
    year: "2017",
    items: [
      {
        icon: "code",
        description:
          "Google Tag Manager, Analytics, Data Studio, Adwords and Facebook marketing setup and training for Annex Brewery"
      },
      {
        icon: "code",
        description:
          "Google Tag Manager, Analytics and Data Studio implementation for Parkable"
      },
      {
        icon: "idea",
        description: "Strategic analysis and recommendations for 9 Spokes"
      },
      {
        icon: "code",
        description: "Prestashop implementation for byBiehl"
      },
      {
        icon: "code",
        description:
          "Google Tag Manager, Analytics and Data Studio implementation for Campable"
      }
    ]
  },
  {
    year: "2015/2016",
    items: [
      {
        icon: "idea",
        description: "Strategic advisory for Campable/Parkable"
      },
      {
        icon: "idea",
        description: "Scrum training and Jira implementation for Parkable"
      },
      {
        icon: "idea",
        description: "Data analysis (Qlik) for Callaghan Innovation"
      },
      {
        icon: "code",
        description:
          "Google Tag Manager, Analytics and Data Studio implementation for The Spinoff"
      },
      {
        icon: "code",
        description:
          "Adwords, Social marketing and SEO optimisation for Platinum / Loaded"
      },
      {
        icon: "code",
        description: "SEO review and optimisation for Rankers Reviews"
      },
      {
        icon: "idea",
        description: "Mobile app strategy for Rodd & Gunn"
      }
    ]
  }
];

export default () => (
  <div style={{ backgroundColor: "#BCD6F2" }}>
    <Container style={{ paddingBottom: "50px", paddingTop: "50px" }}>
      <Header textAlign="center" size="huge">
        PROJECTS & CONSULTANCY WORK
      </Header>
      <Divider hidden></Divider>
      <Segment raised padded>
        {projects.map(project => (
          <div key={project.year}>
            <Header>{project.year}</Header>
            <List>
              {project.items.map(item => (
                <ProjectListItem
                  {...item}
                  key={item.description}
                ></ProjectListItem>
              ))}
            </List>
            <Divider />
          </div>
        ))}
      </Segment>
    </Container>
  </div>
);
