import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from 'lib/gtag';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* Meta Tags */}
          <meta name="title" content="SocialWell :: Homepage" key="title" />
          <meta
            name="description"
            key="description"
            content="SocialWell brings app to connect farmers and markets."
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" key="ogtype" content="website" />
          <meta
            property="og:url"
            key="ogurl"
            content="https://www.socialwell.net/"
          />
          <meta
            property="og:title"
            key="ogtitle"
            content="SocialWell App farmers FPO markets"
          />
          <meta
            property="og:description"
            key="ogdescription"
            content="SocialWell brings apps to build connections between farmers and markets."
          />
          <meta
            property="og:image"
            key="ogimage"
            content="https://www.socialwell.net/assets/logo/socialwell-logo.png"
          />

          {/* <!-- Twitter --> */}
          <meta
            property="twitter:card"
            key="twittercard"
            content="summary_large_image"
          />
          <meta
            property="twitter:url"
            key="twitterurl"
            content="https://www.socialwell.net"
          />
          <meta
            property="twitter:title"
            key="twittertitle"
            content="SocialWell"
          />
          <meta
            property="twitter:description"
            key="twitterdesc"
            content="SocialWell brings apps to help you build connections between farmers and markets."
          />
          <meta
            property="twitter:image"
            key="twitterimage"
            content="https://www.socialwell.net/assets/logo/logo-square.png"
          />

          {/* Mukta Font Import */}
          <link
            rel="preload"
            href="/assets/fonts/Mukta/Mukta-Regular.ttf"
            as="font"
            crossOrigin=""
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
