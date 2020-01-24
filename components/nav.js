import React from "react";
import { Menu, Icon, Responsive } from "semantic-ui-react";
import Cookiebanner from "./cookiebanner";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default ({ currentSection }) => {
  const width = () =>
    typeof window !== "undefined" ? window.innerWidth : 1000;
  return (
    <div>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57C93SN" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
        }}
      />
      <Cookiebanner />

      <Menu
        secondary
        pointing
        fixed="top"
        style={{ backgroundColor: "white", maxWidth: "100vw" }}
      >
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
            <Responsive getWidth={width} minWidth="600">
              <Icon name="id card outline" />
              Experience
            </Responsive>
            <Responsive getWidth={width} maxWidth="600">
              CV
            </Responsive>
          </Menu.Item>
        </AnchorLink>
        <AnchorLink href="#projects">
          <Menu.Item active={currentSection === "projects"}>
            <Responsive getWidth={width} minWidth="600">
              <Icon name="wrench" />
              Projects & Consultancy Work
            </Responsive>
            <Responsive getWidth={width} maxWidth="600">
              Projects
            </Responsive>
          </Menu.Item>
        </AnchorLink>
        <AnchorLink href="#code">
          <Menu.Item active={currentSection === "code"}>
            <Responsive getWidth={width} minWidth="600">
              <Icon name="code" />
              Coding & Development
            </Responsive>
            <Responsive getWidth={width} maxWidth="600">
              Code
            </Responsive>
          </Menu.Item>
        </AnchorLink>
        <AnchorLink href="#contact">
          <Menu.Item active={currentSection === "contact"}>
            <Responsive getWidth={width} minWidth="600">
              <Icon name="envelope" />
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
