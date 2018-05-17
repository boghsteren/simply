import React from "react";
import Head from "./head";
import Link from "next/link";
import Router from "next/router";
import {
  Sidebar,
  Menu,
  Container,
  Icon,
  Divider,
  Header
} from "semantic-ui-react";
import { withRouter } from "next/router";

class Nav extends React.Component {
  constructor({ router }) {
    super();
    this.state = { visible: false };
    this.router = router;
  }
  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    return (
      <div>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57C93SN" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}
        >
          <Icon
            name="content"
            size="large"
            onClick={this.toggleVisibility}
            style={{
              zIndex: "1",
              cursor: "pointer",
              marginLeft: "40px"
            }}
          />
          <Link passHref prefetch href="/">
            <Header style={{ marginRight: "20px", cursor: "pointer" }}>
              Simply Digital / Jakob Sørensen
            </Header>
          </Link>
        </div>
        <Divider />

        <nav
          style={{
            zIndex: "999"
          }}
        >
          <Sidebar
            as={Menu}
            animation="push"
            width="thin"
            size="small"
            visible={this.state.visible}
            icon="labeled"
            vertical
          >
            <Menu.Item
              onClick={this.toggleVisibility}
              style={{ paddingTop: "20px" }}
            >
              <Icon name="close" />
            </Menu.Item>
            <Link prefetch href="/code">
              <Menu.Item
                color={"red"}
                active={this.router.pathname === "/code"}
              >
                <Icon name="code" />
                Websites
              </Menu.Item>
            </Link>
            <Link prefetch href="/projects">
              <Menu.Item
                color={"red"}
                active={this.router.pathname === "/projects"}
              >
                <Icon name="wrench" />
                Consultancy
              </Menu.Item>
            </Link>
            <Link prefetch href="/roles">
              <Menu.Item
                color={"red"}
                active={this.router.pathname === "/roles"}
              >
                <Icon name="id card outline" />
                Roles
              </Menu.Item>
            </Link>

            <Menu.Item
              as={"a"}
              href="https://github.com/boghsteren"
              color={"red"}
            >
              <Icon name="github" />
              Github
            </Menu.Item>
            <Menu.Item
              as={"a"}
              color={"red"}
              href="https://www.linkedin.com/in/jakobbs/"
            >
              <Icon name="linkedin" />
              Linkedin
            </Menu.Item>
            <Menu.Item
              as={"a"}
              color={"red"}
              href="mailto:jakob@simply-digital.dk"
            >
              <Icon name="envelope" />
              Contact
            </Menu.Item>
          </Sidebar>
        </nav>
      </div>
    );
  }
}

export default withRouter(Nav);
