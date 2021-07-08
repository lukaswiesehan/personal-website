import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link rel="preload" href="/fonts/lato-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="preload" href="/fonts/lato-latin-black.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
          <script async defer data-website-id="4bcb1c40-89a7-4c27-a9a5-b14a3242d0bf" src="https://analytics.lukaswiesehan.de/umami.js"></script>
        </Head>  
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument