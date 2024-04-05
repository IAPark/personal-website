import { renderToStaticMarkup } from "react-dom/server";
import * as React from "react";
import { MainPage } from "./frontend/main";
import * as fs from "fs";

const page = renderToStaticMarkup(
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>I Park</title>

      <link rel="stylesheet" href="/public/style.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto+Slab"
      />
      <link rel="stylesheet" href="public/fontello/css/fontello.css" />
      <link rel="icon" href="/public/favcon.png" />
    </head>
    <body>
      <div id="content">
        <MainPage />
      </div>
    </body>
  </html>
);

// write page to file
fs.writeFileSync("index.html", page);
