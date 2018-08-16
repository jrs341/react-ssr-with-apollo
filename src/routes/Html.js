/* eslint-disable react/no-danger */

import React from 'react';

const Html = ({ content, client: { cache } }) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/*<link rel="icon" type='image/svg+xml' href="../components/Logo/Logo2.ico"/>*/}
      <link rel="icon"  href="favicon.ico"/>
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
      <title>Calhoun's Riverside RV Retreat</title>
    </head>
    <body>
      <img src='/static/Logo2.ico' height='16' width='16'/>
      <svg width='16' height='16' xmlns='http://www.w3.org/2000/svg' style={{backgroundColor: 'white'}} >
          <text key='logoC' x='3' y='14.5' style={{fill: 'blue', fontSize: '18', fontFamily: 'Akronim'}}> C </text>
          <text key='logoRV' x='6' y='11' style={{fill: 'red', fontSize: '6', fontFamily: 'Amita'}}> RV </text>
      </svg>
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
