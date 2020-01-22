const express = require("express");
const next = require("next");
const httpsRedirect = require("express-https-redirect");
const port = process.env.PORT || 3000;

const app = next({ port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use("*", httpsRedirect());

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
