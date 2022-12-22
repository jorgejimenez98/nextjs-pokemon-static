import { Html, Head, Main, NextScript } from 'next/document'
import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import { CssBaseline } from '@nextui-org/react'

export default function MyDocument() {
  const getInitialProps = async (
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> => {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    }
  }

 
  return (
    <Html lang="en">
      <Head>
        {CssBaseline.flush()}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
