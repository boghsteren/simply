import React from "react";
import { Menu, Icon, Responsive } from "semantic-ui-react";
import Cookiebanner from "./cookiebanner";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default ({ currentSection }) => {
  const width = () => (typeof window !== undefined ? 1000 : window.innerWidth);
  return (
    <div>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57C93SN" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
        }}
      />
      <Cookiebanner />

      <Menu secondary pointing fixed="top" style={{ backgroundColor: "white" }}>
        <AnchorLink href="#top">
          <Menu.Item active={currentSection === "top"}>
            <Responsive getWidth={width} minWidth="600">
              Simply Digital
            </Responsive>
            <Responsive getWidth={width} maxWidth="600">
              Simply
            </Responsive>
          </Menu.Item>
        </AnchorLink>
        <AnchorLink href="#roles">
          <Menu.Item active={currentSection === "roles"}>
            <Icon name="id card outline" />
            <Responsive getWidth={width} minWidth="600">
              Experience
            </Responsive>
            <Responsive getWidth={width} maxWidth="600">
              Jobs
            </Responsive>
          </Menu.Item>
        </AnchorLink>
        <AnchorLink href="#projects">
          <Menu.Item active={currentSection === "projects"}>
            <Icon name="wrench" />
            <Responsive getWidth={width} minWidth="600">
              Projects & Consultancy Work
            </Responsive>
            <Responsive getWidth={width} maxWidth="600">
              Projects
            </Responsive>
          </Menu.Item>
        </AnchorLink>
        <AnchorLink href="#code">
          <Menu.Item active={currentSection === "code"}>
            <Icon name="code" />
            <Responsive getWidth={width} minWidth="600">
              Coding & Development
            </Responsive>
            <Responsive getWidth={width} maxWidth="600">
              Code
            </Responsive>
          </Menu.Item>
        </AnchorLink>
        <AnchorLink href="#contact">
          <Menu.Item active={currentSection === "contact"}>
            <Icon name="envelope" />
            <Responsive getWidth={width} minWidth="600">
              Get in touch
            </Responsive>
            <Responsive getWidth={width} maxWidth="600">
              Contact
            </Responsive>
          </Menu.Item>
        </AnchorLink>
      </Menu>
    </div>
  );
};
