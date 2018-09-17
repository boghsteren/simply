import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import {
  Header,
  Container,
  Card,
  Transition,
  Divider,
  Image,
  List
} from "semantic-ui-react";

export default () =>
  <div>
    <Head
      title="Code - Simply Digital"
      description="I dabble in code. Here is a collection of stuff I have built"
      url="http://www.simply-digital.dk/code"
      ogImage="../static/code.png"
    />
    <Nav />
    <Transition animation={"fade"} transitionOnMount duration={1000}>
      <Container style={{ marginTop: "50px" }}>
        <Header size={"huge"} textAlign="center">
          Websites I have built
        </Header>
        <Card.Group itemsPerRow={2} stackable>
          <Card fluid color={"yellow"}>
            <Image src="../static/bit.png" />
            <Card.Content>
              <Card.Header content={"Barn i Trivsel Portalen"} />
              <Card.Description>
                Barn i Trivsel Portalen is a platform for administrators and
                advisors at Barn i Trivsel to manage customers, clients, cases
                and sessions. The solution includes backend APIs and a front end
                web app.
              </Card.Description>
              <Divider />
              <Card.Description>
                Admins can open and close cases, assign them to advisors, check
                their status and see the available capacity across the team.
                Advisors can manage their cases, schedule sessions, record notes
                and email them out to clients.{" "}
              </Card.Description>
              <Divider />
              <Card.Meta>
                <List bulleted>
                  <List.Item>
                    The app was built using <b>React.js</b>
                  </List.Item>
                  <List.Item>
                    The frontend UI was created with the{" "}
                    <b>Semantic UI for React</b>, including transitions and
                    responsive views
                  </List.Item>
                  <List.Item>
                    Graphs and charts were done using <b>Recharts.js</b>{" "}
                  </List.Item>
                  <List.Item>
                    The app is served via a <b>Node.js Express</b> server
                  </List.Item>
                  <List.Item>
                    Authentication (including role based access controls for
                    both UI and APIs) was done using <b>AUTH0</b>
                  </List.Item>
                  <List.Item>
                    The data is stored in a <b>MongoDB</b> instance, using{" "}
                    <b>Mongoose</b> as the interface
                  </List.Item>
                  <List.Item>
                    Copy and images are stored in <b>Contentful</b> for ease of
                    updating
                  </List.Item>
                  <List.Item>
                    The entire thing is hosted on <b>Heroku</b>
                  </List.Item>
                  <List.Item>
                    The app is tracked using <b>Google Tag Manager</b>
                  </List.Item>
                </List>
              </Card.Meta>
            </Card.Content>
          </Card>
          <Card fluid color={"blue"}>
            <a href="http://www.fanbefaling.dk">
              <Image src="../static/fanbefaling.png" />
            </a>
            <Card.Content>
              <Card.Header content={"Fanbefaling"} />
              <Card.Description>
                Fanbefaling.dk collects and presents my favorite podcasts. It is
                a small, but excellent collection, put out there to inspire
                others who also love podcasts.
              </Card.Description>
              <Divider />
              <Card.Description>
                Users can see my current faves, find podcasts by genre or by
                broadcaster.
              </Card.Description>
              <Divider />
              <Card.Meta>
                <List bulleted>
                  <List.Item>
                    The app was built using <b>React.js</b>
                  </List.Item>
                  <List.Item>
                    It uses the <b>Next.js</b> framework for server side
                    rendering, routing and header management.
                  </List.Item>
                  <List.Item>
                    The UI was created with the <b>Semantic UI for React</b>,
                    including transitions and responsive views
                  </List.Item>
                  <List.Item>
                    The app is served via a <b>Node.js</b> server
                  </List.Item>
                  <List.Item>
                    All the site content is created and stored in
                    <b>Contentful</b> and retrieved via API calls
                  </List.Item>
                  <List.Item>
                    The entire thing is hosted on <b>Heroku</b>
                  </List.Item>
                  <List.Item>
                    The app is tracked using <b>Google Tag Manager</b>
                  </List.Item>
                  <List.Item>
                    The app is fully SEO optimised and has dynamic{" "}
                    <b>Open Graph</b> tagging for all content
                  </List.Item>
                </List>
              </Card.Meta>
            </Card.Content>
          </Card>
          <Card fluid color={"red"}>
            <a href="http://www.episodefriis.dk">
              <Image src="../static/episodeFriis.png" />
            </a>
            <Card.Content>
              <Card.Header content={"episodeFriis"} />
              <Card.Description>
                episodeFriis.dk is curated by Christian, who is a massive
                TV-show afficionado and provides blog posts and recommendations
                based around the fifty best TV-shows he's watched.
              </Card.Description>
              <Divider />
              <Card.Description>
                Users can search and filter shows and posts, while Christian can
                create and link the different types of content.
              </Card.Description>
              <Divider />
              <Card.Meta>
                <List bulleted>
                  <List.Item>
                    The app was built using <b>React.js</b>
                  </List.Item>
                  <List.Item>
                    It uses the <b>Next.js</b> framework for server side
                    rendering, routing and header management.
                  </List.Item>
                  <List.Item>
                    The UI was created with the <b>Semantic UI for React</b>,
                    including transitions and responsive views
                  </List.Item>
                  <List.Item>
                    State is managed via <b>Redux</b>
                  </List.Item>
                  <List.Item>
                    The app is served via a <b>Node.js</b> server
                  </List.Item>
                  <List.Item>
                    All the site content is created and stored in{" "}
                    <b>Contentful</b> and retrieved via API calls
                  </List.Item>
                  <List.Item>
                    Search and filtering is done using <b>Algolia</b>
                  </List.Item>
                  <List.Item>
                    Content is synched between Contentful and Algolia through an
                    AIP exposed on the <b>Node.js</b> server that serves the
                    app, using a webhoook from Contentful
                  </List.Item>
                  <List.Item>
                    The entire thing is hosted on <b>Heroku</b>
                  </List.Item>
                  <List.Item>
                    The app is tracked using <b>Google Tag Manager</b>
                  </List.Item>
                  <List.Item>
                    The app is fully SEO optimised and has dynamic{" "}
                    <b>Open Graph</b> tagging for all content
                  </List.Item>
                </List>
              </Card.Meta>
            </Card.Content>
          </Card>
          <Card fluid color={"red"}>
            <a href="https://www.myjoro.com">
              <Image src="../static/MyJoRo.png" />
            </a>
            <Card.Content>
              <Card.Header content={"MyJoRo"} />
              <Card.Description>
                MyJoRo is a tool for job seekers. Users can bookmark jobs they
                find on the internet and the service will automatically save a
                screenshot of the URL provided.
              </Card.Description>
              <Divider />
              <Card.Description>
                Users can store information about the jobs, attach notes, store
                documents (CVs and cover letters) and update the status of any
                job. Three days before a job expires, users will be notified if
                they have yet to apply for it.
              </Card.Description>
              <Divider />
              <Card.Meta>
                <List bulleted>
                  <List.Item>
                    The app was built using <b>React.js</b>
                  </List.Item>
                  <List.Item>
                    The UI was created with the <b>Material UI for React</b>
                  </List.Item>
                  <List.Item>
                    Pages and routing was done with <b>React Router</b>
                  </List.Item>
                  <List.Item>
                    State is managed via <b>Redux</b>
                  </List.Item>
                  <List.Item>
                    The app is served via a <b>Node.js</b> server which also
                    runs a scheduler for notification emails and provides APIs
                    for screenshots
                  </List.Item>
                  <List.Item>
                    The data about the jobs is stored and managed in a{" "}
                    <b>Firebase Database</b>
                  </List.Item>
                  <List.Item>
                    Identity management and auth (Google Auth) is done via{" "}
                    <b>Firebase Auth</b>
                  </List.Item>
                  <List.Item>
                    Screenshots and uploaded documents are stored in{" "}
                    <b>Firebase File Storage</b>
                  </List.Item>
                  <List.Item>
                    The entire thing is hosted on <b>Heroku</b>
                  </List.Item>
                  <List.Item>
                    The app is tracked using <b>Google Tag Manager</b>
                  </List.Item>
                  <List.Item>
                    Emails are sent out using <b>Mailgun</b>
                  </List.Item>
                </List>
              </Card.Meta>
            </Card.Content>
          </Card>
          <Card fluid color={"red"}>
            <a href="https://www.bybiehl.com">
              <Image src="../static/bybiehl.png" />
            </a>
            <Card.Content>
              <Card.Header content={"byBiehl"} />
              <Card.Description>
                byBiehl is a rapidly growing jewelry brand based in Copenhagen
                and needed a global webshop with individual storefronts for
                specific countries.
              </Card.Description>
              <Divider />
              <Card.Description>
                The byBiehl shop lets users browse the collections and products,
                get inspiration and place orders. Prices are displayed in the
                relevant currency and shipping options are specific to the users
                location.
              </Card.Description>
              <Divider />
              <Card.Meta>
                <List bulleted>
                  <List.Item>
                    The site is a heavily modified <b>Prestashop</b>{" "}
                    implementation
                  </List.Item>
                  <List.Item>
                    The UI was based on the <b>Leo Odin</b> theme, but
                    customised extensively
                  </List.Item>
                  <List.Item>
                    Seven shops have been setup and users are routed to the
                    correct based <b>IP Geolocation and redirection</b>
                  </List.Item>
                  <List.Item>
                    It is integrated with{" "}
                    <b>
                      Instagram, Mailchimp, payment gateway, shipping service,
                      accounting, stock management and Google APIs
                    </b>{" "}
                    through modules and custom code
                  </List.Item>
                  <List.Item>
                    The shop is hosted on a virtual machine in{" "}
                    <b>Compute Engine in Google Cloud</b>
                  </List.Item>
                  <List.Item>
                    The shop is tracked using <b>Google Analytics</b>
                  </List.Item>
                  <List.Item>
                    Conversion pixels for <b>Adwords and Facebook</b> have been
                    implemented
                  </List.Item>
                  <List.Item>
                    Through <b>Google Shopping</b> feeds dynamic remarketing is
                    supported
                  </List.Item>
                  <List.Item>
                    The shop is <b>SEO optimised</b> with schema and dynamically
                    created sitemaps
                  </List.Item>
                  <List.Item>
                    <b>Open Graph</b> is supported across the shop for proper
                    social sharing of products
                  </List.Item>
                </List>
              </Card.Meta>
            </Card.Content>
          </Card>
          <Card fluid color={"red"}>
            <Image src="../static/simply.png" />
            <Card.Content>
              <Card.Header content={"Simply-digital.dk"} />
              <Card.Description>
                Simply Digital is my one man band digital consultancy.
              </Card.Description>
              <Divider />
              <Card.Description>
                The Simply Digital site provides a quick overview of who I am
                and what I do. It is more of a placeholder than anything at this
                stage, to be honest.
              </Card.Description>
              <Divider />
              <Card.Meta>
                <List bulleted>
                  <List.Item>
                    The app was built using <b>React.js</b>
                  </List.Item>
                  <List.Item>
                    It uses the <b>Next.js</b> framework for server side
                    rendering, routing and header management.
                  </List.Item>
                  <List.Item>
                    The UI was created with the <b>Semantic UI for React</b>,
                    including transitions and responsive views
                  </List.Item>
                  <List.Item>
                    State is managed via <b>Redux</b>
                  </List.Item>
                  <List.Item>
                    The app is served via a <b>Node.js</b> server
                  </List.Item>

                  <List.Item>
                    The entire thing is hosted on <b>Heroku</b>
                  </List.Item>
                  <List.Item>
                    The app is tracked using <b>Google Tag Manager</b>
                  </List.Item>
                  <List.Item>
                    The app is fully SEO optimised and has dynamic{" "}
                    <b>Open Graph</b> tagging for all content
                  </List.Item>
                </List>
              </Card.Meta>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </Transition>
  </div>;
