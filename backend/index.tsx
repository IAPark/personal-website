import * as express from "express";
import {renderToStaticMarkup, renderToString} from "react-dom/server"
import * as React from "react";
import { MainPage } from "../frontend/main";


const app = express();

app.get('/', function (req, res) {
  res.send(renderToStaticMarkup(
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <title>Isaac Park</title>

        <link rel="stylesheet" href="/public/style.css"/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab"/>
        <link rel="stylesheet" href='public/fontello/css/fontello.css'/>
        <link rel="icon" href="/public/favcon.png" />

      </head>
      <body>
        <div id='content'><MainPage/></div> 
      </body>
    </html>
  ));
});

app.use('/public', express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})