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
      </head>
      <body>
        <div id='content' dangerouslySetInnerHTML={{__html: renderToString(<MainPage/>)}}/>
        <script src={req.protocol+"://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js"}/>
        <script src={req.protocol+"://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js"}/>
        <script src="/public/bundle.js"/>
      </body>
    </html>
  ));
});

app.use('/public', express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})