import Document, { Head, Html, Main, NextScript } from 'next/document';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class GlobalDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang="tr">
        <Head />
        <body className="text-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default GlobalDocument;
