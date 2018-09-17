import React from "react";
import Link from "next/link";
import { Message } from "semantic-ui-react";

let showCookieBanner;

export default class Cookiebanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCookieBanner: undefined
    };
  }
  componentDidMount() {
    showCookieBanner = document.cookie.replace(
      /(?:(?:^|.*;\s*)showCookieBannerSimplyDigital\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (showCookieBanner === "false") {
      this.setState({ showCookieBanner: false });
    } else this.setState({ showCookieBanner: true });
  }
  update = () => {
    this.setState({ showCookieBanner: false });
  };

  render() {
    return (
      this.state.showCookieBanner === true &&
      <div
        style={{
          width: "100%",
          zIndex: "999",
          position: "fixed",
          bottom: "0"
        }}
      >
        <Message
          onDismiss={() => {
            document.cookie =
              "showCookieBannerSimplyDigital=false;max-age=31536000";
            this.update();
          }}
          color="grey"
        >
          <Message.Header>Cookie Alert</Message.Header>
          Cookies are being used in the making of this website!
          <Link href="/privacy">
            <a> Read all about it!</a>
          </Link>
        </Message>
      </div>
    );
  }
}
