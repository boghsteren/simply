import React from "react";
import Head from "../components/head";
import Nav from "../components/nav";
import {
  Header,
  Container,
  Card,
  List,
  Image,
  Transition
} from "semantic-ui-react";

export default () =>
  <div>
    <Head
      title="Roles - Simply Digital"
      description="I have had a range of roles in my career."
      url="http://www.simply-digital.dk/roles"
      ogImage="../static/roles.png"
    />
    <Nav />
    <Transition animation={"fade"} transitionOnMount duration={1500}>
      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Header size={"huge"} textAlign="center">
          Formal Roles I have had
        </Header>
        <Card.Group itemsPerRow={2} stackable>
          <Card>
            <Image src="/static/fromtu-final.jpg" />
            <Card.Content>
              <Card.Header>Chief Product Officer</Card.Header>
              <Card.Meta>Fromtu</Card.Meta>
              <Card.Meta>Denmark May 2017 – January 2018</Card.Meta>
              <Card.Description>
                Fromtu made trade simple, helping European importers and African
                exporters to find each other, build trusted relationships and
                streamline their deals. It was a digital venture wholly owned by
                A.P. Møller Mærsk, but organised as an independent startup. As
                the Chief Product Officer, I was second in command and was
                directly in charge of all aspects of the business except sales.
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <List bulleted>
                <List.Item>
                  <List.Content>
                    Set overall strategy and direction with the CEO
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>Built the product roadmap</List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Held ultimate ownership of the technical architecture and
                    technology choices (acting as CTO)
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Setup the product and technical organisation
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Hired and managed our developers, product owner, designer,
                    digital marketing expert
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Managed external vendors and contractors to ensure alignment
                    and timely delivery
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Managed external vendors and contractors to ensure alignment
                    and timely delivery
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Insourced development and design to improve delivery and
                    reduce costs
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Insourced development and design to improve delivery and
                    reduce costs
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Set the approach and held ultimate ownership of design,
                    brand and UX
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Picked and implemented business tools across the entire
                    organisation (acting as CIO/COO)
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Tracked and managed the portfolio of activities across the
                    entire organisation (acting as PMO)
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    Managed company hardware and software, compliance and
                    security setup
                  </List.Content>
                </List.Item>
              </List>
            </Card.Content>
          </Card>
          <Card>
            <Image src="/static/9s-final.jpg" />

            <Card.Content>
              <Card.Header>Head of Product</Card.Header>
              <Card.Meta> 9 Spokes</Card.Meta>{" "}
              <Card.Meta>New Zealand January 2016 – January 2017</Card.Meta>
              <Card.Description>
                9 Spokes brings together the best of online software in one
                place and integrates it to give you a powerful decision-making
                dashboard. It’s a software as a service start-up with global
                ambitions and clients that include Barclays, Deloitte and
                Suncorp. As the Head of Product, I was part of the commercial
                management team and was a key driver in hitting important
                milestones and building the product from the ground up.
              </Card.Description>
            </Card.Content>
            <Card.Content>
              {" "}<List bulleted>
                <List.Item>Formulated the overall product strategy</List.Item>
                <List.Item>
                  Built the product roadmap and the product backlog
                </List.Item>
                <List.Item>Owned the reporting and data backlog</List.Item>
                <List.Item>
                  Created a multi tenanted, configurable product for white
                  labelling to enterprise client
                </List.Item>
                <List.Item>
                  Championed end user centric design and simplicity
                </List.Item>
                <List.Item>
                  Managed and hired a team consisting of product owners,
                  business analysts and UX designers
                </List.Item>
                <List.Item>
                  Worked closely with all stakeholders to facilitate agile
                  (scrum) way of working
                </List.Item>
                <List.Item>
                  Aligned architectural and technical strategy with product
                  roadmap
                </List.Item>
                <List.Item>
                  Ensured ongoing product management and support for all parts
                  of the organization
                </List.Item>
                <List.Item>
                  Acted as intermediary between business and technology across
                  all aspects of the business
                </List.Item>
              </List>
            </Card.Content>
          </Card>
          <Card>
            <Image src="/static/lb.png" />

            <Card.Content>
              <Card.Header>Head of Product</Card.Header>{" "}
              <Card.Meta> Lightbox</Card.Meta>{" "}
              <Card.Meta> New Zealand January 2014 – December 2015</Card.Meta>
              <Card.Description>
                Lightbox is an online TV streaming service, setup and owned by
                New Zealands biggest telecommunications company, Spark NZ. As
                the Head of Product, I was a key member of the management team
                and instrumental in bringing Lightbox from concept to launch in
                6 months and comfortable hitting our year 1 target of 70k+
                customers.
              </Card.Description>
            </Card.Content>
            <Card.Content>
              {" "}<List bulleted>
                <List.Item>
                  Built team of product managers, UX designers and data analysts
                  from scratch
                </List.Item>
                <List.Item>
                  Owned user experience, customer journeys and feature sets
                  across all platforms
                </List.Item>
                <List.Item>
                  Trained customer service team and monitored service quality
                  and productivity
                </List.Item>
                <List.Item>
                  Managed vendors, from statement of work to final sign off
                </List.Item>
                <List.Item>
                  Oversaw delivery of applications for web, iOS, Android,
                  Playstation 3&4, Samsung, Panasonic, LG and Sony SmartTVs
                  within the first 12 months of launch
                </List.Item>
                <List.Item>
                  Setup internal scrum method, processes and agile culture
                </List.Item>
                <List.Item>
                  Completely rebuilt website in house to boost performance,
                  stability and UX
                </List.Item>
                <List.Item>
                  Implemented best in class digital advertising tools and
                  tracking
                </List.Item>
                <List.Item>
                  Defined data warehousing strategy, recruited resources and
                  managed reporting business wide
                </List.Item>
                <List.Item>
                  Setup CRM program in Salesforce Marketing Cloud
                </List.Item>
              </List>
            </Card.Content>
          </Card>
          <Card>
            <Image src="/static/yousee-final.jpg" />

            <Card.Content>
              <Card.Header>Head of On Demand</Card.Header>
              <Card.Meta> YouSee</Card.Meta>
              <Card.Meta> Denmark April 2011 – November 2013</Card.Meta>
              <Card.Description>
                YouSee was the biggest cable operator and pay-tv provider in
                Denmark, owned by TDC. During my tenure as Head of On Demand, I
                was a key member of the Content and Product Management team,
                directly responsible for doubling activation rates across online
                services while retaining revenue from legacy set top box
                customer base.
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <List bulleted>
                <List.Item>
                  Built a team of product managers for digital services and
                  premium products • Created and maintained product roadmaps
                </List.Item>
                <List.Item>
                  Increased activation through messaging, redesign and
                  proposition management
                </List.Item>
                <List.Item>
                  Relaunched TV Everywhere (Web-TV) service across web, iOS and
                  Android
                </List.Item>
                <List.Item>
                  Relaunched Music service (PLAY) across web, iOS and Android
                </List.Item>
                <List.Item>
                  Launched IP enabled next generation set top box (YouBio Boks)
                </List.Item>
                <List.Item>
                  Created and executed strategy for legacy set top boxes to
                  maximise monetisation
                </List.Item>
                <List.Item>
                  Project managed major SVOD launch, including platform build,
                  UX and launch management
                </List.Item>
                <List.Item>
                  Championed and implemented social media as official support
                  channel
                </List.Item>
                <List.Item>
                  Maintained portfolio of roadmaps across all product areas
                </List.Item>
              </List>
            </Card.Content>
          </Card>
          <Card>
            <Image src="/static/yousee-final.jpg" />

            <Card.Content>
              <Card.Header>Product Manager - Digital TV</Card.Header>
              <Card.Meta>YouSee</Card.Meta>
              <Card.Meta>January 2008 - March 2011</Card.Meta>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image src="/static/tdc-final.jpg" />

              <Card.Header>Executive Assistant</Card.Header>
              <Card.Meta>TDC Sweden</Card.Meta>
              <Card.Meta>May 2007 - December 2007</Card.Meta>
            </Card.Content>
          </Card>
          <Card>
            <Image src="/static/tdc-final.jpg" />

            <Card.Content>
              <Card.Header>Product Manager - Broadband</Card.Header>
              <Card.Meta>TDC</Card.Meta>
              <Card.Meta>September 2006 - April 2007</Card.Meta>
            </Card.Content>
          </Card>
          <Card>
            <Image src="/static/rudersdal-final.jpg" />

            <Card.Content>
              <Card.Header>Analyst</Card.Header>
              <Card.Meta>Rudersdal Kommune</Card.Meta>
              <Card.Meta>January 2006 - August 2006</Card.Meta>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    </Transition>
  </div>;
