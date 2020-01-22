import React from "react";
import { Menu, Icon, Responsive } from "semantic-ui-react";
import Cookiebanner from "./cookiebanner";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default ({ currentSection }) => {
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
            <Responsive minWidth="600"> Simply Digital</Responsive>
            <Responsive maxWidth="600"> Simply</Responsive>
          </Menu.Item>
        </AnchorLink>
        <AnchorLink href="#roles">
          <Menu.Item active={currentSection === "roles"}>
            <Icon name="id card outline" />
            <Responsive minWidth="600"> Experience</Responsive>
            <Responsive maxWidth="600"> Jobs</Responsive>
          </Menu.Item>
        </AnchorLink>
        <AnchorLink href="#projects">
          <Menu.Item active={currentSection === "projects"}>
            <Icon name="wrench" />
            <Responsive minWidth="600"> Projects & Consultancy Work</Responsive>
            <Responsive maxWidth="600"> Projects</Responsive>
          </Menu.Item>
        </AnchorLink>
        <AnchorLink href="#code">
          <Menu.Item active={currentSection === "code"}>
            <Icon name="code" />
            <Responsive minWidth="600"> Coding & Development</Responsive>
            <Responsive maxWidth="600">Code</Responsive>
          </Menu.Item>
        </AnchorLink>
        <AnchorLink href="#contact">
          <Menu.Item active={currentSection === "contact"}>
            <Icon name="envelope" />
            <Responsive minWidth="600"> Get in touch</Responsive>
            <Responsive maxWidth="600"> Contact</Responsive>{" "}
          </Menu.Item>
        </AnchorLink>
      </Menu>
    </div>
  );
};
