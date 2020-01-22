import React from "react";
import { Container, Segment, Header, Item, Label } from "semantic-ui-react";

const CodeItem = ({ screenshot, project, description, url, tags }) => (
  <Item>
    <Item.Image size="medium" src={screenshot}></Item.Image>
    <Item.Content>
      <Item.Header>{project}</Item.Header>
      <Item.Meta>{url}</Item.Meta>
      <Item.Description>{description}</Item.Description>
      <Item.Meta>
        <Label.Group>
          {tags.map(tag => (
            <Label key={tag}>{tag}</Label>
          ))}
        </Label.Group>
      </Item.Meta>
    </Item.Content>
  </Item>
);

const builds = [
  {
    screenshot: "../static/bit.png",
    project: "Case management portal",
    description:
      "Barn i Trivsel Portalen is a platform for administrators and advisors at Barn i Trivsel to manage customers, clients, cases and sessions. The solution includes backend APIs and a front end web app.",
    url: "Private app",
    tags: [
      "React.js",
      "Redux",
      "React Router",
      "Semantic UI",
      "Recharts.js",
      "Azure",
      "CosmosDB",
      "Node.js",
      "Express",
      "Auth0",
      "Contentful",
      "Sendgrid",
      "Google Tag Manager",
      "Google Analytics"
    ]
  },
  {
    screenshot: "../static/bybiehl-backend.png",
    project: "Backend for Shopify multistore setup",
    description:
      "The byBiehl backend is used to manage products across multiple different Shopify stores.",
    url: "Private app",
    tags: [
      "React.js",
      "Redux",
      "React Router",
      "Semantic UI",
      "Heroku",
      "Node.js",
      "Express",
      "Google Tag Manager",
      "Google Analytics"
    ]
  },
  {
    screenshot: "../static/fanbefaling.png",
    project: "Podcast review and recommendation site",
    description:
      "Fanbefaling.dk collects and presents my favorite podcasts. It is a small, but excellent collection, put out there to inspire others who also love podcasts.",
    url: "www.fanbefaling.dk",
    tags: [
      "React.js",
      "Next.js",
      "Redux",
      "Semantic UI",
      "Heroku",
      "Node.js",
      "Express",
      "Contentful",
      "Google Tag Manager",
      "Google Analytics"
    ]
  },
  {
    screenshot: "../static/bybiehl-shopify.png",
    project: "Shopify multistore web shop",
    description:
      "Jewelry company byBiehl sells their products across six different markets using a multi store Shopify setup, using the full compliment of digital marketing tools. I setup, configured and customised the entire setup based on their requirements.",
    url: "www.bybiehl.dk",
    tags: [
      "Shopify",
      "jQuery",
      "Liquid",
      "Handlebars",
      "Google Shopping",
      "Adwords",
      "Facebook marketing",
      "Google Tag Manager",
      "Google Analytics"
    ]
  },
  {
    screenshot: "../static/episodeFriis.png",
    project: "TV show review and recommendation site",
    description:
      "episodeFriis.dk is curated by Christian, who is a massive TV-show afficionado and provides blog posts and recommendations based around the fifty best TV-shows he's watched.",
    url: "www.episode-friis.dk",
    tags: [
      "React.js",
      "Next.js",
      "Redux",
      "Semantic UI",
      "Heroku",
      "Node.js",
      "Express",
      "Contentful",
      "Google Tag Manager",
      "Google Analytics"
    ]
  },
  {
    screenshot: "../static/myjoro.png",
    project: "Job adverts and application tracking tool",
    description:
      "MyJoRo lets users monitor and manage job openings found online in a single place, saving postings, tracking deadlines, saving applications and keeping track of the status of jobs.",
    url: "www.myjoro.com",
    tags: [
      "React.js",
      "React Router",
      "Redux",
      "Material UI",
      "Firebase",
      "Heroku",
      "Node.js",
      "Express",
      "Mailgun",
      "Google Tag Manager",
      "Google Analytics"
    ]
  },
  {
    screenshot: "../static/bybiehl.png",
    project: "Prestashop Webshop",
    description:
      "Jewelry company byBiehl initially sold their products across six different markets using a multi store Prestashop setup, using the full compliment of digital marketing tools. I setup, configured and customised the entire setup based on their requirements.",
    url: "Offline",
    tags: [
      "Prestashop",
      "MySQL",
      "PHP",
      "Apache",
      "Google Cloud",
      "Google Shopping",
      "Adwords",
      "Facebook marketing",
      "Google Analytics"
    ]
  },
  {
    screenshot: "../static/simply.png",
    project: "Company website",
    description:
      "The Simply Digital site provides a quick overview of who I am and what I do.",
    url: "www.simply-digital.dk",
    tags: [
      "React.js",
      "Next.js",
      "Semantic UI",
      "Heroku",
      "Node.js",
      "Express",
      "Google Tag Manager",
      "Google Analytics"
    ]
  }
];

export default () => (
  <div style={{ backgroundColor: "#FCD744" }}>
    <Container
      style={{
        paddingBottom: "50px",
        paddingTop: "50px"
      }}
    >
      <Header textAlign="center" size="huge">
        CODE & DEVELOPMENT
      </Header>
      <Segment raised padded>
        <Item.Group divided>
          {builds.map(build => (
            <CodeItem {...build} key={build.screenshot}></CodeItem>
          ))}
        </Item.Group>
      </Segment>
    </Container>
  </div>
);
