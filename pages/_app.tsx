import '../styles/globals.css'
import { darkTheme } from '../themes'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layouts'
import { NextUIProvider } from '@nextui-org/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NextUIProvider>
  )
}
