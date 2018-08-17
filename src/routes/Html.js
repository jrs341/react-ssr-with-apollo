/* eslint-disable react/no-danger */

import React from 'react';

const Html = ({ content, client: { cache } }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
        integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
        crossOrigin="anonymous"
      />
      <link href='https://fonts.googleapis.com/css?family=Akronim' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Amita' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Averia Gruesa Libre' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Alex Brush' rel='stylesheet'/>
      <link rel="icon"  href="/static/favicon.ico"/>
      <title>Calhoun's Riverside RV Retreat</title>
    </head>
    <body>
      {/*<img src='/static/favicon.svg' height='16' width='16'/>
      <svg width='16px' height='16px' xmlns='http://www.w3.org/2000/svg' style={{backgroundColor: 'transparent'}} >
          <text key='logoC' x='0' y='15.5' style={{fill: 'blue', fontSize: '21'}}> C </text>
          <text key='logoRV' x='3.5' y='10.5' style={{fill: 'red', fontSize: '6.8'}}> RV </text>
      </svg>*/}
      <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
      
      <div id="footer">
      </div>
      <script
        charSet="UTF-8"
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(cache.extract())};`,
        }}
      />
      <script src="/static/bundle.js" charSet="UTF-8" />
    </body>
  </html>
);

export default Html;
